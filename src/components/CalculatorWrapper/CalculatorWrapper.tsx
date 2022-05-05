import { FC } from "react";
import styles from "./CalculatorWrapper.module.scss";

const CalculatorWrapper: FC = ({ children }) => (
  <div className={styles.CalculatorWrapper}>{children}</div>
);

export default CalculatorWrapper;
