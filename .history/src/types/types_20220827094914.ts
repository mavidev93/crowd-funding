/** @format */

export interface Campaign {
  avatarImgPath?: string;
  campaignDescription: string;
  campaignHash: string;
  campaignOwner: string;
  campaignTitle: string;
  daysLeft: number;
  fundingPeriodInDays: string;
  goalAchieved: boolean;
  goalAmount: string;
  headerImgPath?:  string;
  isCampaignOpen: boolean;
  isExists: boolean;
  totalAmountFunded: string;
  isBookmarked?: boolean;
  isLiked?: boolean;
  isDisliked?: boolean;
  isOwnerWithdraw?:
}
