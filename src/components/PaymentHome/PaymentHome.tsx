import Button from "../Button/Button";
import { PoundIcon } from "../Icons/PoundIcon";

export const PaymentHome = ({ dispatch }: any) => {
  return (
    <Button
      onClick={() => dispatch({ type: "SET_CURRENT_SCREEN", payload: "other" })}
      text="Update payment method"
      icon={<PoundIcon style={{ marginTop: 1 }} />}
    />
  );
};
