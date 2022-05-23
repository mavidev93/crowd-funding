/** @format */

import Divider from "@mui/material/Divider";

interface CustomDividerPropTypes{
  orientation:string;
}

function CustomDivider({}) {


  return (
    <div>
      <Divider orientation={orientation?orientation:"horizontal"} />
    </div>
  );
}

export default CustomDivider;
