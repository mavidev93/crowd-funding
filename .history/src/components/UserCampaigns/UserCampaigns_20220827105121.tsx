/** @format */

import React, { useEffect, useState } from "react";

//Third party
import { useMoralis, useWeb3Contract } from "react-moralis";
import { Contract } from "ethers";
import { useParams } from "react-router-dom";
//App
import { contractAddresses, abi } from "../../constants";
import { getReadableCampaign } from "../../helpers/helpers";
import CampaignsList from "../CampaignsList/CampaignsList";

//interface
interface contractAddressesInterface {
  [key: string]: string[];
}
enum UserPage {
  createdCampaigns = "createdCampaigns",
  fundedCampaigns = "fundedCampaigns",
}
type Props = {};

const UserCampaigns = (props: Props) => {
  //States
  const [campaigns, setCampaigns] = useState<null | Campaign[]>(null);

  //Hooks
  const {
    isWeb3Enabled,
    chainId: chainIdHex,
    user,
    Moralis,
    account,
  } = useMoralis();

  const { userPage } = useParams();
  const ethers = Moralis.web3Library;
  const { utils } = ethers;
  const addresses: contractAddressesInterface = contractAddresses;
  const chainId: string = parseInt(chainIdHex!).toString();
  const crowdFundAddress =
    chainId in contractAddresses ? addresses[chainId][0] : null;
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

  const getCampaignIdes = async (
    contract: Contract,
    owner: string | null,
    funder: string | null
  ) => {
    if (crowdFundAddress) {
      const fundFilters = contract.filters.Fund(funder, owner);
      try {
        const fundEvents = await contract.queryFilter(fundFilters, 0);
        console.log(fundEvents);
        const ids = fundEvents.map((event) => parseInt(event.topics[3]));
        return ids;
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getCampaigns = async (account: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    //@ts-ignore
    var contract = new ethers.Contract(crowdFundAddress!, abi, provider);
    try {
      const allIds = await getCampaignIdes(contract, account, null);

      if (allIds) {
        //remove douplicated ids in created project
        //TODO: add page enum
        const ids =
          userPage === UserPage.createdCampaigns
            ? [...new Set(allIds)]
            : allIds;

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
        console.log(campaigns);
        return campaigns;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleTest = () => {
    if (!account) {
      console.log("no account");
      return;
    }
    getCampaigns(account);
  };
  useEffect(() => {
    if (!account || !crowdFundAddress) return;
    const setCamp = async () => {
      const campaigns = await getCampaigns(account);

      campaigns && setCampaigns(campaigns);
    };
    setCamp();
  }, [crowdFundAddress, account, userPage]);

  return (
    <div>
      {/* <button onClick={handleTest}>test</button> */}
      {campaigns && (
        <CampaignsList
          title={
            userPage === UserPage.createdCampaigns
              ? "created campaigns"
              : "Funded campaigns"
          }
          campaigns={campaigns}
          ShowData={true}
        />
      )}
    </div>
  );
};

export default UserCampaigns;
