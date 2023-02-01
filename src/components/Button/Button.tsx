import React, { ReactNode } from "react";
import styles from "./Button.module.css";
import colors from "../constants/theme";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: ReactNode;
  type?: "payment" | "submit" | "reset" | undefined;
  backgroundColor?: string;
  textColor?: string;
}

export default function Button({
  text,
  onClick,
  icon,
  type,
  backgroundColor = colors.white,
  textColor = colors.black,
}: ButtonProps) {
  if (type === "payment") {
    return (
      <button onClick={onClick} className={styles.paymentButton}>
        <div>{icon}</div>
        <p>{text}</p>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type || "button"}
      aria-label={`${text} Button`}
      className={styles.generalCallToActionButton}
      style={{ backgroundColor: backgroundColor, color: textColor }}>
      {text}
    </button>
  );
}
