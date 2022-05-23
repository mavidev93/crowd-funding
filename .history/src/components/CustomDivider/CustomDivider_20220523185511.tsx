/** @format */

import Divider from "@mui/material/Divider";

interface CustomDividerPropTypes{
  orientation?:"horizontal" | "vertical" | undefined;
  className?:string;
}

function CustomDivider({orientation,className}:CustomDividerPropTypes) {


  return (
    <div>
      <Divider class orientation={orientation?orientation:"horizontal"} />
    </div>
  );
}

export default CustomDivider;
