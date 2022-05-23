/** @format */

import Divider from "@mui/material/Divider";

interface CustomDividerPropTypes {
  orientation?: "horizontal" | "vertical" | undefined;
  className?: string;
}

function CustomDivider({ orientation, className }: CustomDividerPropTypes) {
  return (
    <Divider
      className=""
      orientation={orientation ? orientation : "horizontal"}
    />
  );
}

export default CustomDivider;
