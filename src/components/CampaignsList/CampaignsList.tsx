/** @format */
//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CampaignCard from "../CampaignCard/CampaignCard";
type Props = {
  campaigns: CampaignIpfs[];
  title: string;
};

const CampaignsList = ({ campaigns, title }: Props) => {
  return (
      <div>
        <CommonTitle text={title} className="text-xl text-center my-8 " />
        <div className="flex flex-col gap-5">
          {campaigns.map((campaign) => {
            return (
              <CampaignCard
                key={campaign.campaignHash}
                campaignIpfs={campaign}
              />
            );
          })}
        </div>
      </div>
  );
};

export default CampaignsList;
