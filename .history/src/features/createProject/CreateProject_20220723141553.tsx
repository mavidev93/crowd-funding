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

  //States
  const [image, setImage] = useState<any>(null);
  const [preview,setPreview] = useState<null|string>(null)
  const { chainId } = useMoralis();
  console.log(chainId);

  const { Moralis, authenticate, isAuthenticated, user } = useMoralis();

  const { error, isUploading, moralisFile, saveFile } = useMoralisFile();

  //handlers
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

  const handlePhotoInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.files) {
      console.log(event.currentTarget.files[0]);
      setImage(event.currentTarget.files[0]);
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
          fundAmount: "",
          walletAddress: "",
        }}
        validationSchema={Yup.object({
          proposal: Yup.string().required("Required!"),
          creator: Yup.string().required("Required!"),
        })}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-6 mt-4">
          <Textarea
            name="proposal"
            label="proposal"
            id="kdjflkd"
            placeholder=""
          />

          <TextInput
            name="creator"
            label="creator"
            className=""
            placeholder=""
          />
          <div className="mb-4">
            <label
              htmlFor="cryptos"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Select an option
            </label>
            <Field
              as="select"
              name="cryptos"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="red">ETH</option>
              <option value="green">USDT</option>
              <option value="blue">DAI</option>
            </Field>
            <input
              id="photo"
              name="photo"
              type="file"
              onChange={handlePhotoInputChange}
            />
          </div>
          <TextInput
            name="fundAmount"
            label="fund amount"
            className=""
            placeholder=""
          />
          <TextInput
            name="walletAddress"
            label="wallet address"
            className=""
            placeholder=""
          />

          <CommonButton
            text="submit"
            variant="contained"
            className="bg-primary-color"
          />
          <button onClick={test}> print ipfs data</button>
        </Form>

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
  //Effects
  useEffect(()=>{
    if (!image) {
      setPreview(null)
      return
  }

  const objectUrl = URL.createObjectURL(image)
  setPreview(objectUrl)

  // free memory when ever this component is unmounted
  return () => URL.revokeObjectURL(objectUrl)
  //Return
  return (
    <div className="mx-3 md:w-3/4 md:mx-auto m-2">
      {isAuthenticated ? createForm() : connectPlease()}
      {image && <img src={image} alt="project image" />}
    </div>
  );
};

export default CreateProject;