import { FC } from "react";

import styles from "./Formula.module.scss";

interface FormulaProps {
  formula: string;
}

const Formula: FC<FormulaProps> = ({ formula }) => (
  <div className={styles.Formula}>{formula}</div>
);

export default Formula;
