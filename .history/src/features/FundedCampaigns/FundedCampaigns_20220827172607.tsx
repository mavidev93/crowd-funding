import CampaignCardData from "../../components/CampaignCardData/CampaignCardData"

type Props = {
    campaign:Campaign
}

const FundedCampaigns = (props: Props) => {
  return (
    <div>

        <CampaignCardData campaign={}/>
    </div>
  )
}

export default FundedCampaigns