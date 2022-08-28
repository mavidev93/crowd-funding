import React from 'react'
import {useMoralis} from 'react-moralis'
type Props = {}

const useContract = (props: Props) => {
    //get contract and contract address
    const {
        chainId: chainIdHex,
        Moralis,
        account,

      } = useMoralis();
      const ethers = Moralis.web3Library;
      const chainId: string = parseInt(chainIdHex!).toString();
      const crowdFundAddress =
        chainId in contractAddresses ? addresses[chainId][0] : null;
}

export default useContract