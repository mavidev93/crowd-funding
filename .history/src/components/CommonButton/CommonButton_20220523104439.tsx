/** @format */

import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from '@mui/system';
interface CommonButtonPropTypes {
  text: string;
  variant: "text" | "outlined" | "contained" | undefined;
  sx?: {Sxprops};
}

const CommonButton = ({ text, variant, sx }: CommonButtonPropTypes) => {
  return (
    <Button variant={variant} sx={sx}>
      {text}
    </Button>
  );
};

export default CommonButton;
