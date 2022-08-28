//React
import {useState} from 'react'

//Third Party
import { useMoralis, useWeb3Contract } from "react-moralis";
import useGetCampaigns from "../../hooks/useGetCampaigns";
import useContract from "../../hooks/useContract"
import CommonButton from "../../components/CommonButton/CommonButton";

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