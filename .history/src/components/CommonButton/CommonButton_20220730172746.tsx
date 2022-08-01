/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/system";
interface CommonButtonPropTypes {
  text: string;
  type?:"button" | "submit" | "reset" | undefined;
  size?: "small" | "medium" | "large" | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  className?:string;
  sx?: SxProps;
  disabled?:boolean;
}

const CommonButton = ({ text, variant, sx, size,className,type,disabled }: CommonButtonPropTypes) => {
  return (
    <Button className={disabled?'bg-slate-500 text-white':className} variant={variant} sx={sx} size={size} type={type} disabled={disabled}>
      {text}
    </Button>
  );
};

export default CommonButton;
