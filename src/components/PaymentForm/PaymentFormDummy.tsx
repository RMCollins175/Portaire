import React, { useEffect, useMemo, useState } from "react";
import styles from "./PaymentForm.module.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";
import stripe_img from "../../assets/img/stripe.png";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import placeholders from "../constants/paymentFormPlaceholders";

interface PaymentFormProps {
  onBack: () => void;
  formData: any;
  isLoading: boolean | null;
  status: string | null;
}

export const PaymentForm = ({
  onBack,
  formData,
  isLoading,
  status,
}: PaymentFormProps) => {
  const [countryValue, setCountryValue] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      ccv: "",
    },
  });

  const handleSubmission = (data: any) => {
    console.log(
      "🚀 ~ file: PaymentForm.tsx:60 ~ handleSubmission ~ data",
      data
    );
  };

  return (
    <form
      onSubmit={handleSubmit((data) => handleSubmission(data))}
      className={styles.formContainer}>
      <h3 style={{ margin: "0px" }}>Update payment method</h3>
      <div>
        <section
          style={{
            border: "1px solid grey",
            width: "100%",
          }}>
          <label className={styles.cardInput}></label>
          <input
            {...register("cardNumber", {
              required: "Card number is required",
            })}
            placeholder={placeholders.cardNumber}
            style={{ width: "16em", border: "none", outline: "transparent" }}
          />
          <input
            {...register("expiryDate", {
              required: "Expiry date is required",
            })}
            placeholder={placeholders.expiryDate}
            style={{ width: "6em", border: "none", outline: "transparent" }}
          />
          <input
            {...register("ccv", {
              required: "CCV is required",
            })}
            placeholder={placeholders.ccv}
            style={{ width: "3em", border: "none", outline: "transparent" }}
          />
        </section>
        {errors.cardNumber && <div>Field is required</div>}
      </div>
      <section>
        <div className={styles.callToActionContainer}>
          <button
            type="button"
            onClick={onBack}
            aria-label={`Cancel Button`}
            className={styles.button}>
            Cancel
          </button>
          <button
            type="submit"
            aria-label={`Update Button`}
            className={styles.button}>
            Update
          </button>
        </div>
      </section>
      <section style={{ alignSelf: "center" }}>
        <img src={stripe_img} alt="Powered by Stripe" />
      </section>
    </form>
  );
};
