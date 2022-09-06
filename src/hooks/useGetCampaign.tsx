/** @format */

import { useEffect, useState } from "react";
import { abi } from "../constants";
//Third Party
import { useWeb3Contract } from "react-moralis";
//App
import { getReadableCampaign } from "../helpers/helpers";

type Props = {
  contractAddress: string | undefined;
  campaignHash?: string;
  campaignId?: number;
};

export default function useGetCampaign(
  contractAddress: string | undefined,
  campaignHash?: string,
  campaignId?: number
) {
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  const { runContractFunction: getHashById } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getHashById",
  });

  const { runContractFunction: getCampaignByHash } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getCampaignByHash",
  });

  const hashById = async (id: number): Promise<any> => {
    const hash = await getHashById({
      params: { params: { _id: id } },
    });
    return hash;
  };

  const getByHash = async (hash: string) => {
    const txCampaign = await getCampaignByHash({
      params: { params: { hash: hash } },
    });
    const campaign = await getReadableCampaign(txCampaign);
    return campaign;
  };

  useEffect(() => {
    const setCamp = async () => {
      const getHash = async () => {
        if (campaignId) {
          try {
            const hash = await hashById(campaignId);
            return hash;
          } catch (e) {
            return;
          }
        } else return null;
      };
      const hash = campaignHash || (await getHash());
      if (!hash) return;
      try {
        const campaign = await getByHash(hash);
        setCampaign(campaign);
      } catch (e) {}
    };
    setCamp();
  }, []);
  return campaign;
}
