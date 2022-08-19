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


    //Handlers
    const handleTest = async()=>{
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      if(crowdFundAddress){
        //@ts-ignore
      const contract =new ethers.Contract(crowdFundAddress,abi,provider)
      const testadd = contract.address
      const fundEvent = contract.filters.Fund()

      console.log(fundEvent)
      }


    }

  return (
    <div>CreatedCampaigns

      <button onClick={handleTest}>test</button>
    </div>
  )
}

export default CreatedCampaigns