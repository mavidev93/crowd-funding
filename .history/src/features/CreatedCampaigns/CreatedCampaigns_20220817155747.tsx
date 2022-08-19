/** @format */

import React, { useEffect } from "react";

//Third party
import { ContractInterface } from "ethers";
import { useMoralis,useWeb3Contract } from "react-moralis";
//App
import { contractAddresses, abi } from "../../constants";

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



  const provider = new ethers.providers.Web3Provider(window.ethereum);

  provider.on("Fund", () => console.log("funded"));
  // if (crowdFundAddress) {
  //   //@ts-ignore
  //   var contract = new ethers.Contract(crowdFundAddress!, abi, provider);
  //   contract.on("Fund", (from, campaignOwner, campaignHash) => {
  //     console.log(from);
  //     console.log(campaignOwner);
  //     console.log(campaignHash);
  //     console.log("funded");
  //   });
  // }
  //Handlers
  const handleTest = async () => {
    // console.log(account);
    //@ts-ignore
    var contract = new ethers.Contract(crowdFundAddress!, abi, provider);



    const blockNumber = await provider.getBlockNumber();
    console.log(blockNumber);

    provider.resetEventsBlock(0);
    if (crowdFundAddress) {
      const fundEvent = contract.filters.Fund(account);

      console.log(fundEvent);
    }
  };


  const handleSecTest = async()=>{
  //@ts-ignore
    var contract = new ethers.Contract(crowdFundAddress!, abi, provider);
    contract.on("Fund", (from, campaignOwner, id) => {
      console.log(from);
      console.log(campaignOwner);
      console.log(id);
      console.log("funded");
    });

    await getHashById
    await getCampaignByHash({
      onSuccess(tx) {
        console.log(tx);
      },
      params: { params: { _hash: '0xea6018f5990935ddd7fbbc256f4c7edb61cfca5192216272bf57ed91541d7a0b' } },
    });
  }

  useEffect(() => {
    if (!crowdFundAddress) return;
    console.log("from effect");

  }, [crowdFundAddress]);

  return (
    <div>
      CreatedCampaigns
      <button onClick={handleTest}>test</button>
      <br/>
      <button onClick={handleSecTest}>secTest</button>
    </div>
  );
};

export default CreatedCampaigns;
