/** @format */

export const getRecept = async (tx: any) => {
  const txRecept = await tx.wait(1);
  return txRecept;
};

export getCampaigns = async ( contract:Contract,showdDoplicated,account: string) => {
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // //@ts-ignore

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