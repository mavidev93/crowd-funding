/** @format */
import { Contract, ContractInterface } from "ethers";
import { useWeb3Contract } from "react-moralis";
import { abi } from "../constants";
import { getReadableCampaign } from "./helpers";
export const getRecept = async (tx: any) => {
  const txRecept = await tx.wait(1);
  return txRecept;
};

export const getCampaignIdes = async (
  contract: Contract,
  eventName:string,
  owner: string | null,
  funder: string | null,
  duplicated:boolean
) => {
  //@ts-ignore
  const name =`contract.filters.${[eventName]}`
  const fn = { [name]() {} }[name];
    //@ts-ignore

name()
  const fundFilters = contract.filters.[eventName](funder, owner);
  try {
    const fundEvents = await contract.queryFilter(fundFilters, 0);
    console.log(fundEvents);
    const ids = fundEvents.map((event) => parseInt(event.topics[3]));
    return duplicated? ids:[...new Set(ids)];
  } catch (e) {
    console.log(e);
  }
};



