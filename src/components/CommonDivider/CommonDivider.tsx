/** @format */

import Divider from "@mui/material/Divider";

interface CustomDividerPropTypes {
  orientation?: "horizontal" | "vertical" | undefined;
  className?: string;
}
// const borderColor = getComputedStyle(document.documentElement).getPropertyValue(
//   "--secondary-color"
// );
//

function CommonDivider({ orientation, className }: CustomDividerPropTypes) {
  return (
    <Divider
      className={`border-bdr-gray  ${className}`}
      orientation={orientation ? orientation : "horizontal"}
      // color={borderColor}
    />
  );
}

export default CommonDivider;
