import { useState } from "react";

import Button from "../Button/Button";
import CalculatorWrapper from "../CalculatorWrapper/CalculatorWrapper";
import Formula from "../Formula/Fomula";
import Output from "../Output/Output";

const Calculator = () => {
  const [answer, setAnswer] = useState("0");
  const [formula, setFormula] = useState("");

  const numberButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // If there is a full completed equation then when we click on a number it starts a new equation
    if (formula.match(/=/)) {
      setFormula(e.currentTarget.value);
      setAnswer(e.currentTarget.value);
      return;
    }

    const currentNumber = e.currentTarget.value;

    setFormula((prev) => prev + currentNumber);
    if (answer === "0" || answer.match(/(-|\+|\/|x)/g)) {
      setAnswer(currentNumber);
    } else {
      setAnswer((prev) => prev + currentNumber);
    }
  };

  const operatorButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const currentOperator = e.currentTarget.value;
    const getLastChar = formula.charAt(formula.length - 1);
    const checkCharForPattern = getLastChar.match(/(-|\+|\/|x)/g);

    if (formula.match(/=/)) {
      setFormula(answer);
    }

    // if there ar two operators and the last is a minus. We need to check this so we can perform arithmetic operastions on negative numbers
    if (checkCharForPattern && currentOperator === "-") {
      setAnswer(currentOperator);
      setFormula((prev) => prev + currentOperator);
    }

    // The below condition needs to check if the previous char was an operator and to overwrite it unless it was a minus
    if (checkCharForPattern && currentOperator !== "-") {
      setAnswer(currentOperator);
      const sliceFormula = formula.match(/(^\d+)/g);
      setFormula(sliceFormula + currentOperator);
    }

    if (!checkCharForPattern) {
      setAnswer(currentOperator);
      setFormula((prev) => prev + currentOperator);
    }
  };

  const addDecimal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (answer.toString().includes(".")) return;
    if (formula.includes("=")) {
      setAnswer(".");
      setFormula(".");
    } else {
      setAnswer((prev) => prev + ".");
      setFormula((prev) => prev + ".");
    }
  };

  const clear = () => {
    setAnswer("0");
    setFormula("");
  };

  const evaluate = () => {
    if (!formula) return;
    if (formula.match(/=/)) return;

    // check if each sequence of numbers starts with multiple zeros and removes them
    const splitFormula = formula
      .split(/(-|\+|\/|x)/g)
      .map((item) => item.replace(/^0+/g, ""))
      .reduce((a, b) => a + b, "");
    const result = eval(splitFormula.replace(/x/g, "*"));
    setFormula((prev) => `${prev}=${result}`);
    setAnswer(result);
  };

  return (
    <CalculatorWrapper>
      <Formula formula={formula} />
      <Output output={answer} />
      <Button
        onClick={clear}
        buttonType="horizontalRectangleRed"
        value="AC"
        id="clear"
      />
      <Button
        onClick={operatorButtonClick}
        buttonType="square"
        value="/"
        id="divide"
      />
      <Button
        onClick={operatorButtonClick}
        buttonType="square"
        value="x"
        id="multiply"
      />
      <Button
        onClick={numberButtonClick}
        buttonType="square"
        value="7"
        id="seven"
      />
      <Button
        onClick={numberButtonClick}
        buttonType="square"
        value="8"
        id="eight"
      />
      <Button
        onClick={numberButtonClick}
        buttonType="square"
        value="9"
        id="nine"
      />
      <Button
        onClick={operatorButtonClick}
        buttonType="square"
        value="-"
        id="minus"
      />
      <Button
        onClick={numberButtonClick}
        buttonType="square"
        value="4"
        id="four"
      />
      <Button
        onClick={numberButtonClick}
        buttonType="square"
        value="5"
        id="five"
      />
      <Button
        onClick={numberButtonClick}
        buttonType="square"
        value="6"
        id="six"
      />
      <Button
        onClick={operatorButtonClick}
        buttonType="square"
        value="+"
        id="add"
      />
      <div>
        <Button
          onClick={numberButtonClick}
          buttonType="square"
          value="1"
          id="one"
        />
        <Button
          onClick={numberButtonClick}
          buttonType="square"
          value="2"
          id="two"
        />
        <Button
          onClick={numberButtonClick}
          buttonType="square"
          value="3"
          id="three"
        />
        <div>
          <Button
            onClick={numberButtonClick}
            buttonType="horizontalRectangleGrey"
            value="0"
            id="zero"
          />
          <Button
            onClick={addDecimal}
            buttonType="square"
            value="."
            id="decimal"
          />
          <Button
            onClick={evaluate}
            buttonType="verticalRectangle"
            value="="
            id="equals"
          />
        </div>
      </div>
    </CalculatorWrapper>
  );
};

export default Calculator;
