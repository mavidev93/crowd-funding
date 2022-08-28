/** @format */

import React, { useEffect, useState,useMemo } from "react";

//Third Party
import { useMoralis } from "react-moralis";
import { contractAddresses, abi } from "../constants";

type Props = {};
interface contractAddressesInterface {
  [key: string]: string[];
}

const useContract = () => {
  //get contract and contract address

  const { chainId: chainIdHex, Moralis, account } = useMoralis();
  const ethers = Moralis.web3Library;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const addresses: contractAddressesInterface = contractAddresses;
  const chainId: string = parseInt(chainIdHex!).toString();
  const crowdFundAddress =
    chainId in contractAddresses ? addresses[chainId][0] : null;
  //@ts-ignore
  const contract = new ethers.Contract(crowdFundAddress!, abi, provider);
  const [contractData, setContractData] = useState<Contract | null>({
    contract,
    crowdFundAddress,
    abi,
  });
  console.log(contractData);
  useEffect(() => {
    const chainId: string = parseInt(chainIdHex!).toString();
    const crowdFundAddress =
      chainId in contractAddresses ? addresses[chainId][0] : null;
    //@ts-ignore
    const contract = new ethers.Contract(crowdFundAddress!, abi, provider);
    setContractData({ contract, crowdFundAddress, abi });
  }, [chainIdHex]);

  return contractData;
  
};

export default   useContract;
