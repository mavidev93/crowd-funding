/** @format */
//Third Party
import { ethers } from "ethers";
import axios from "axios";
export function bigNumberToNumber(num: any) {
  return num.toNumber();
}

export function bigNumberToString(num: any) {
  return ethers.utils.formatEther(num);
}

export function createUrl(hash: string) {
  return `https://ipfs.io/ipfs/${hash}`;
}

export function getDaysLeft(deadline: BigNumber): number {
  const deadlineInMilliSec = bigNumberToNumber(deadline) * 1000;
  const now = Date.now();
  const daysLeft = Math.floor((deadlineInMilliSec - now) / (24 * 3600 * 1000));
  return daysLeft;
}

export async function getCampaignFromIpfs(hash: string) {
  const getCampaignIpfs = (await axios.get(createUrl(hash))).data;
  const {
    avatarImgPath,
    campaignDescription,
    campaignTitle,
    fundingPeriodInDays,
    goalAmount,
    headerImgPath,
    walletAddress,
  }: any = getCampaignIpfs;
  return {
    avatarImgPath,
    campaignDescription,
    campaignTitle,
    fundingPeriodInDays,
    goalAmount,
    headerImgPath,
    walletAddress,
  };
}

export async function getReadableCampaign(txCampaign: any) {
  console.log(txCampaign);
  const {
    campaignHash,
    campaignOwner,
    deadline,
    goalAchieved,
    isCampaignOpen,
    isExists,
    totalAmountFunded,
    isOwnerWithdraw,
  }: any = txCampaign;
  const campaignFromIpfs = await getCampaignFromIpfs(campaignHash);
  const {
    avatarImgPath,
    campaignDescription,
    campaignTitle,
    fundingPeriodInDays,
    goalAmount,
    headerImgPath,
    walletAddress,
  }: any = campaignFromIpfs;

  const daysLeft = getDaysLeft(deadline);
  const campaign = {
    campaignHash,
    campaignDescription,
    campaignOwner,
    daysLeft,
    isCampaignOpen,
    totalAmountFunded: bigNumberToString(totalAmountFunded),
    avatarImgPath,
    isExists,
    campaignTitle,
    fundingPeriodInDays,
    goalAmount,
    headerImgPath,
    goalAchieved,
    isOwnerWithdraw,
  };
  return campaign;
}
