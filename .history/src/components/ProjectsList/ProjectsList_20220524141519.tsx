/** @format */

import React from "react";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";
import SingleProject from "../SingleProject/SingleProject";


const dummyProjects=[{title:}]

type Props = {};


const ProjectsList = (props: Props) => {
  return (
    <div>
      <CommonTitle
        text="Hottest Project"
        className="text-xl text-center my-8  text-tx-black"
      />
      <div className="flex flex-col gap-3">
        <SingleProject
          text="sjflkdfdkl lkdjklfdkl lkfdlfdlkfkl"
          title="title"
        />{" "}
      </div>
    </div>
  );
};

export default ProjectsList;
