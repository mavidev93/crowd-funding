/** @format */

import { useEffect, useState } from "react";

//Third Party
import { useWeb3Contract } from "react-moralis";
//App
import { getReadableCampaign } from "../helpers/helpers";

export default function useGetCampaigns(
  contract: Contract,
  abi: object,
  ids: n[]|null
) {
  //States
  const [campaigns, setCampaigns] = useState<Campaign[] | null>(null);
  const contractAddress = contract.address;

  const { runContractFunction: getCampaignByHash } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress!,
    functionName: "getCampaignByHash",
  });
  const { runContractFunction: getHashById } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress!,
    functionName: "getHashById",
  });
  const getCampaigns = async (ids: string[]) => {
    try {
      const campaigns = await Promise.all(
        ids!.map(async (id): Promise<Campaign> => {
          const hash: any = await getHashById({
            params: { params: { _id: id } },
          });
          const txCampaign = await getCampaignByHash({
            params: { params: { _hash: hash } },
          });
          const campaign = await getReadableCampaign(txCampaign);
          return campaign;
        })
      );
      console.log(campaigns);
      return campaigns;
    } catch (e) {
      console.log(e);
    }
  };
  //Effects
  useEffect(() => {
    if (!ids || contract) return;
    const setCamps = async () => {

      const campaigns = await getCampaigns(ids);
      campaigns && setCampaigns(campaigns);
    };

    setCamps();
  }, [ids]);

  return campaigns;
}
