/** @format */

import React from "react";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";
import SingleProject from "../SingleProject/SingleProject";
import { nanoid } from "@reduxjs/toolkit";
import CustomDivider from "../CustomDivider/CustomDivider";



type Props = {};

const ProjectsList = (props: Props) => {
  return (
    <div>
      <CustomDivider className="my-12" />
      <CommonTitle
        text="Hottest Project"
        className="text-xl text-center my-8  text-tx-black"
      />
      <div className="flex flex-col gap-5">
        {dummyProjects.map((project) => {
          return (
            <SingleProject
              text={project.text}
              title={project.title}
              key={project.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
