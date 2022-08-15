/** @format */

//React
import * as React from "react";

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

//App
import TextInput from "../TextInput/TextInput";
import CommonButton from "../CommonButton/CommonButton";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
  fund: any;
  isCampaignOpen: boolean | undefined;
};

export default function FundModal({ fund, isCampaignOpen }: Props) {
  const [open, setOpen] = React.useState(false);
  const [fundVal, setFundVal] = React.useState<string>("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFundValChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFundVal(event.currentTarget.value);
  };

  const handleFund = async (e: any, fundVal: string) => {
    console.log(fundVal);
    const res = await fund(fundVal);
    console.log(res);
  };

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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              Amount:
            </InputLabel>
            <BootstrapInput
              id="bootstrap-input"
              type="number"
              value={fundVal}
              onChange={handleFundValChange}
            />
            <CommonButton
              text="Fund"
              disabled={!isCampaignOpen}
              variant="contained"
              //   className="bg-primary-color my-3 bg-red-700"
              sx={{ backgroundColor: "#148aff !important", margin: "12px" }}
              onClick={(e) => handleFund(e, fundVal)}
            />
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
