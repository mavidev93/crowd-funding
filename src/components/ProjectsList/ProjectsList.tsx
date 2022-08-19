/** @format */

import React from "react";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";
import SingleProject from "../CampaignCard/CampaignCard";
import CustomDivider from "../CustomDivider/CustomDivider";

export interface SingleProjectType {
  title: string;
  text: string;
  isBookmarked?: boolean;
  isLiked?: boolean;
  isDisliked?: boolean;
  id: string;
}

type Props = {
  projects: SingleProjectType[];
  title:string
};

const ProjectsList = ({ projects,title }: Props) => {
  return (
    <div>
      <CommonTitle
        text={title}
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
