/** @format */

import Divider from "@mui/material/Divider";

interface CustomDividerPropTypes{
  orientation?:"horizontal" | "vertical" | undefined;
  className:string;
}

function CustomDivider({orientation}:CustomDividerPropTypes) {


  return (
    <div>
      <Divider orientation={orientation?orientation:"horizontal"} />
    </div>
  );
}

export default CustomDivider;
