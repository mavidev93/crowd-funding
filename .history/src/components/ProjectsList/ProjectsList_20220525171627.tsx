/** @format */

import React from "react";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";
import SingleProject from "../SingleProject/SingleProject";
import CustomDivider from "../CustomDivider/CustomDivider";

export interface SingleProjectType{
  title: string;
  text: string;
  isBookmarked?: boolean;
  isLiked?: boolean;
  isDisliked?: boolean;
}

type Props = {};

const ProjectsList = () => {
  return (
    <div>
      <CustomDivider className="my-12" />
      <CommonTitle
        text="Hottest Project"
        className="text-xl text-center my-8 font-light -text--heading-black-color  leading-relaxed"
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
      <CustomDivider className="my-12" />
    </div>
  );
};



export default ProjectsList;
