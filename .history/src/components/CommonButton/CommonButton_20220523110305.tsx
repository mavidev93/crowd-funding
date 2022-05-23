/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from '@mui/system';
interface CommonButtonPropTypes {
  text: string;
  size?:"small" | "medium" | "large" | undefined;
  variant: "text" | "outlined" | "contained" | undefined;
  sx?: SxProps;
}

const CommonButton = ({ text, variant, sx,size }: CommonButtonPropTypes) => {
  return (
    <Button variant={variant} sx={sx} size>
      {text}
    </Button>
  );
};

export default CommonButton;
