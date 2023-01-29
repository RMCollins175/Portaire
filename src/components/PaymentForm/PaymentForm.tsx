import React, { useMemo, useState } from "react";
import styles from "./PaymentForm.module.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";

export const PaymentForm = ({ onBack }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      ccv: "",
      addressLineOne: "",
      addressLineTwo: "",
      country: "",
      state: "",
      postcode: "",
    },
  });

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value: any) => {
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
      <h2>Update payment method</h2>
      <section>
        <label
          style={{
            border: "1px solid grey",
            paddingBottom: "5px",
            outline: "red",
          }}
          className={styles.cardInput}>
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
        </label>
      </section>
      <section>
        <label className={styles.addressLabel}>
          Address Line 1
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
      </section>
      <section>
        <label className={styles.addressLabel}>
          Address Line 2
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
      </section>
      <section>
        <label>Country</label>
        <Controller
          name="country"
          control={control}
          render={({ value }: any) => (
            <Select
              className={styles.countryInput}
              options={options}
              value={value}
              onChange={changeHandler}
              // defaultValue={country.find((c) => c.value === countryValue)}
            />
          )}
          rules={{ required: true }}
        />
      </section>
      <section>
        <div className={styles.stateAndPostcodeContainer}>
          <label className={styles.stateAndPostcodeLabe}>
            State <span>(optional)</span>
            <input
              // id={`title-${idea?.id}`}
              {...register("state", {
                required: "State is required",
              })}
              placeholder="e.g. 123 Fake St."
              className={styles.stateAndPostcodeInput}
              // defaultValue={idea?.title}
              // aria-label={idea?.title}
            />
          </label>
          <label>
            Post code
            <input
              // id={`title-${idea?.id}`}
              {...register("postcode", {
                required: "Postcode is required",
              })}
              placeholder="e.g. 123 Fake St."
              className={styles.stateAndPostcodeInput}
              // defaultValue={idea?.title}
              // aria-label={idea?.title}
            />
          </label>
        </div>
      </section>
      <div>
        <button onClick={onBack}>Cancel</button>
      </div>
    </form>
  );
};
