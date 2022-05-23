/** @format */

import Divider from "@mui/material/Divider";

interface CustomDividerPropTypes{
  
}

function CustomDivider(props) {
  const {orientation} = props

  return (
    <div>
      <Divider orientation={orientation} />
    </div>
  );
}

export default CustomDivider;
