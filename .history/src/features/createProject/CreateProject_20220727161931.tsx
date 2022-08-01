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
  Field,
} from "formik";
import * as Yup from "yup";
import { create } from "ipfs-http-client";
import axios from "axios";
import { useMoralis, useMoralisFile } from "react-moralis";

//App
import TextInput from "../../components/TextInput/TextInput";
import Textarea from "../../components/Textarea/Textarea";
import CommonButton from "../../components/CommonButton/CommonButton";
import { ConnectButton, useNotification } from "web3uikit";
import ImageCrop from "../../components/ImageCrop/ImageCrop";

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
          fundAmount: "",
          walletAddress: "",
        }}
        validationSchema={Yup.object({
          proposal: Yup.string().required("Required!"),
          creator: Yup.string().required("Required!"),
          fundAmount:Yup.number().required("Required!")
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValidating }) => (
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
              <div>
                <label htmlFor="photo">Project Image for Header</label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  onChange={handlePhotoInputChange}
                />
                {imgSrc && (
                  <ImageCrop
                    imgSrc={imgSrc}
                    aspect={3 / 1}
                    setCanvas={setImgCanvas}
                  />
                )}
              </div>
              <div>
                <label htmlFor="photo">Project Avatar Square Image</label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  onChange={handleAvatarImgInputChange}
                />
                {imgSrcAvatar && (
                  <ImageCrop
                    imgSrc={imgSrcAvatar}
                    aspect={1 / 1}
                    unit="px"
                    initialAspectWidth={250}
                    setCanvas={setImgAvatarCanvas}
                  />
                )}
              </div>
            </div>
            <TextInput
              name="fundAmount"
              id=""
              label="fund amount"
              className=""
              placeholder=""
            />
            <Field
              name="walletAddress"
              placeholder=""
              label="wallet address"
              validate={validateEthereumAddress}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {/* {console.log(`errors : ${error}`)} */}
            {errors.walletAddress && touched.walletAddress && (
              <div>{errors.walletAddress}</div>
            )}

            <CommonButton
              text="submit"
              variant="contained"
              className="bg-primary-color"
              type="submit"
            />
          </Form>
        )}
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
