/** @format */

import React, { useEffect, useState } from "react";

//Third party
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BookmarkAddOutlined } from "@mui/icons-material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
//App
import { contractAddresses, abi } from "../../constants";
import useGetCampaigns from "../../hooks/useGetCampaigns";
import { getCampaignIdes } from "../../helpers/web3Helpers";
import CommonTitle from "../../components/CommonTitle/CommonTitle";
import ReactMarkdown from "react-markdown";
import placeHolder from "../../assets/images/images.png";

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

  //Effects
  useEffect(() => {
    if (!account) {
      setIds(null);
      return;
    }
    const getId = async () => {
      const ids = await getCampaignIdes(contract, account, null, false);
      ids && setIds(ids);
    };
    getId();
  }, [account]);
  return (
    <div className="m-3 md:w-3/5 md:mx-auto ">
      {campaigns &&
        campaigns.map((c) => (
          <div>
            {/* <CommonTitle text={c.campaignTitle}/> */}

            <div>
              <Card className="flex  justify-end  flex-row-reverse">
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
              <span>Funded Amount: </span> <span>{c.totalAmountFunded}</span>
            </p>
            <p className="text-lime-600 font-bold text-primary-color-dark order-5">
              <span>Goal Amount:</span> <span>{goalAmount}</span>
            </p>

            <p className="text-secondary-color 	">
              {" "}
              <AccessTimeIcon />{" "}
              {daysLeft >= 0 ? (
                <span>{`${daysLeft} Days Left`}</span>
              ) : (
                <span>Funding Time Finished</span>
              )}
            </p>
          </div>
          </div>

          </div>
        ))}
    </div>
  );
};

export default CreatedCampaigns;
