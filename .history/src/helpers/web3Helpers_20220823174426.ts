/** @format */
import {Contract} from"ethers"

export const getRecept = async (tx: any) => {
  const txRecept = await tx.wait(1);
  return txRecept;
};


export const getCampaignIdes = async (
  contract: Contract,
  owner: string | null,
  funder: string | null
) => {

    const fundFilters = contract.filters.Fund(funder, owner);
    try {
      const fundEvents = await contract.queryFilter(fundFilters, 0);
      console.log(fundEvents);
      const ids = fundEvents.map((event) => parseInt(event.topics[3]));
      return ids;
    } catch (e) {
      console.log(e);
    }

};

export const getCampaigns = async ( contract:Contract,funder:string|null,owner:string|null,howdDoplicated:boolean,account: string) => {
  // var contract = new ethers.Contract(crowdFundAddress!, abi, provider);
  try {
    const allIds = await getCampaignIdes(contract, account, null);

    if (allIds) {

      const ids = showdDoplicated ? allIds :[...new Set(allIds)] ;


      const campaigns = await Promise.all(
        ids!.map(async (id): Promise<Campaign> => {
          const hash: any = await getHashById({
            params: { params: { _id: id } },
          });
          const txCampaign = await getCampaignByHash({
            params: { params: { _hash: hash } },
          });
          const campaign = await getReadableCampaign(txCampaign);
          return campaign;
        })
      );
      console.log(campaigns);
      return campaigns;
    }
  } catch (e) {
    console.log(e);
  }
};