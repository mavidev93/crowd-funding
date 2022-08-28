/** @format */

import React from "react";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CampaignCard from "../CampaignCard/CampaignCard";

// export interface SingleProjectType {
// title: string;
// text: string;
// isBookmarked?: boolean;
// isLiked?: boolean;
// isDisliked?: boolean;
// id: string;
// }

type Props = {
  campaigns: Campaign[];
  ShowData: boolean;
  title: string;
};

const CampaignsList = ({ campaigns, title, ShowData }: Props) => {
  return (
    <div>
      <CommonTitle text={title} className="text-xl text-center my-8 " />
      <div className="flex flex-col gap-5">
        {campaigns.map((campaign) => {
          return (
            <CampaignCard
              {...campaign}
              showData={ShowData}
              key={campaign.campaignHash}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CampaignsList;
