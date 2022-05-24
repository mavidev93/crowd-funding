/** @format */

import React from "react";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";
type Props = {};

const ProjectsList = (props: Props) => {
  return (
    <div>
      <CommonTitle text="Hottest Project" className="font-semibold text-p" />
      <div className="flex gap-3">
        <div>single project</div>
      </div>
      <CommonButton text="see more..." size="small" variant="outlined" />
    </div>
  );
};

export default ProjectsList;
