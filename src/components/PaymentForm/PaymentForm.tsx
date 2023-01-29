import React from "react";
import styles from "./PaymentForm.module.css";
import { useForm } from "react-hook-form";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";

export const PaymentForm = ({ onBack }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      ccv: "",
      addressLineOne: "",
      addressLineTwo: "",
    },
  });

  // const {
  //   meta,
  //   getCardImageProps,
  //   getCardNumberProps,
  //   getExpiryDateProps,
  //   getCVCProps,
  //   wrapperProps,
  // } = usePaymentInputs();

  const handleSubmission = (data: any) => {
    console.log(
      "🚀 ~ file: PaymentForm.tsx:18 ~ handleSubmission ~ data",
      data
    );
  };
  return (
    <form
      onSubmit={handleSubmit((data) => handleSubmission(data))}
      className={styles.formContainer}>
      <h2>Update payment method</h2>

      {/* <PaymentInputsWrapper {...wrapperProps}> */}
      <label
        style={{
          border: "1px solid grey",
          paddingBottom: "5px",
          outline: "red",
        }}
        className={styles.cardInput}>
        <input
          // {...getCardNumberProps({ onChange: () => {} })}
          {...register("cardNumber", {
            required: "Card number is required",
          })}
          placeholder="Card number"
          style={{ width: "16em", border: "none", outline: "transparent" }}
        />
        <input
          // {...getCardNumberProps({ onChange: () => {} })}
          {...register("expiryDate", {
            required: "Expiry date is required",
          })}
          placeholder="MM/YY"
          style={{ width: "6em", border: "none", outline: "transparent" }}
        />
        <input
          // {...getCardNumberProps({ onChange: () => {} })}
          {...register("ccv", {
            required: "CCV is required",
          })}
          placeholder={"CCV"}
          style={{ width: "3em", border: "none", outline: "transparent" }}
        />
      </label>
      {/* </PaymentInputsWrapper> */}
      <label>
        <input
          // id={`title-${idea?.id}`}
          {...register("addressLineOne", {
            required: "Address line 1 is required",
          })}
          placeholder="e.g. 123 Fake St."
          required
          className={styles.addressInput}
          // defaultValue={idea?.title}
          // aria-label={idea?.title}
        />
      </label>
      <label>
        <input
          // id={`title-${idea?.id}`}
          {...register("addressLineTwo", {
            required: "Address line 2 is required",
          })}
          placeholder="e.g. 123 Fake St."
          className={styles.addressInput}
          // defaultValue={idea?.title}
          // aria-label={idea?.title}
        />
      </label>
      <div>
        <button onClick={onBack}>Cancel</button>
      </div>
    </form>
  );
};
