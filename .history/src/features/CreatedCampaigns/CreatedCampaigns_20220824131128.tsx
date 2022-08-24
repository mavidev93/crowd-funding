/** @format */

import React, { useEffect, useState } from "react";

//Third party
import { useMoralis } from "react-moralis";
//App
import { contractAddresses, abi } from "../../constants";
import useGetCampaigns from "../../hooks/useGetCampaigns";
import { getCampaignIdes } from "../../helpers/web3Helpers";
import CampaignCardData from "../../components/CampaignCardData/CampaignCardData"
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
  } = useMoralis();
  const ethers = Moralis.web3Library;

  //States
  const [ids, setIds] = useState<null | number[]>(null);
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const addresses: contractAddressesInterface = contractAddresses;
  const chainId: string = parseInt(chainIdHex!).toString();
  const crowdFundAddress =
    chainId in contractAddresses ? addresses[chainId][0] : null;
  //@ts-ignore
  const contract = new ethers.Contract(crowdFundAddress!, abi, provider);
  const campaigns = useGetCampaigns(contract, abi, ids);

  //Effects
  useEffect(() => {
    if (!account) {
      setIds(null)
      return
    };
    const getId = async () => {
      const ids = await getCampaignIdes(contract, account, null, false);
      ids && setIds(ids);
    };
    getId();
  }, [account]);
  return (
    <div>
      {campaigns && campaigns.map((cam) => <div><CampaignCardData {...campaign} /></div>)}
    </div>
  );
};

export default CreatedCampaigns;
