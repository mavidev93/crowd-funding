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

}

export default useContract