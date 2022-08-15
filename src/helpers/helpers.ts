/** @format */
import {ethers} from "ethers"
export function bigNumberToNumber(num: any) {
  return num.toNumber();

}

export function bigNumberToString(num:any){
  return ethers.utils.formatEther(num)
}

export function createUrl(hash: string) {
  return `https://ipfs.io/ipfs/${hash}`;
}
