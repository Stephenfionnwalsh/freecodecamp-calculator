import { useState } from "react";

import Button from "../Button/Button";
import CalculatorWrapper from "../CalculatorWrapper/CalculatorWrapper";

const Calculator = () => {
  const [currentSelectedCharacter, setCurrentselectedCharacter] = useState("0");
  const getSelectedCharacterOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCurrentselectedCharacter(event.currentTarget.value);
  };
  return (
    <CalculatorWrapper>
      <Button
        onClick={getSelectedCharacterOnClick}
        buttonType="horizontalRectangleRed"
        value="AC"
        id="clear"
      />
      <Button
        onClick={getSelectedCharacterOnClick}
        buttonType="square"
        value="/"
        id="divide"
      />
      <Button
        onClick={getSelectedCharacterOnClick}
        buttonType="square"
        value="x"
        id="multiply"
      />
      <Button
        onClick={getSelectedCharacterOnClick}
        buttonType="square"
        value="7"
        id="seven"
      />
      <Button
        onClick={getSelectedCharacterOnClick}
        buttonType="square"
        value="8"
        id="eight"
      />
      <Button
        onClick={getSelectedCharacterOnClick}
        buttonType="square"
        value="9"
        id="nine"
      />
      <Button
        onClick={getSelectedCharacterOnClick}
        buttonType="square"
        value="-"
        id="minus"
      />
      <Button
        onClick={getSelectedCharacterOnClick}
        buttonType="square"
        value="4"
        id="four"
      />
      <Button
        onClick={getSelectedCharacterOnClick}
        buttonType="square"
        value="5"
        id="five"
      />
      <Button
        onClick={getSelectedCharacterOnClick}
        buttonType="square"
        value="6"
        id="six"
      />
      <Button
        onClick={getSelectedCharacterOnClick}
        buttonType="square"
        value="+"
        id="add"
      />
      <div>
        <Button
          onClick={getSelectedCharacterOnClick}
          buttonType="square"
          value="1"
          id="one"
        />
        <Button
          onClick={getSelectedCharacterOnClick}
          buttonType="square"
          value="2"
          id="two"
        />
        <Button
          onClick={getSelectedCharacterOnClick}
          buttonType="square"
          value="3"
          id="three"
        />
        <div>
          <Button
            onClick={getSelectedCharacterOnClick}
            buttonType="horizontalRectangleGrey"
            value="0"
            id="zero"
          />
          <Button
            onClick={getSelectedCharacterOnClick}
            buttonType="square"
            value="."
            id="decimal"
          />
          <Button
            onClick={getSelectedCharacterOnClick}
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
