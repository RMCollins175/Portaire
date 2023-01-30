import React, { useEffect, useMemo, useState } from "react";
import styles from "./PaymentForm.module.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";
import stripe_img from "../../assets/img/stripe.png";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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
  const [value, setValue] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm({
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      ccv: "",
      addressLineOne: formData.address_one || "",
      addressLineTwo: formData.address_two || "",
      country: value,
      state: "" || formData.state,
      postcode: "" || formData.post_code,
    },
  });

  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (event: any) => {
    // setValue(value);
    setValue(event.target.value);
  };

  const handleSubmission = (data: any) => {
    console.log(
      "🚀 ~ file: PaymentForm.tsx:18 ~ handleSubmission ~ data",
      data
    );
  };

  if (status === "error") {
    return (
      <div>
        <h1>Sorry, this isn't working right now. Please try again later </h1>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <form
      onSubmit={handleSubmit((data) => handleSubmission(data))}
      className={styles.formContainer}>
      <h3 style={{ margin: "0px" }}>Update payment method</h3>
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
          placeholder="Card number"
          style={{ width: "16em", border: "none", outline: "transparent" }}
        />
        <input
          {...register("expiryDate", {
            required: "Expiry date is required",
          })}
          placeholder="MM/YY"
          style={{ width: "6em", border: "none", outline: "transparent" }}
        />
        <input
          {...register("ccv", {
            required: "CCV is required",
          })}
          placeholder={"CCV"}
          style={{ width: "3em", border: "none", outline: "transparent" }}
        />
      </section>
      <section>
        <label className={styles.addressLabel}>Address Line 1</label>
        <input
          {...register("addressLineOne", {
            required: "Address line 1 is required",
          })}
          placeholder="e.g. 123 Fake St."
          required
          className={styles.addressInput}
        />
      </section>
      <section>
        <label className={styles.addressLabel}>Address Line 2</label>
        <input
          {...register("addressLineTwo", {
            required: "Address line 2 is required",
          })}
          placeholder="e.g. 123 Fake St."
          className={styles.addressInput}
        />
      </section>
      <section className={styles.customSelect}>
        <label className={styles.countryLabel}>Country</label>
        <select {...register("country")} value={value} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
        {/* 
        <Select
          {...register("country")}
          isClearable
          options={options as any}
          value={value}
          onChange={handleChange}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              height: "50px",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "hotpink",
              primary: "black",
            },
          })}
        /> */}
      </section>
      <section className={styles.stateAndPostcodeSection}>
        <div className={styles.stateAndPostcodeContainer}>
          <label className={styles.stateAndPostcodeLabel}>
            State <span>(optional)</span>
          </label>
          <input
            {...register("state", {
              required: "State is required",
            })}
            placeholder="e.g. 123 Fake St."
            className={styles.stateAndPostcodeInput}
          />
        </div>
        <div className={styles.stateAndPostcodeContainer}>
          <label>Post code</label>
          <input
            {...register("postcode", {
              required: "Postcode is required",
            })}
            placeholder="e.g. 123 Fake St."
            className={styles.stateAndPostcodeInput}
          />
        </div>
      </section>
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
