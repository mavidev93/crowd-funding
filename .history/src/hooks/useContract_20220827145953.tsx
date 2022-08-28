import React from 'react'
im
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