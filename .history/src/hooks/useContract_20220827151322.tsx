import React,{useEffect,useState} from 'react'

//Third Party
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
 
      const [contractData,setContractData] = useState(null)
      console.log(contractData)
      useEffect(()=>{

      },[chainIdHex])

}

export default useContract