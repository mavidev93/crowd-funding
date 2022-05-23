/** @format */

import Divider from "@mui/material/Divider";

interface CustomDividerPropTypes{
  orientation?:"horizontal" | "vertical" | undefined;
  className:string;
}

function CustomDivider({orientation,className}:CustomDividerPropTypes) {


  return (
    <div>
      <Divider className="" orientation={orientation?orientation:"horizontal"} />
    </div>
  );
}

export default CustomDivider;
