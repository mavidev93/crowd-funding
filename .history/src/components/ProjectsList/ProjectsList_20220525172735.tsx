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
  id:string;
}

type Props = {
projects:SingleProjectType[];

};

const ProjectsList = ({projects}:Props ) => {
  return (
    <div>
      <CustomDivider className="my-12" />
      <CommonTitle
        text="Hottest Project"
        className="text-xl text-center my-8 "
      />
      <div className="flex flex-col gap-5">
        {projects.map((project) => {
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
