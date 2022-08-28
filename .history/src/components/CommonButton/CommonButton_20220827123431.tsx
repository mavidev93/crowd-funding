/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/system";
interface CommonButtonPropTypes {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  size?: "small" | "medium" | "large" | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  className?: string;
  sx?: SxProps;
  disabled?: boolean;
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
  endIcon?:React.Comp
}

const CommonButton = ({
  text,
  variant,
  sx,
  size,
  className,
  type,
  disabled,
  onClick,
  endIcon
}: CommonButtonPropTypes) => {
  return (
    <Button
      className={disabled ? " text-white" : className}
      variant={variant }
      sx={sx}
      size={size}
      type={type}
      disabled={disabled}
      onClick={onClick}
      endIcon={endIcon}
    >
      {text}
    </Button>
  );
};

export default CommonButton;
