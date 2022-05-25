//Third Party
import { nanoid } from "@reduxjs/toolkit";

//App
import ProjectsList from '../../components/ProjectsList/ProjectsList'
import CustomDivider from "../../components/CustomDivider/CustomDivider";

type Props = {}

const HottestProjects = (props: Props) => {
  return (
    <div>
        <ProjectsList projects={dummyProjects}/>
        <CustomDivider className="my-12"  />

    </div>
  )
}

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
export default HottestProjects;