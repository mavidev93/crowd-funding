import React from 'react'

//Third party
// import {ethers} from "ethers"
import {useMoralis} from "react-moralis"
//App
import { contractAddresses, abi } from "../../constants";
type Props = {}

const CreatedCampaigns = (props: Props) => {
  const {
    isWeb3Enabled,
    chainId: chainIdHex,
    user,
    Moralis,
    account,
  } = useMoralis();
  const {ethers} = Moralis.web

  const chainId: string = parseInt(chainIdHex!).toString();
  const crowdFundAddress =
    chainId in contractAddresses ? addresses[chainId][0] : null;
  return (
    <div>CreatedCampaigns</div>
  )
}

export default CreatedCampaigns