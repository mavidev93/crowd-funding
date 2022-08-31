/** @format */

import React from "react";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CampaignCard from "../CampaignCard/CampaignCard";

type Props = {
  campaigns: CampaignIpfs[];
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
            campaignIpfs = {campaign}
              key={campaign.campaignHash}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CampaignsList;
