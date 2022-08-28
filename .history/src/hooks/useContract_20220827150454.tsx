import React from 'react'
import {useMoralis} from 'react-moralis'
import { contractAddresses, abi } from "../constants";

type Props = {}
interface contractAddressesInterface {
    [key: string]: string[];
  }

const useContract = (props: Props) => {
    //get contract and contract address

    const {
        chainId: chainIdHex,
        Moralis,
        account,

      } = useMoralis();
      const ethers = Moralis.web3Library;
      const provider = new ethers.providers.Web3Provider(window.ethereum);

  const addresses: contractAddressesInterface = contractAddresses;
      const chainId: string = parseInt(chainIdHex!).toString();
      const crowdFundAddress =
        chainId in contractAddresses ? addresses[chainId][0] : null;
        //@ts-ignore
        const contract = new ethers.Contract(crowdFundAddress!, abi, provider);

}

export default useContract