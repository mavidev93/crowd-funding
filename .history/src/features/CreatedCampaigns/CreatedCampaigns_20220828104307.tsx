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

//interface
interface contractAddressesInterface {
  [key: string]: string[];
}
type Props = {};

const CreatedCampaigns = (props: Props) => {
  const { account } = useMoralis();

  //States
  const [ids, setIds] = useState<null | number[]>(null);

  // const { contract, abi, crowdFundAddress } = useContract();
  const contractData = useContract();

  const campaigns = useGetCampaigns(
    contractData?.contract,
    contractData?.abi,
    ids
  );

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
    const tx = await withdrawFunds({ params: { params: { hash: hash } } });
    console.log(tx);
  };

  const handleCloseCampaign = async (hash: string) => {
    try {
      const tx = await closeCampaign({ params: { params: { hash: hash } } });
    } catch (e) {
      console.log(e);
    }
  };

  //Effects
  useEffect(() => {
    if (!account && !contractData?.contract) {
      setIds(null);
      return;
    }
    const getId = async () => {
      const ids = await getCampaignIdOfCreator(
        !contractData?.contract,
        account
      );
      ids && setIds(ids);
    };
    getId();
  }, [account]);
  return (
    <div className="m-3 md:w-3/5 md:mx-auto">
      {campaigns &&
        campaigns.map((c) => (
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
        ))}
    </div>
  );
};

export default CreatedCampaigns;
