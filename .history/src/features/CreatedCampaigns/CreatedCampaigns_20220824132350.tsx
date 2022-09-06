/** @format */

import React, { useEffect, useState } from "react";

//Third party
import { useMoralis } from "react-moralis";
//App
import { contractAddresses, abi } from "../../constants";
import useGetCampaigns from "../../hooks/useGetCampaigns";
import { getCampaignIdes } from "../../helpers/web3Helpers";
import CommonTitle from "../../components/CommonTitle/CommonTitle"
import ReactMarkdown from "react-markdown";

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
      setIds(null)
      return
    };
    const getId = async () => {
      const ids = await getCampaignIdes(contract, account, null, false);
      ids && setIds(ids);
    };
    getId();
  }, [account]);
  return (
    <div>
      {campaigns && campaigns.map((c) => <div>
        <CommonTitle text={c.campaignTitle}/>
        <ReactMarkdown>
          {c.campaignDescription}
        </ReactMarkdown>
        <div>
      <Card className="flex  flex-row-reverse  justify-between">
        <Box className="grow" sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {title}{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {text}{" "}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="bookmark">
              <BookmarkAddOutlined fontSize="small" />
            </IconButton>
            <IconButton aria-label="Like">
              <ThumbUpOffAltIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="dislike">
              <ThumbDownOffAltIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          // TODO: style this to be resize dynamic properly
          image={imgSrc}
          alt="Live from space album cover"
        />
      </Card>
    </div>

      </div>)}
    </div>
  );
};

export default CreatedCampaigns;