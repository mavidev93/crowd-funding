/** @format */
//React
import { useEffect, useState } from "react";

//Third Party
import {  useLocation } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useNotification } from "web3uikit";
import CircularProgress from "@mui/material/CircularProgress";
import ReactMarkdown from "react-markdown";

//App
import { contractAddresses, abi } from "../../constants";
import ConnectPlease from "../../components/ConnectPlease/ConnectPlease";
import CommonTitle from "../../components/CommonTitle/CommonTitle";
import CommonButton from "../../components/CommonButton/CommonButton";
import useContract from "../../hooks/useContract"
import {
  bigNumberToNumber,
  createUrl,
  bigNumberToString,
  getDaysLeft,
  getReadableCampaign,
} from "../../helpers/helpers";
import { makeStorageClient } from "../../helpers/web3Storage";
import FundModal from "../../components/FundModal/FundModal";
type Props = {};

//interface
interface contractAddressesInterface {
  [key: string]: string[];
}
//Component
const SingleCampaign = (props: Props) => {
  //States
  const [campaign, setCampaign] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  //Variables

  //Hooks
  const {
    Moralis,
    isWeb3Enabled,
    chainId: chainIdHex,
    account,
    enableWeb3,
  } = useMoralis();
  const dispatchNotification = useNotification();

  const {contract,crowdFundAddress,abi} = useContract()

  //Contract functions

  const { runContractFunction: getCampaignByHash } = useWeb3Contract({
    abi: abi,
    contractAddress: crowdFundAddress!,
    functionName: "getCampaignByHash",
  });

  const location: any = useLocation();

  //Handlers

  //Effects
  useEffect(() => {
    if (!isWeb3Enabled) return;
    getCampaign();
  }, [isWeb3Enabled]);

  async function getCampaign() {
    setError(null);
    try {
      const hash = location.state.hash;
      if (!hash) return;
      const handleSuccess = async (txCampaign: any) => {
        const campaign = await getReadableCampaign(txCampaign);
        setCampaign(campaign);
      };

      await getCampaignByHash({
        onSuccess(tx) {
          handleSuccess(tx);
        },
        params: { params: { hash: hash } },
      });
    } catch (e: any) {
      setError(e?.message);
      dispatchNotification({
        message: "Loading failed!",
        type: "error",
        position: "topR",
      });
    }
  }

  return (
    <div className="w-3/4 mx-auto px-5 py-3 border--white-color-dark border-[.5px] m-2 my-4">
      {isWeb3Enabled ? (
        <>
          {campaign ? (
            <>
              <div className="flex justify-center py-2 ">
                {campaign.headerImgPath && (
                  <img src={createUrl(campaign.headerImgPath)} />
                )}{" "}
              </div>

              <CommonTitle
                text={campaign.campaignTitle}
                className="text-center text-lg	text-bold"
              />
              <div>
                <ReactMarkdown>{campaign.campaignDescription}</ReactMarkdown>
                <div className="flex justify-between items-center w-full mt-4	">
                  <div className="flex flex-col flex-1">
                    <p className="text-lime-600 font-bold text-primary-color">
                      <span>Funded Amount: </span>{" "}
                      <span>{campaign.totalAmountFunded}</span>
                    </p>
                    <p>
                      {" "}
                      <span>Goal Amount:</span>{" "}
                      <span>{campaign.goalAmount}</span>
                    </p>
                  </div>

                  <FundModal
                    campaignHash={campaign.campaignHash}
                    isCampaignOpen={campaign.isCampaignOpen}
                  />
                  <p className="flex-1 text-right text-secondary-color	">
                    {" "}
                    <AccessTimeIcon />{" "}
                    {campaign.daysLeft >= 0 ? (
                      <span>{`${campaign.daysLeft} Days Left`}</span>
                    ) : (
                      <span>Funding Time Finished</span>
                    )}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className=" ">
              {/* //TODO: add a not fund page */}
              {error ? (
                <span>Not Fund! </span>
              ) : (
                <div className="flex items-center ">
                  <span className="italic mr-3">Loading ...</span>{" "}
                  <CircularProgress />
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <ConnectPlease />
      )}
    </div>
  );
};

export default SingleCampaign;
