/** @format */
//React
import { useEffect, useState } from "react";

//Third Party
import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import axios from "axios";
import { useMoralis, useMoralisFile, useWeb3Contract } from "react-moralis";
// import { Moralis } from "moralis";

//App
import { contractAddresses, abi } from "../../constants";
import ConnectPlease from "../../components/ConnectPlease/ConnectPlease";
import CommonTitle from "../../components/CommonTitle/CommonTitle";
import CommonButton from "../../components/CommonButton/CommonButton";
import {
  bigNumberToNumber,
  createUrl,
  bigNumberToString,
} from "../../helpers/helpers";
import { makeStorageClient } from "../../helpers/web3Storage";
import FundModal from "../../components/FundModal/FundModal";
type Props = {};

//interface
interface contractAddressesInterface {
  [key: string]: string[];
}
const dummyProps = {
  title: "Project title",
  text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atvoluptatibus ipsam veniam excepturi quos id neque aspernatur nobis,aliquam velit molestiae ducimus reiciendis sit quod? qui quae impedit assumenda iste debitis, sint hic nihil ducimuslaudantium tempore aspernatur, rem facilis autem repudiandae saepeexpedita placeat! Explicabo officia a ipsum alias laborum sapienteillo. Explicabo minus possimus quaerat beatae ullam. Obcaecatirepudiandae non eum voluptate. Nemo reprehenderit cupiditateperspiciatis eveniet fugiat temporibus provident, laudantiumvoluptates doloribus deserunt enim facere vitae? Voluptatem similiquefacilis modi saepe. Unde vel inventore impedit aliquid sed. Repellatasperiores deleniti hic adipisci exercitationem autem?",
  headerImg: "",
  goalAmount: 2,
  fundedAmount: 1.23,

  daysLeft: 4,
  id: nanoid(),
};

//Component
const SingleProjectPage = (props: Props) => {
  //States
  const [campaign, setCampaign] = useState<any>(null);
  //Variables
  const addresses: contractAddressesInterface = contractAddresses;
  const client = makeStorageClient();

  //Hooks
  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
  const chainId: string = parseInt(chainIdHex!).toString();

  const crowdFundAddress =
    chainId in contractAddresses ? addresses[chainId][0] : null;
  console.log(chainId);
  console.log(isWeb3Enabled);

  //Contract functions
  const { runContractFunction: getHashById } = useWeb3Contract({
    abi: abi,
    contractAddress: crowdFundAddress!,
    functionName: "getHashById",
  });

  const { runContractFunction: getCampaignByHash } = useWeb3Contract({
    abi: abi,
    contractAddress: crowdFundAddress!,
    functionName: "getCampaignByHash",
  });

  const { runContractFunction: getCampaignCount } = useWeb3Contract({
    abi: abi,
    contractAddress: crowdFundAddress!,
    functionName: "getCampaignCount",
  });

  const { runContractFunction: fundCampaign } = useWeb3Contract({
    abi: abi,
    contractAddress: crowdFundAddress!,
    functionName: "fundCampaign",
  });

  const { campaignId } = useParams();
  const handleTest = async () => {
    console.log(crowdFundAddress);
    const campaignCount: any = await getCampaignCount();
    console.log(campaignCount.toNumber());

    const hash = await getHashById({ params: { params: { _id: 2 } } });
    console.log(hash);
    const campaignContract = await getCampaignByHash({
      params: { params: { _hash: hash } },
    });
    console.log(campaignContract);
    const {
      campaignHash,
      campaignOwner,
      // campaignUrl,
      deadline,
      goalAchieved,
      isCampaignOpen,
      isExists,
      totalAmountFunded,
    }: any = campaignContract;
    console.log(campaignHash);
    const campaignIpfs = (await axios.get(createUrl(campaignHash))).data;

    console.log(campaignIpfs);

    const {
      avatarImgPath,
      campaignDescription,
      campaignTitle,
      fundingPeriodInDays,
      goalAmount,
      headerImgPath,
      walletAddress,
    }: any = campaignIpfs;

    console.log(campaignTitle);

    console.log(bigNumberToNumber(deadline));
    const deadlineInMilliSec = bigNumberToNumber(deadline) * 1000;
    const now = Date.now();
    const daysLeft = Math.floor(
      (deadlineInMilliSec - now) / (24 * 3600 * 1000)
    );
    const campaign = {
      campaignHash,
      campaignDescription,
      daysLeft,
      isCampaignOpen,
      totalAmountFunded: bigNumberToString(totalAmountFunded),
      isExists,
      campaignTitle,
      fundingPeriodInDays,
      goalAmount,
      headerImgPath,
    };

    setCampaign(campaign);
  };

  const fund = async (amount: string) => {
    const tx = await fundCampaign({
      params: {
        msgValue: Moralis.Units.ETH(amount),

        params: {
          _hash: campaign.campaignHash,
        },
      },
    });
    console.log(tx);
  };
  //Handlers

  //Effects
  useEffect(() => {}, []);

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
                <p className="py-3">{campaign.campaignDescription}</p>
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
                  {/* <CommonButton
                    text="Fund Campaign"
                    variant="contained"
                    className="bg-primary-color my-3 "
                    disabled={!campaign.isCampaignOpen}
                    onClick={handleFundCampaign}
                  /> */}
                  <FundModal
                    fund={fund}
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

              <button onClick={handleTest}>test</button>
            </>
          ) : (
            <div>
              loading <button onClick={handleTest}>test</button>
            </div>
          )}
        </>
      ) : (
        <ConnectPlease />
      )}
    </div>
  );
};

export default SingleProjectPage;
