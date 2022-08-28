/** @format */
import { Contract, ContractInterface } from "ethers";
import { useWeb3Contract } from "react-moralis";
import { abi } from "../constants";
import { getReadableCampaign } from "./helpers";
export const getRecept = async (tx: any) => {
  const txRecept = await tx.wait(1);
  return txRecept;
};

export const getCampaignIdOfFunder = async (
  contract: Contract,
  funder: string | null
) => {
  const fundFilters = contract.filters.Fund(funder, null);
  try {
    const fundEvents = await contract.queryFilter(fundFilters, 0);
    console.log(fundEvents);
    const ids = fundEvents.map((event) => parseInt(event.topics[3]));
    return ids;
  } catch (e) {
    console.log(e);
  }
};

export const getCampaignIdOfCreator =async (
  contract: Contract,
  funder: string | null
) => {
const 
};
