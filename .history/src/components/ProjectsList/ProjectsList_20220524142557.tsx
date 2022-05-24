/** @format */

import React from "react";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";
import SingleProject from "../SingleProject/SingleProject";
import { nanoid } from "@reduxjs/toolkit";

const dummyProjects = [
  {
    title: "Project title",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atvoluptatibus ipsam veniam excepturi quos id neque aspernatur nobis,aliquam velit molestiae ducimus reiciendis sit quod? qui quae impedit assumenda iste debitis, sint hic nihil ducimuslaudantium tempore aspernatur, rem facilis autem repudiandae saepeexpedita placeat! Explicabo officia a ipsum alias laborum sapienteillo. Explicabo minus possimus quaerat beatae ullam. Obcaecatirepudiandae non eum voluptate. Nemo reprehenderit cupiditateperspiciatis eveniet fugiat temporibus provident, laudantiumvoluptates doloribus deserunt enim facere vitae? Voluptatem similiquefacilis modi saepe. Unde vel inventore impedit aliquid sed. Repellatasperiores deleniti hic adipisci exercitationem autem?",
    id: nanoid(),
  },
  {
    title: "Project title",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atvoluptatibus ipsam veniam excepturi quos id neque aspernatur nobis,aliquam velit molestiae ducimus reiciendis sit quod? qui quae impedit assumenda iste debitis, sint hic nihil ducimuslaudantium tempore aspernatur, rem facilis autem repudiandae saepeexpedita placeat! Explicabo officia a ipsum alias laborum sapienteillo. Explicabo minus possimus quaerat beatae ullam. Obcaecatirepudiandae non eum voluptate. Nemo reprehenderit cupiditateperspiciatis eveniet fugiat temporibus provident, laudantiumvoluptates doloribus deserunt enim facere vitae? Voluptatem similiquefacilis modi saepe. Unde vel inventore impedit aliquid sed. Repellatasperiores deleniti hic adipisci exercitationem autem?",
    id: nanoid(),
  },
  {
    title: "Project title",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atvoluptatibus ipsam veniam excepturi quos id neque aspernatur nobis,aliquam velit molestiae ducimus reiciendis sit quod? qui quae impedit assumenda iste debitis, sint hic nihil ducimuslaudantium tempore aspernatur, rem facilis autem repudiandae saepeexpedita placeat! Explicabo officia a ipsum alias laborum sapienteillo. Explicabo minus possimus quaerat beatae ullam. Obcaecatirepudiandae non eum voluptate. Nemo reprehenderit cupiditateperspiciatis eveniet fugiat temporibus provident, laudantiumvoluptates doloribus deserunt enim facere vitae? Voluptatem similiquefacilis modi saepe. Unde vel inventore impedit aliquid sed. Repellatasperiores deleniti hic adipisci exercitationem autem?",
    id: nanoid(),
  },
];

type Props = {};

const ProjectsList = (props: Props) => {
  return (
    <div>
      
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
