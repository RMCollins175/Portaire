import Button from "../Button/Button";
import { PoundIcon } from "../Icons/PoundIcon";

export const PaymentHome = ({ setCurrentScreen }: any) => {
  return (
    <Button
      onClick={() => setCurrentScreen("other")}
      text="Update payment method"
      icon={<PoundIcon style={{ marginTop: 1 }} />}
    />
  );
};
