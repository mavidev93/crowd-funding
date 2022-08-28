import CampaignCardData from "../../components/CampaignCardData/CampaignCardData"

type Props = {
    campaign:Campaign
}

const FundedCampaigns = ({campaign}: Props) => {
    
  return (
    <div>

        <CampaignCardData campaign={campaign}/>
    </div>
  )
}

export default FundedCampaigns