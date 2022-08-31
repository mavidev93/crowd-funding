/** @format */
//  import { Contract } from "ethers";

/// <reference types="react-scripts" />
interface Window {
  ethereum: any;
}
declare module "web3.storage/dist/bundle.esm.min.js";
type BigNumber = any;
type Contract = any;
interface Campaign {
  avatarImgPath?: string;
  campaignDescription: string;
  campaignHash: string;
  campaignOwner: string;
  campaignTitle: string;
  daysLeft: number;
  fundingPeriodInDays: string;
  goalAchieved: boolean;
  goalAmount: string;
  headerImgPath?: string;
  isCampaignOpen: boolean;
  isExists: boolean;
  totalAmountFunded: string;
  isBookmarked?: boolean;
  isLiked?: boolean;
  isDisliked?: boolean;
  isOwnerWithdraw?: boolean;
}

interface CampaignIpfs {



}
