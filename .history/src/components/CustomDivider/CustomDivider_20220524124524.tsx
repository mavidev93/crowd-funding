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
      className='bor'
      orientation={orientation ? orientation : "horizontal"}
      // color={borderColor}
    />
  );
}

export default CustomDivider;
