/** @format */

//Third Party
import { nanoid } from "@reduxjs/toolkit";

//App

import CampaignsList from "../../components/CampaignsList/CampaignsList";

type Props = {};

const FreshFavorites = (props: Props) => {
  return (
    <div>
      <CampaignsList title="Fresh Favorites" campaigns={dummyCampaigns} />
      
    </div>
  );
};

// avatarImgPath?: string;
// campaignDescription: string;
// campaignHash: string;
// campaignOwner: string;
// campaignTitle: string;
// isBookmarked?: boolean;
// goalAmount: string;
// headerImgPath?: string;

const dummyCampaigns:CampaignIpfs[] = [
  {
    campaignTitle: "Project title",
    campaignDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atvoluptatibus ipsam veniam excepturi quos id neque aspernatur nobis,aliquam velit molestiae ducimus reiciendis sit quod? qui quae impedit assumenda iste debitis, sint hic nihil ducimuslaudantium tempore aspernatur, rem facilis autem repudiandae saepeexpedita placeat! Explicabo officia a ipsum alias laborum sapienteillo. Explicabo minus possimus quaerat beatae ullam. Obcaecatirepudiandae non eum voluptate. Nemo reprehenderit cupiditateperspiciatis eveniet fugiat temporibus provident, laudantiumvoluptates doloribus deserunt enim facere vitae? Voluptatem similiquefacilis modi saepe. Unde vel inventore impedit aliquid sed. Repellatasperiores deleniti hic adipisci exercitationem autem?",
    campaignOwner:"0xfkosfi-0o3row0fkrefkopkfofkopsdkfopdk",
    goalAmount:"223",
    campaignHash:"fsdcvxcvcjfdsfjdfj/fdsfdf",

  },
  {
    campaignTitle: "Project title",
    campaignDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atvoluptatibus ipsam veniam excepturi quos id neque aspernatur nobis,aliquam velit molestiae ducimus reiciendis sit quod? qui quae impedit assumenda iste debitis, sint hic nihil ducimuslaudantium tempore aspernatur, rem facilis autem repudiandae saepeexpedita placeat! Explicabo officia a ipsum alias laborum sapienteillo. Explicabo minus possimus quaerat beatae ullam. Obcaecatirepudiandae non eum voluptate. Nemo reprehenderit cupiditateperspiciatis eveniet fugiat temporibus provident, laudantiumvoluptates doloribus deserunt enim facere vitae? Voluptatem similiquefacilis modi saepe. Unde vel inventore impedit aliquid sed. Repellatasperiores deleniti hic adipisci exercitationem autem?",
    campaignOwner:"0xfkosfi-0o3row0fkrefkopkfofkopsdkfopdk",
    goalAmount:"223",
    campaignHash:"fsdjfdsfjdvcvcfj/fdsfdf",

  },
  {
    campaignTitle: "Project title",
    campaignDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atvoluptatibus ipsam veniam excepturi quos id neque aspernatur nobis,aliquam velit molestiae ducimus reiciendis sit quod? qui quae impedit assumenda iste debitis, sint hic nihil ducimuslaudantium tempore aspernatur, rem facilis autem repudiandae saepeexpedita placeat! Explicabo officia a ipsum alias laborum sapienteillo. Explicabo minus possimus quaerat beatae ullam. Obcaecatirepudiandae non eum voluptate. Nemo reprehenderit cupiditateperspiciatis eveniet fugiat temporibus provident, laudantiumvoluptates doloribus deserunt enim facere vitae? Voluptatem similiquefacilis modi saepe. Unde vel inventore impedit aliquid sed. Repellatasperiores deleniti hic adipisci exercitationem autem?",
    campaignOwner:"0xfkosfi-0o3row0fkrefkopkfofkopsdkfopdk",
    goalAmount:"223",
    campaignHash:"fsdjfdsfjdfj/ffdsdcvdsfdf",

  }
]
export default FreshFavorites;
