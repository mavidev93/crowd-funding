/** @format */

import React, { useEffect, useState } from "react";

//Third party
import { useMoralis, useWeb3Contract } from "react-moralis";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { BookmarkAddOutlined } from "@mui/icons-material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
//App
import { contractAddresses, abi } from "../../constants";
import useGetCampaigns from "../../hooks/useGetCampaigns";
import { getCampaignIdOfCreator } from "../../helpers/web3Helpers";
import CommonTitle from "../../components/CommonTitle/CommonTitle";
import ReactMarkdown from "react-markdown";
import placeHolder from "../../assets/images/images.png";
import DaysLeft from "../../components/DaysLeft/DaysLeft";
import CommonButton from "../../components/CommonButton/CommonButton";
import ReadMore from "../../components/ReadMore/ReadMore";

//interface
interface contractAddressesInterface {
  [key: string]: string[];
}
type Props = {};

const CreatedCampaigns = (props: Props) => {
  const {
    isWeb3Enabled,
    chainId: chainIdHex,
    user,
    Moralis,
    account,
  } = useMoralis();
  const ethers = Moralis.web3Library;

  //States
  const [ids, setIds] = useState<null | number[]>(null);
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const addresses: contractAddressesInterface = contractAddresses;
  const chainId: string = parseInt(chainIdHex!).toString();
  const crowdFundAddress =
    chainId in contractAddresses ? addresses[chainId][0] : null;
  //@ts-ignore
  const contract = new ethers.Contract(crowdFundAddress!, abi, provider);
  const campaigns = useGetCampaigns(contract, abi, ids);
  console.log(contract);
  const { runContractFunction: withdrawFunds } = useWeb3Contract({
    abi: abi,
    // @ts-ignore
    contractAddress: crowdFundAddress,
    functionName: "withdrawFunds",
  });

  //Handlers
  const handleWithdraw = async (hash: any) => {
    // console.log(hash);
    const tx = await withdrawFunds({ params: { params: { hash: hash } } });
    // const tx = await contract.withdrawFunds(hash);
    console.log(tx);
  };
  //Effects
  useEffect(() => {
    if (!account) {
      setIds(null);
      return;
    }
    const getId = async () => {
      const ids = await getCampaignIdOfCreator(contract, account);
      ids && setIds(ids);
    };
    getId();
  }, [account]);
  return (
    <div
      className="m-3 md:w-3/5 md:mx-auto  shadow-md
    "
    >
      {campaigns &&
        campaigns.map((c) => (
          <div className="m-3 p-2" key={c.campaignHash}>
            {/* <CommonTitle text={c.campaignTitle}/> */}

            <div>
              <Card className="flex  justify-end  flex-row-reverse shadow-none">
                <Box
                  className="grow "
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      {c.campaignTitle}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      <ReactMarkdown className="line-clamp-2 ">
                        {c.campaignDescription}
                      </ReactMarkdown>
                    </Typography>
                  </CardContent>
                </Box>

                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={c.avatarImgPath || placeHolder}
                  alt="Live from space album cover"
                />
              </Card>
            </div>
            <div>
              <div className="flex justify-between  items-center w-full mt-4	">
                <p className="text-lime-600 font-bold text-primary-color order-3">
                  <span>Funded Amount: </span>{" "}
                  <span>{c.totalAmountFunded}</span>
                </p>
                <p className="text-lime-600 font-bold text-primary-color-dark order-5">
                  <span>Goal Amount:</span> <span>{c.goalAmount}</span>
                </p>
                <DaysLeft daysLeft={c.daysLeft} />
              </div>
              <div>
                {/* <Button
                  // text="withdraw"
                  variant="contained"
                  onClick={(e) => handleWithdraw(c.campaignHash)}
                >
                  withdraw Funds
                </Button> */}
                <CommonButton
                  text="withdraw Funds"
                  variant="contained"
                  onClick={(e) => handleWithdraw(c.campaignHash)}
                />
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
