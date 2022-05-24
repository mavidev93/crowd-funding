/** @format */

import React from "react";

import CommonTitle from "../CommonTitle/CommonTitle";
type Props = {
  title: string;
  text: string;
  isBookmarked?: boolean;
  isLiked?: boolean;
  isDisliked?: boolean;
};

const SingleProject = ({
  title,
  text,
  isBookmarked,
  isLiked,
  isDisliked,
}: Props) => {
  return (
    <div className="border border-solid border-bdr-gray p-4">
      <div >
      <CommonTitle text="title" />
      <p className="line-clamp-4 w-3/4	">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam at
        voluptatibus ipsam veniam excepturi quos id neque aspernatur nobis,
        aliquam velit molestiae ducimus reiciendis sit quod? Voluptate nisi qui
        quae impedit assumenda iste debitis, sint hic nihil ducimus laudantium
        tempore aspernatur, rem facilis autem repudiandae saepe expedita
        placeat! Explicabo officia a ipsum alias laborum sapiente illo.
        Explicabo minus possimus quaerat beatae ullam. Obcaecati repudiandae non
        eum voluptate. Nemo reprehenderit cupiditate perspiciatis eveniet fugiat
        temporibus provident, laudantium voluptates doloribus deserunt enim
        facere vitae? Voluptatem similique facilis modi saepe. Unde vel
        inventore impedit aliquid sed. Repellat asperiores deleniti hic adipisci
        exercitationem autem?
      </p>
    </div>
    </div>
  );
};

export default SingleProject;
