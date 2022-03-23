import { FC } from "react";

import styles from "./Output.module.scss";

interface OutputProps {
  output: string;
}

const Output: FC<OutputProps> = ({ output }) => (
  <div className={styles.Output}>{output}</div>
);

export default Output;
