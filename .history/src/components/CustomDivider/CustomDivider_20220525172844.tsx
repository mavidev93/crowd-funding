/** @format */

import Divider from "@mui/material/Divider";

interface CustomDividerPropTypes {
  orientation?: "horizontal" | "vertical" | undefined;
  className?: string;
}
// const borderColor = getComputedStyle(document.documentElement).getPropertyValue(
//   "--secondary-color"
// );
// console.log(borderColor);

function CustomDivider({ orientation, className }: CustomDividerPropTypes) {
  return (
    <Divider
      className={`border-bdr-gray my-12" ${className}`}
      orientation={orientation ? orientation : "horizontal"}
      // color={borderColor}
    />
  );
}

export default CustomDivider;
