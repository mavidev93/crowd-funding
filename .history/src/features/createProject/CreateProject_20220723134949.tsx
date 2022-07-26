/** @format */

import { useState, useEffect } from "react";

//Third party
import {
  Formik,
  Form,
  useField,
  FieldProps,
  FieldHookConfig,
  Field,
} from "formik";
import * as Yup from "yup";
import { create } from "ipfs-http-client";
import axios from "axios";
import { useMoralis, useMoralisFile } from "react-moralis";
// import Moralis from "moralis";

//App
import TextInput from "../../components/TextInput/TextInput";
import Textarea from "../../components/Textarea/Textarea";
import CommonButton from "../../components/CommonButton/CommonButton";
import { ConnectButton } from "web3uikit";

const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });

//Component
const CreateProject = () => {
  const [image, setImage] = useState<any>(null);
  const { chainId } = useMoralis();
  console.log(chainId);

  const { Moralis, authenticate, isAuthenticated, user } = useMoralis();

  const { error, isUploading, moralisFile, saveFile } = useMoralisFile();
  //handlers
  const login = async () => {
    if (!isAuthenticated) {
      await authenticate()
        .then(function (user) {
          console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const test = async () => {
    const data = (
      await axios.get(
        "https://ipfs.moralis.io:2053/ipfs/QmbdFKJ2ZnraqMxz7Fvd4B6CQQeV9mgo41aLQrgLm2pnrx"
      )
    ).data;
    console.log(`${data.key} is beutiful`);
  };

  const handleSubmit = async () => {
    const object = {
      key: "abdolreza",
    };
    const file = new Moralis.File("file.json", {
      base64: btoa(JSON.stringify(object)),
    });
    const response = await file.saveIPFS();
    console.log(response);
  };

  //Create JSX
  const CreateForm = ()=>
  //Effects
console.log(isAuthenticated)
console.log(user)
  return (
    <div className="mx-3 md:w-3/4 md:mx-auto m-2">
      {isAuthenticated? :<ConnectButton/>}

    </div>
  );
};

export default CreateProject;
