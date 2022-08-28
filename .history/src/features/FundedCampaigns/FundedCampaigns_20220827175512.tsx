/** @format */

//React
import { useState, useEffect } from "react";

//Third Party
import { useMoralis, useWeb3Contract } from "react-moralis";

//App
import CampaignCardData from "../../components/CampaignCardData/CampaignCardData";
import { getCampaignIdOfFunder } from "../../helpers/web3Helpers";
import ReadMore from "../../components/ReadMore/ReadMore";
import useGetCampaigns from "../../hooks/useGetCampaigns";
import useContract from "../../hooks/useContract";
import CommonButton from "../../components/CommonButton/CommonButton";

const FundedCampaigns = () => {
  const { account } = useMoralis();

  //States
  const [ids, setIds] = useState<null | number[]>(null);
  const { contract, abi, crowdFundAddress } = useContract();
  const campaigns = useGetCampaigns(contract, abi, ids);

  //Effects
  useEffect(() => {
    if (!account) {
      setIds(null);
      return;
    }
    const getIds = async () => {
      const ids = await getCampaignIdOfFunder(contract, account);
      ids && setIds(ids);
    };
    getIds();
  }, [account]);
  return (
    <div className="m-3 md:w-3/5 md:mx-auto">
      {campaigns?.map((c) => (
        <div className="m-3 py-2 px-3 shadow-md" key={c.campaignHash}>
          <CampaignCardData campaign={c} />
          <div className="flex items-center">
            <
        </div>
      ))}
    </div>
  );
};

export default FundedCampaigns;
