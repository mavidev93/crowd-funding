/** @format */

import {  useMemo } from "react";

//Third Party
import { useMoralis } from "react-moralis";
import { contractAddresses, abi } from "../constants";

interface contractAddressesInterface {
  [key: string]: string[];
}

const useContract = () => {
  //get contract and contract address
  const { chainId: chainIdHex, Moralis, isWeb3Enabled } = useMoralis();
  const createContractData = (chainIdHex: string | null) => {
    if (!chainIdHex || !isWeb3Enabled) return null;
    const ethers = Moralis.web3Library;
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const addresses: contractAddressesInterface = contractAddresses;
    const chainId: string = parseInt(chainIdHex!).toString();
    const crowdFundAddress =
      chainId in contractAddresses ? addresses[chainId][0] : undefined;
    //@ts-ignore
    const contract = new ethers.Contract(crowdFundAddress!, abi, provider);
    return { contract, crowdFundAddress, abi };
  };

  return useMemo(
    () => createContractData(chainIdHex),
    [chainIdHex, isWeb3Enabled]
  );
};

export default useContract;
