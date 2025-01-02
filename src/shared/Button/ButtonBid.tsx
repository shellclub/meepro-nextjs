import Button, { ButtonProps } from "@/shared/Button/Button";
import React from "react";

export interface ButtonBidProps extends ButtonProps {}

const ButtonBid: React.FC<ButtonBidProps> = ({
  className = "",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-90 bg-green-700 hover:bg-green-600 text-slate-50 dark:text-slate-800 shadow-xl ${className}`}
      {...args}
    />
  );
};

export default ButtonBid;
