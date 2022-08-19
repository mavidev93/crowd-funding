/** @format */

import React, { useEffect } from "react";

//Third party
import { ContractInterface } from "ethers";
import { useMoralis, useWeb3Contract } from "react-moralis";
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
  const {utils} = ethers
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

    //   provider.once("Fund",async (from, campaignOwner, id) => {
    //     console.log(from);
    //     console.log(campaignOwner);
    //     console.log(id);
    //     console.log("funded");
    //  const hash =    await getHashById({params:{params:{_id:id.toNumber()}}})
    //  console.log(hash)
    //   const blockNumber = await provider.getBlockNumber();
    //   console.log(blockNumber);
    //   })
    // provider.resetEventsBlock(0);
    if (crowdFundAddress) {
      // const filter = { address: crowdFundAddress };
      // provider.on(filter, (log, event) => {
      //   console.log(event);
      //   // Emitted whenever a DAI token transfer occurs
      // });
      const fundEvent = contract.filters.Fund();

      console.log(fundEvent);
    }
  };

  const handleSecTest = async () => {
    //@ts-ignore
    var contract = new ethers.Contract(crowdFundAddress!, abi, provider);
  provider.on({
    fromBlock:0,address:crowdFundAddress!,topics:[utils.id("Fund(address,address,uint256)")],}, async (from, campaignOwner, id) => {
      console.log(from);
      console.log(campaignOwner);
      console.log(id);
      console.log("funded");
      const hash = await getHashById(id.toNumber());
      await getCampaignByHash({
        onSuccess(tx) {
          console.log(tx);
        },
        params: { params: { _hash: hash } },
      });
    });

    // await getCampaignByHash({
    //   onSuccess(tx) {
    //     console.log(tx);
    //   },
    //   params: { params: { _hash: '0xea6018f5990935ddd7fbbc256f4c7edb61cfca5192216272bf57ed91541d7a0b' } },
    // });
  };

  useEffect(() => {
    if (!crowdFundAddress) return;
    //@ts-ignore
    var contract = new ethers.Contract(crowdFundAddress!, abi, provider);
    contract.on("Fund", async (from, campaignOwner, id) => {
      console.log(from);
      console.log(campaignOwner);
      console.log(id);
      console.log("funded");
      const hash = await getHashById({
        params: { params: { _id: id.toNumber() } },
      });
      console.log(hash);

      await getCampaignByHash({
        onSuccess(tx) {
          console.log(tx);
        },
        params: { params: { _hash: hash } },
      });
    });
  }, [crowdFundAddress]);

  return (
    <div>
      CreatedCampaigns
      <button onClick={handleTest}>test</button>
      <br />
      <button onClick={handleSecTest}>secTest</button>
    </div>
  );
};

export default CreatedCampaigns;
