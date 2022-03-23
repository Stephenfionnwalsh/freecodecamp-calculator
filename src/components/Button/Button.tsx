import React, { FC } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  buttonType?:
    | "square"
    | "verticalRectangle"
    | "horizontalRectangleRed"
    | "horizontalRectangleGrey";
  id: string;
  value: string;
}

const Button: FC<ButtonProps> = ({
  buttonType = "square",
  id,
  value,
  ...props
}) => {
  const classes = cn(styles.Button, {
    [styles[`Button__${buttonType}`]]: buttonType,
  });

  return (
    <button {...props} className={classes} id={id} value={value}>
      {value}
    </button>
  );
};

export default Button;
