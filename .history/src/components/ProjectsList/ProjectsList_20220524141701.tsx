/** @format */

import React from "react";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";
import SingleProject from "../SingleProject/SingleProject";


const dummyProjects=[{title:"Project title",text:
'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atvoluptatibus ipsam veniam excepturi quos id neque aspernatur nobis,aliquam velit molestiae ducimus reiciendis sit quod? qui quae impedit assumenda iste debitis, sint hic nihil ducimuslaudantium tempore aspernatur, rem facilis autem repudiandae saepeexpedita placeat! Explicabo officia a ipsum alias laborum sapienteillo. Explicabo minus possimus quaerat beatae ullam. Obcaecati
repudiandae non eum voluptate. Nemo reprehenderit cupiditate
perspiciatis eveniet fugiat temporibus provident, laudantium
voluptates doloribus deserunt enim facere vitae? Voluptatem similique
facilis modi saepe. Unde vel inventore impedit aliquid sed. Repellat
asperiores deleniti hic adipisci exercitationem autem?'}]

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
