/** @format */
import { useEffect, useState } from "react";

//Third party
import { useMoralis, useWeb3Contract } from "react-moralis";
import Button from "@mui/material/Button";

//App
import useGetCampaigns from "../../hooks/useGetCampaigns";
import useContract from "../../hooks/useContract";
import { getCampaignIdOfCreator } from "../../helpers/web3Helpers";
import CommonButton from "../../components/CommonButton/CommonButton";
import CampaignCardData from "../../components/CampaignCardData/CampaignCardData";
import ReadMore from "../../components/ReadMore/ReadMore";
import ConnectPlease from "../../components/ConnectPlease/ConnectPlease";


const CreatedCampaigns = () => {
  const { account, isWeb3Enabled } = useMoralis();

  //States
  const [ids, setIds] = useState<null | number[]>(null);

  const contractData = useContract();

  const campaigns = useGetCampaigns(ids);
  //Contract Functions
  const { runContractFunction: withdrawFunds } = useWeb3Contract({
    abi: contractData?.abi,
    contractAddress: contractData?.crowdFundAddress || undefined,
    functionName: "withdrawFunds",
  });

  const { runContractFunction: closeCampaign } = useWeb3Contract({
    abi: contractData?.abi,
    contractAddress: contractData?.crowdFundAddress || undefined,
    functionName: "closeCampaign",
  });

  //Handlers
  const handleWithdraw = async (hash: any) => {
     await withdrawFunds({ params: { params: { hash: hash } } });
  };

  const handleCloseCampaign = async (hash: string) => {
    try {
       await closeCampaign({ params: { params: { hash: hash } } });
    } catch (e) {}
  };

  //Effects
  useEffect(() => {
    if (!account || !contractData) {
      setIds(null);
      return;
    }
    const getId = async () => {
      const ids = await getCampaignIdOfCreator(contractData.contract, account);
      ids && setIds(ids);
    };
    getId();
  }, [account]);
  return (
    <div className="m-3 md:w-3/5 md:mx-auto">
      {isWeb3Enabled ? (
        <>
          {campaigns ?
            //check user with zero campaigns and get recently created campaigns first
       campaigns.length?  [...campaigns].reverse().map((c) => (
              <div className="m-3 py-2 px-3 shadow-md" key={c.campaignHash}>
                <CampaignCardData campaign={c} />

                <div className="flex items-center">
                  <CommonButton
                    text="withdraw Funds"
                    variant="contained"
                    onClick={(e) => handleWithdraw(c.campaignHash)}
                    disabled={c.isOwnerWithdraw || !c.goalAchieved}
                  />
                  <Button
                    onClick={(e) => handleCloseCampaign(c.campaignHash)}
                    color="error"
                    variant="contained"
                    className="ml-2"
                    disabled={!c.isCampaignOpen}
                  >
                    Close Campaign
                  </Button>
                  <div className="ml-auto">
                    <ReadMore
                      campaignHash={c.campaignHash}
                      campaignTitle={c.campaignTitle}
                    />
                  </div>
                </div>
              </div>
            )):<p>No Campaign Found!</p>:null}
        </>
      ) : (
        <ConnectPlease />
      )}
    </div>
  );
};

export default CreatedCampaigns;
