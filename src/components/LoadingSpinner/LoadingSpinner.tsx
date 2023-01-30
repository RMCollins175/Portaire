import React from "react";
import styles from "./LoadingSpinner.module.css";

interface SpinnerProps {
  spinnerColor?: string;
  highlightColor?: string;
}

const Spinner = ({
  spinnerColor = "black",
  highlightColor = "#5b867f",
}: SpinnerProps) => {
  return (
    <div
      className={styles.spinner}
      style={{
        border: `7px solid ${spinnerColor}`,
        borderTopColor: `${highlightColor}`,
      }}></div>
  );
};

export default Spinner;
