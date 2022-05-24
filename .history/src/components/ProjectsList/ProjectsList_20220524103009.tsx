/** @format */

import React from "react";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";
type Props = {};

const ProjectsList = (props: Props) => {
  return (
    <div>
      <CommonTitle
        text="Hottest Project"
        className="text-xl text-center  text-tx-black"
      />
      <div className="flex flex-col gap-3">
        <div>single project</div>
      </div>
      <CommonButton text="see more..." size="small" variant="outlined" />
    </div>
  );
};

export default ProjectsList;
