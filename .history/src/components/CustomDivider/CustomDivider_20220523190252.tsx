/** @format */

import Divider from "@mui/material/Divider";

interface CustomDividerPropTypes {
  orientation?: "horizontal" | "vertical" | undefined;
  className?: string;
}

function CustomDivider({ orientation, className }: CustomDividerPropTypes) {
  return (
    <Divider
      // className={className}
      // orientation={orientation ? orientation : "horizontal"}
      // color="red"
      flexItem
    />
  );
}

export default CustomDivider;
