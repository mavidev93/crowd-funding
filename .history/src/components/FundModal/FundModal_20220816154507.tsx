/** @format */

//React
import React, { useEffect } from "react";

//Third Party
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { alpha, styled } from "@mui/material/styles";

import { useMoralis, useMoralisFile, useWeb3Contract } from "react-moralis";
import { useNotification } from "web3uikit";

import { useLocation } from "react-router-dom";
//App
import TextInput from "../TextInput/TextInput";
import CommonButton from "../CommonButton/CommonButton";
import { contractAddresses, abi } from "../../constants";
import { getRecept } from "../../helpers/web3Helpers";
import { Console } from "console";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaceBetween",

  alignItems: "center",
  bgcolor: "background.paper",
  // border: "2px solid #000",

  boxShadow: 24,
  p: 3,
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

type Props = {
  campaignHash: string;
  isCampaignOpen: boolean | undefined;
};

interface contractAddressesInterface {
  [key: string]: string[];
}

//Component
export default function FundModal({ campaignHash, isCampaignOpen }: Props) {
  const [open, setOpen] = React.useState(false);
  const [fundVal, setFundVal] = React.useState<string>("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatchNotification = useNotification();
  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
  const location = useLocation();
  const addresses: contractAddressesInterface = contractAddresses;
  const chainId: string = parseInt(chainIdHex!).toString();
  const crowdFundAddress =
    chainId in contractAddresses ? addresses[chainId][0] : null;
  //Handlers
  const handleFundValChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFundVal(event.currentTarget.value);
  };

  const { runContractFunction: fundCampaign, error } = useWeb3Contract({
    abi: abi,
    contractAddress: crowdFundAddress!,
    functionName: "fundCampaign",
  });
  const handleFund = async (e: any, fundVal: string) => {
    await fundCampaign({
      async onSuccess(tx: any) {
        const txRecept = await getRecept(tx);

        // const [sender, campaignHash, txVal] = txRecept.events[0].topics;
        // console.log(campaignHash);
        //Successful Transaction
        if (txRecept.status === 1) {
          dispatchNotification({
            message: "Transaction successful!",
            position: "topR",
            type: "success",
          });
          setOpen(false);
          location.
        }
      },

      onError(error) {
        console.log(error.message);
        dispatchNotification({
          message: "Transaction reverted!",
          position: "topR",
          type: "error",
        });
      },
      params: {
        msgValue: Moralis.Units.ETH(fundVal),
        params: {
          _hash: campaignHash,
        },
      },
    });
  };
  //Effects

  return (
    <div>
      <CommonButton
        text="Fund Campaign"
        variant="contained"
        className="bg-primary-color my-3 "
        disabled={!isCampaignOpen}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-center"
            sx={{ textAlign: "center" }}
          >
            ETH
          </Typography>
          <FormControl
            variant="standard"
            sx={{
              dispay: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <InputLabel shrink htmlFor="Amount">
              Amount:
            </InputLabel>
            <BootstrapInput
              id="Amount"
              type="number"
              value={fundVal}
              onChange={handleFundValChange}
              inputProps={{ "aria-label": "" }}
            />
            <Typography sx={{ color: "red", fontSize: "10px" }} component="p">
              Minimum amount is 0.001 ETH
            </Typography>
            <CommonButton
              text="Fund &#8594;"
              disabled={!isCampaignOpen}
              variant="contained"
              //   className="bg-primary-color my-3 bg-red-700"
              sx={{ backgroundColor: "#148aff !important", margin: " 12px 0" }}
              onClick={(e) => handleFund(e, fundVal)}
            />
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
