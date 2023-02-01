import React, { useMemo, useState } from "react";
import { css } from "styled-components";
import styles from "./PaymentForm.module.css";
import { useForm } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";
import stripe_img from "../../assets/img/stripe.svg";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import placeholders from "../constants/paymentFormPlaceholders";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import Button from "../Button/Button";
import colors from "../constants/theme";

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
      addressLineOne: formData?.address_one || "",
      addressLineTwo: formData?.address_two || "",
      country: countryValue,
      state: formData?.state || "",
      postcode: formData?.post_code || "",
    },
  });

  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (value: any) => {
    console.log("🚀 ~ file: PaymentForm.tsx:54 ~ handleChange ~ value", value);
    setCountryValue(value);
    setValue("country", value);
  };

  const handleSubmission = (data: any) => {
    console.log(
      "🚀 ~ file: PaymentForm.tsx:60 ~ handleSubmission ~ data",
      data
    );
    // fetch("https://portaireapi.herokuapp.com/test/payment", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
  } = usePaymentInputs();

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
      {/* <section style={{ width: "350px", height: "40px", display: "flex" }}>
        <PaymentInputsWrapper
          {...wrapperProps}
          styles={
            {
              fieldWrapper: {
                base: css`
                  border-color: black;
                `,
              },
              inputWrapper: {
                base: css`
                  border-color: black;
                  font-size: 14px;
                `,
                errored: css`
                  border-color: #e52727;
                `,
                focused: css`
                  border-color: black;
                `,
              },
              input: {
                base: css`
                  color: black;
                `,
                cardNumber: css`
                  width: 198px;
                `,
                expiryDate: css`
                  width: 80px;
                `,
                cvc: css`
                  width: 30px;
                `,
              },
              errorText: {
                base: css`
                  color: white;
                  margin-top: -1px;
                  padding-left: 5px;
                  background-color: #e52727;
                  border-radius: 3px;
                `,
              },
            } as any
          }>
          <svg {...getCardImageProps({ images } as any)} />
          <label className={styles.cardInput}></label>
          <input
            {...register("cardNumber", {
              required: "Card number is required",
            })}
            // placeholder={placeholders.cardNumber}
            {...getCardNumberProps()}
          />
          <input
            {...register("expiryDate", {
              required: "Expiry date is required",
            })}
            // placeholder={placeholders.expiryDate}
            {...getExpiryDateProps()}
          />
          <input
            {...register("ccv", {
              required: "CCV is required",
            })}
            // placeholder={placeholders.ccv}
            {...getCVCProps()}
          />
        </PaymentInputsWrapper>
      </section> */}

      <section>
        <label className={styles.addressLabel}>Address Line 1</label>
        <input
          {...register("addressLineOne", {
            required: "Address Line 1 is required",
          })}
          placeholder={placeholders.address}
          required
          className={styles.addressInput}
        />
        {/* {errors.addressLineOne && <p>Address is required</p>} */}
      </section>
      <section>
        <label className={styles.addressLabel}>Address Line 2</label>
        <input
          {...register("addressLineTwo", {
            required: "Address Line 2 is required",
          })}
          placeholder={placeholders.address}
          className={styles.addressInput}
        />
      </section>
      <section className={styles.customSelect}>
        <label className={styles.countryLabel}>Country</label>
        <Select
          {...register("country")}
          isClearable
          required
          options={options as any}
          value={countryValue}
          onChange={(value) => handleChange(value)}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: "3px",
              height: "50px",
              borderColor: colors.borderFocus,
            }),
            option: (base) => ({
              ...base,
              color: colors.black,
            }),
          }}
        />
        {errors.country && <div>Field is rquired</div>}
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
            placeholder={placeholders.state}
            className={styles.stateAndPostcodeInput}
          />
        </div>
        <div className={styles.stateAndPostcodeContainer}>
          <label className={styles.stateAndPostcodeLabel}>Post code</label>
          <input
            {...register("postcode", {
              required: "Postcode is required",
            })}
            placeholder={placeholders.postCode}
            className={styles.stateAndPostcodeInput}
          />
        </div>
      </section>
      <section>
        <div className={styles.callToActionContainer}>
          <Button onClick={onBack} text="Cancel" />
          {/* <Button
            text="Update"
            type="submit"
            backgroundColor={colors.black}
            textColor={colors.white}
          /> */}
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
