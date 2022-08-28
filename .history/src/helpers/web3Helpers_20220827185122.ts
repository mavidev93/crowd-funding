/** @format */
import { Contract, ContractInterface } from "ethers";
import { useWeb3Contract } from "react-moralis";
import { abi } from "../constants";
import { getReadableCampaign } from "./helpers";
export const getRecept = async (tx: any) => {
  const txRecept = await tx.wait(1);
  return txRecept;
};

export const getCampaignDataOfFunder = async (
  contract: Contract,
  funder: string | null
) => {
  const fundFilter = contract.filters.Fund(funder, null);
  try {
    const fundEvents = await contract.queryFilter(fundFilter, 0);
    console.log(fundEvents);
    const ids = fundEvents.map((event) => {
      {value:parseInt(event.topics[2]),
    id:parseInt(event.topics[3])});
    return ids;
  } catch (e) {
    console.log(e);
  }
};

export const getCampaignIdOfCreator = async (
  contract: Contract,
  creator: string | null
) => {
  const createFilter = contract.filters.Create(creator, null);
  try {
    const createEvents = await contract.queryFilter(createFilter, 0);
    console.log(createEvents);
    const ids = createEvents.map((event) => parseInt(event.topics[2]));
    return ids;
  } catch (e) {
    console.log(e);
  }
};
