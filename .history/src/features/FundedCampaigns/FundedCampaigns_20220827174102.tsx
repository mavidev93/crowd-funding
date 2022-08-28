//React
import {useState,useEffect} from 'react'

//Third Party
import { useMoralis, useWeb3Contract } from "react-moralis";
import useGetCampaigns from "../../hooks/useGetCampaigns";
import useContract from "../../hooks/useContract"
import CommonButton from "../../components/CommonButton/CommonButton";

//App
import CampaignCardData from "../../components/CampaignCardData/CampaignCardData"
import {getCampaignIdOfFunder} from "../../helpers/web3Helpers"

const FundedCampaigns = () => {
    const {
        account,
      } = useMoralis();

      //States
      const [ids, setIds] = useState<null | number[]>(null);
      const {contract,abi,crowdFundAddress} = useContract()
       const campaigns = useGetCampaigns(contract, abi, ids);

//Effects
useEffect(()=>{
    if(!account){
        setIds(null)
        return
    }
    const getIds =async()=>{
        const ids =await getCampaignIdOfFunder(contract,account)
        ids && setIds(ids)

    }

},[account])
  return (
    <div>
        {
            campaigns && 
        }
        <CampaignCardData campaign={campaign}/>
    </div>
  )
}

export default FundedCampaigns