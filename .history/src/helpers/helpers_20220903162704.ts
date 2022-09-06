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
type CampaignData = { campaignHash: string; campaignTitle: string,dispatchNotification:Function};

export const addCampaignToBookmarks = ({
  campaignTitle,
  campaignHash,
  dispatchNotification
}: CampaignData) => {
    const bookmarksLocal = localStorage.getItem("bookmarks");
  console.log(bookmarksLocal)
  console.log("add bookmark");
  if (bookmarksLocal) {
    const bookmarksArr = JSON.parse(bookmarksLocal)
    const hashesArr = bookmarksArr.map((c:CampaignData) => c.campaignHash);
    if (hashesArr.includes(campaignHash)) {
      dispatchNotification({
        message: "campaign already bookmarked",
        position: "topR",
        type: "warning",
      });

      return;
    }
    localStorage.setItem(
      "bookmarks",
      JSON.stringify([...bookmarksArr, { campaignTitle, campaignHash }])
    );
    dispatchNotification({
      message: "campaign  bookmarked",
      position: "topR",
      type: "success",
    });
  } else {
    localStorage.setItem(
      "bookmarks",
      JSON.stringify([{ campaignTitle, campaignHash }])
    );
    // dispatchNotification({
    //   message: "campaign  bookmarked",
    //   position: "topR",
    //   type: "success",
    // });
  }
};