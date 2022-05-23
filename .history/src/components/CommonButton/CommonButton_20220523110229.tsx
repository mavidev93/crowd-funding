/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from '@mui/system';
interface CommonButtonPropTypes {
  text: string;
  size?
  variant: "text" | "outlined" | "contained" | undefined;
  sx?: SxProps;
}

const CommonButton = ({ text, variant, sx }: CommonButtonPropTypes) => {
  return (
    <Button variant={variant} sx={sx}>
      {text}
    </Button>
  );
};

export default CommonButton;
