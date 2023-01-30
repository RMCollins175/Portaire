import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  icon: ReactNode;
}

export default function Button({ text, onClick, icon }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      <div>{icon}</div>
      <p>{text}</p>
    </button>
  );
}
