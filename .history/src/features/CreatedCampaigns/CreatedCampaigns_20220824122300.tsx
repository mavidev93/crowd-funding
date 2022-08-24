/** @format */

import React, { useEffect, useState } from "react";

//Third party
import { useMoralis, useWeb3Contract } from "react-moralis";
import { Contract } from "ethers";
//App
import { contractAddresses, abi } from "../../constants";
import { getReadableCampaign } from "../../helpers/helpers";
import { Campaign } from "../../types/types";
import useGetCampaigns from "../../hooks/useGetCampaigns";
import CampaignsList from "../../components/CampaignsList/CampaignsList";
import CampaignCardData from "../../components/CampaignCardData/CampaignCardData"
import {getCampaignIdes} from '../../helpers/web3Helpers'
//interface
interface contractAddressesInterface {
  [key: string]: string[];
}
type Props = {};

const CreatedCampaigns = (props: Props) => {
  const {
    isWeb3Enabled,
    chainId: chainIdHex,
    user,
    Moralis,
    account,
  } = useMoralis()
  const ethers = Moralis.web3Library;

  //States
  const [ids, setIds] = useState<null | string[]>(null);
       const provider = new ethers.providers.Web3Provider(window.ethereum);

  const addresses: contractAddressesInterface = contractAddresses;
  const chainId: string = parseInt(chainIdHex!).toString();
  const crowdFundAddress =
    chainId in contractAddresses ? addresses[chainId][0] : null;
  //@ts-ignore
    const contract = new ethers.Contract(crowdFundAddress!, abi, provider);
  const campaigns = useGetCampaigns(contract,abi,ids)



  //Contract functions
  const { runContractFunction: getCampaignByHash } = useWeb3Contract({
    abi: abi,
    contractAddress: crowdFundAddress!,
    functionName: "getCampaignByHash",
  });
  const { runContractFunction: getHashById } = useWeb3Contract({
    abi: abi,
    contractAddress: crowdFundAddress!,
    functionName: "getHashById",
  });

  // const getCampaignIdes = async (
  //   contract: Contract,
  //   owner: string | null,
  //   funder: string | null
  // ) => {
  //   if (crowdFundAddress) {
  //     const fundFilters = contract.filters.Fund(funder, owner);
  //     try {
  //       const fundEvents = await contract.queryFilter(fundFilters, 0);
  //       console.log(fundEvents);
  //       const ids = fundEvents.map((event) => parseInt(event.topics[3]));
  //       return ids;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  // const getCampaigns = async (account: string) => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   //@ts-ignore
  //   var contract = new ethers.Contract(crowdFundAddress!, abi, provider);
  //   try {
  //     const allIds = await getCampaignIdes(contract, account, null);

  //     if (allIds) {

  //       const ids = true ? [...new Set(allIds)] : allIds;

  //       const campaigns = await Promise.all(
  //         ids!.map(async (id): Promise<Campaign> => {
  //           const hash: any = await getHashById({
  //             params: { params: { _id: id } },
  //           });
  //           const txCampaign = await getCampaignByHash({
  //             params: { params: { _hash: hash } },
  //           });
  //           const campaign = await getReadableCampaign(txCampaign);
  //           return campaign;
  //         })
  //       );
  //       console.log(campaigns);
  //       return campaigns;
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

//Effects
useEffect(
 const getId = async ()=>{
  getCampaignIdes
 }
  ,[])
  return (
    <div>
      {campaigns && (
        campaigns.map(cam=><div>
          {cam.campaignTitle}

        </div>)
      )}
    </div>
  );
};

export default CreatedCampaigns;
