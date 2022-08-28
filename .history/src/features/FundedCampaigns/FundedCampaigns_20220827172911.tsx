//Third Party
import { useMoralis, useWeb3Contract } from "react-moralis";


//App
import CampaignCardData from "../../components/CampaignCardData/CampaignCardData"

type Props = {
    campaign:Campaign
}

const FundedCampaigns = ({campaign}: Props) => {
    const {
        account,
      } = useMoralis();

      //States
      const [ids, setIds] = useState<null | number[]>(null);
      const {contract,abi,crowdFundAddress} = useContract()
       const campaigns = useGetCampaigns(contract, abi, ids);

  return (
    <div>

        <CampaignCardData campaign={campaign}/>
    </div>
  )
}

export default FundedCampaigns