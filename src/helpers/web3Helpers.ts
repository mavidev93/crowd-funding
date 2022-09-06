/** @format */
import { Contract } from "ethers";
import {  bigNumberToString } from "./helpers";
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
    //when user not fund and campaign
    if(fundEvents.length ===0)
    return []
    const campaignsData = fundEvents.map((event) => {
      return {
        value: bigNumberToString(event.topics[2]),
        id: parseInt(event.topics[3]),
      };
    });
    return campaignsData;
  } catch (e) {}
};

export const getCampaignIdOfCreator = async (
  contract: Contract,
  creator: string | null
) => {
  const createFilter = contract.filters.Create(creator, null);
  try {
    const createEvents = await contract.queryFilter(createFilter, 0);
    //when user got notCreated any Campaign
    if(createEvents.length ===0) return []
    const ids = createEvents.map((event) => parseInt(event.topics[2]));
    return ids;
  } catch (e) {}
};
