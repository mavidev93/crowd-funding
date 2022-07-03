/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/system";
interface CommonButtonPropTypes {
  text: string;
  size?: "small" | "medium" | "large" | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  className?:string;
  sx?: SxProps;
}

const CommonButton = ({ text, variant, sx, size,className }: CommonButtonPropTypes) => {
  return (
    <Button className={className} variant={variant} sx={sx} size={size} type='submit'>
      {text}
    </Button>
  );
};

export default CommonButton;
