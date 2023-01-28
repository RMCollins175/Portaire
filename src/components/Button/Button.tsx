import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      <p className={styles.icon}>I</p>
      <p>{text}</p>
    </button>
  );
}
