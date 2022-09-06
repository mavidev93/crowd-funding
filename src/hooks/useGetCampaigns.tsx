/** @format */

import { useEffect, useState } from "react";

//Third Party
import { useWeb3Contract } from "react-moralis";
//App
import { getReadableCampaign } from "../helpers/helpers";
import { abi } from "../constants";
import useContract from "./useContract";
export default function useGetCampaigns(ids: number[] | null) {
  //States
  const [campaigns, setCampaigns] = useState<Campaign[] | null>(null);
  const contractData = useContract();
  const { runContractFunction: getCampaignByHash } = useWeb3Contract({
    abi: abi,
    contractAddress: contractData?.crowdFundAddress,
    functionName: "getCampaignByHash",
  });
  const { runContractFunction: getHashById } = useWeb3Contract({
    abi: abi,
    contractAddress: contractData?.crowdFundAddress,
    functionName: "getHashById",
  });
  const getCampaigns = async (ids: number[]) => {
    try {
      const campaigns = await Promise.all(
        ids!.map(async (id): Promise<Campaign> => {
          const hash: any = await getHashById({
            params: { params: { _id: id } },
          });
          const txCampaign = await getCampaignByHash({
            params: { params: { hash: hash } },
          });
          const campaign = await getReadableCampaign(txCampaign);
          return campaign;
        })
      );

      return campaigns;
    } catch (e) {}
  };
  //Effects
  useEffect(() => {
    if (!ids || !contractData) {
      setCampaigns(null);
      return;
    }
    const setCamps = async () => {
      if (ids.length === 0) {
        setCampaigns([]);
        return;
      }
      const campaigns = await getCampaigns(ids);

      campaigns && setCampaigns(campaigns);
    };

    setCamps();
  }, [ids]);

  return campaigns;
}
