import React from "react";
import styles from "./PaymentForm.module.css";

export const PaymentForm = ({ onBack }: any) => {
  return (
    <div className={styles.formContainer}>
      <h2>Update payment method</h2>
      <button onClick={onBack}>Cancel</button>
    </div>
  );
};
