import Button from "../Button/Button";

export const PaymentHome = ({ setCurrentScreen }: any) => {
  return (
    <Button
      onClick={() => setCurrentScreen("other")}
      text="Update payment method"
    />
  );
};
