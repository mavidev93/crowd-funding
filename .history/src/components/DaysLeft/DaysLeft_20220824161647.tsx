/** @format */

import React from "react";

//Third Party
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type Props = {
  daysLeft: number;
};

const DaysLeft = ({ daysLeft }: Props) => {
  return (
    <div>
      <p className="text-secondary-color ">
        {" "}
        <AccessTimeIcon />{" "}
        {daysLeft >= 0 ? (
          <span>{`${daysLeft} Days Left`}</span>
        ) : (
          <span>Funding Time Finished</span>
        )}
      </p>
    </div>
  );
};

export default DaysLeft;
