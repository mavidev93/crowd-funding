/** @format */

import Divider from "@mui/material/Divider";

interface CustomDividerPropTypes{
  orientation:string;
}

function CustomDivider(props:CustomDividerPropTypes) {
  const {orientation} = props

  return (
    <div>
      <Divider orientation={orientation?orientation:} />
    </div>
  );
}

export default CustomDivider;
