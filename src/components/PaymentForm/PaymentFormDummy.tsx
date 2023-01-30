import React, { useEffect, useMemo, useState } from "react";
import styles from "./PaymentForm.module.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";
import stripe_img from "../../assets/img/stripe.png";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export const PaymentForm = ({}) => {
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
      country: value,
    },
  });

  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (value: any) => {
    setValue(value);
  };

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
      <h3 style={{ margin: "0px" }}>Update payment method</h3>
      <section className={styles.customSelect}>
        <label className={styles.countryLabel}>Country</label>
        <Select
          {...register("country")}
          isClearable
          options={options as any}
          value={value}
          onChange={(selectedOption) => handleChange(selectedOption)}
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
        />
      </section>
    </form>
  );
};
