import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Tests", () => {
  it("default button should be square and have required props", () => {
    render(<Button id="one" value="1" />);

    const button = screen.getByRole("button", { name: /1/ });
    expect(button).toBeInTheDocument();
  });

  it("displays vertical rectangle button", () => {
    render(<Button buttonType="verticalRectangle" id="equals" value="=" />);

    const button = screen.getByRole("button", { name: /=/ });
    expect(button).toBeInTheDocument();
  });

  it("displays red horizontal rectangle button", () => {
    render(
      <Button buttonType="horizontalRectangleRed" id="clear" value="AC" />
    );

    const button = screen.getByRole("button", { name: /AC/ });
    expect(button).toBeInTheDocument();
  });

  it("displays grey horizontal rectangle button", () => {
    render(<Button buttonType="horizontalRectangleGrey" id="zero" value="0" />);

    const button = screen.getByRole("button", { name: /0/ });
    expect(button).toBeInTheDocument();
  });
});
