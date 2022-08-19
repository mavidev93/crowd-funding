import React from 'react'

//Third party
// import {ethers} from "ethers"
import {useMoralis} from "react-moralis"
//App
import { contractAddresses, abi } from "../../constants";

//interface
interface contractAddressesInterface {
  [key: string]: string[];
}
type Props = {}

const CreatedCampaigns = (props: Props) => {
  const {
    isWeb3Enabled,
    chainId: chainIdHex,
    user,
    Moralis,
    account,
  } = useMoralis();
  const ethers = Moralis.web3Library

  const addresses: contractAddressesInterface = contractAddresses;
  const chainId: string = parseInt(chainIdHex!).toString();
  const crowdFundAddress =
    chainId in contractAddresses ? addresses[chainId][0] : null;

    wi
    //Handlers
    const handleTest = async()=>{
      const provider = new ethers.providers.Web3Provider(window.ethereum)

    }

  return (
    <div>CreatedCampaigns

      <button onClick={handleTest}></button>
    </div>
  )
}

export default CreatedCampaigns