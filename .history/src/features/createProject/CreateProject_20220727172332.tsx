/** @format */

import { useState, useEffect } from "react";

//Third party
import { Moralis } from "moralis";
import {
  Formik,
  Form,
  useField,
  FieldProps,
  FieldHookConfig,
  ErrorMessage,
  Field,
} from "formik";
import * as Yup from "yup";
import { create } from "ipfs-http-client";
import axios from "axios";
import { useMoralis, useMoralisFile } from "react-moralis";

//App
import Textarea from "../../components/Textarea/Textarea";
import CommonButton from "../../components/CommonButton/CommonButton";
import { ConnectButton, useNotification } from "web3uikit";
import ImageCrop from "../../components/ImageCrop/ImageCrop";
import CustomError from "../../components/CustomError/CustomError";
import TextInput from "../../components/TextInput/TextInput";
const ethers = Moralis.web3Library;

//validators
function validateEthereumAddress(value: any) {
  console.log(value);
  let error;
  if (!value) {
    error = "Required!";
  } else if (!ethers.utils.isAddress(value)) {
    error = "invalid address!";
  }
  return error;
}

//Component
const CreateProject = () => {
  //States
  const [imgSrc, setImgSrc] = useState<null | string>(null);
  const [imgSrcAvatar, setImgSrcAvatar] = useState<null | string>(null);
  const [imgCanvas, setImgCanvas] = useState<HTMLCanvasElement | null>(null);
  const [imgAvatarCanvas, setImgAvatarCanvas] =
    useState<HTMLCanvasElement | null>(null);
  //Hooks
  const { Moralis, authenticate, isAuthenticated, user } = useMoralis();
  // const { error, isUploading, moralisFile, saveFile } = useMoralisFile();
  const dispatchNotification = useNotification();

  //Handlers

  const handleSubmit = async () => {
    // console.log("submit form");
    // const object = {
    //   key: "abdolreza",
    // };
    // const file = new Moralis.File("file.json", {
    //   base64: btoa(JSON.stringify(object)),
    // });
    // const response = await file.saveIPFS();
    // console.log(response);
    const imgDataUrl = imgCanvas?.toDataURL();
    console.log(imgDataUrl);
    if (imgDataUrl) {
      const file = new Moralis.File("data url", { base64: imgDataUrl });
      const response = await file.saveIPFS();
      console.log(response);
    }
  };

  const handlePhotoInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.files) {
      const img = new Image();
      const objectUrl = URL.createObjectURL(event.currentTarget.files[0]);
      img.addEventListener("load", function () {
        if (img.naturalWidth >= 500) {
          setImgSrc(img.src);
        } else {
          dispatchNotification({
            position: "topR",
            type: "error",
            message: "incorrect image width",
          });
          setImgSrc(null);
          event.target.value = "";
        }
      });
      img.src = objectUrl;
    }
  };

  const handleAvatarImgInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.files) {
      const img = new Image();
      const objectUrl = URL.createObjectURL(event.currentTarget.files[0]);
      img.addEventListener("load", function () {
        if (img.naturalWidth >= 50) {
          setImgSrcAvatar(img.src);
        } else {
          dispatchNotification({
            position: "topR",
            type: "error",
            message: "incorrect image width",
          });
          setImgSrcAvatar(null);
          event.target.value = "";
        }
      });
      img.src = objectUrl;
    }
  };
  //Create JSX
  const createForm = () => {
    return (
      <Formik
        initialValues={{
          proposal: "",
          creator: "",
          photo: null,
          fundAmount: 0,
          walletAddress: "",
        }}
        validationSchema={Yup.object().shape({
          proposal: Yup.string().required("Required!"),
          creator: Yup.string().required("Required!"),
          fundAmount: Yup.number()
            .typeError("you must specify a number")
            .required("Required!"),
        })}
        onSubmit={handleSubmit}
      >
      </Formik>
    );
  };

  const connectPlease = () => {
    return (
      <div className="flex items-center font-bold">
        Please <ConnectButton /> to create new project.
      </div>
    );
  };

  // Effects

  //Return
  return (
    <div className="mx-3 md:w-3/4 md:mx-auto m-2">
      {isAuthenticated ? createForm() : connectPlease()}
    </div>
  );
};

export default CreateProject;
