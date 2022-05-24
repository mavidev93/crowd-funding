/** @format */

import Divider from "@mui/material/Divider";

interface CustomDividerPropTypes {
  orientation?: "horizontal" | "vertical" | undefined;
  className?: string;
}

getComputedStyle(document.documentElement).getPropertyValue(
  "--secondary-color"
);
function CustomDivider({ orientation, className }: CustomDividerPropTypes) {
  return (
    <Divider
      // className={className}
      orientation={orientation ? orientation : "horizontal"}
      // color="red"
    />
  );
}

export default CustomDivider;
