/** @format */
import { useState, useEffect } from "react";

//Third party
import { Formik, Form, Field } from "formik";
import { useMoralis, useMoralisFile, useWeb3Contract } from "react-moralis";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useNavigate } from "react-router-dom";

//App
import CommonButton from "../../components/CommonButton/CommonButton";
import { useNotification } from "web3uikit";
import ImageCrop from "../../components/ImageCrop/ImageCrop";
import TextInput from "../../components/TextInput/TextInput";
import CustomLinerProgress from "../../components/LinerProgress/LinerProgress/CustomLinerProgress";
import ConnectPlease from "../../components/ConnectPlease/ConnectPlease";
import { makeStorageClient } from "../../helpers/web3Storage";
import useContract from "../../hooks/useContract";
import { initialValues, validationSchema } from "./createCampaign.static";
import { validateEthereumAddress } from "./createCampaign.utils";

type resultIpfsPromise = {
  path: string;
};

//Component
const CreateCampaign = () => {
  //States
  const [imgSrc, setImgSrc] = useState<null | string>(null);
  const [imgSrcAvatar, setImgSrcAvatar] = useState<null | string>(null);
  const [imgCanvas, setImgCanvas] = useState<HTMLCanvasElement | null>(null);
  const [imgAvatarCanvas, setImgAvatarCanvas] =
    useState<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editorVal, setEditorVal] = useState<string>("");

  //Hooks
  // const {  abi, crowdFundAddress } = useContract();
  const contractData = useContract();

  const { isWeb3Enabled, Moralis } = useMoralis();
  const navigate = useNavigate();
  const dispatchNotification = useNotification();
  const ethers = Moralis.web3Library;
  const {
    data,
    error,
    runContractFunction: createCampaign,
    isFetching,
  } = useWeb3Contract({
    abi: contractData?.abi || undefined,
    contractAddress:
      contractData?.crowdFundAddress ||
      "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    functionName: "createCampaign",
  });

  const client = makeStorageClient();

  function makeFileObjects(obj: object, objName: string) {
    const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
    const files = [new File([blob], objName)];
    return files;
  }

  async function storeFiles(files: any) {
    const cid = await client.put(files);

    return cid;
  }

  //Helper function
  async function sendCanvasToIpfs(
    canvas: HTMLCanvasElement,
    canvasName: string
  ): Promise<resultIpfsPromise | undefined> {
    try {
      const blob: Blob | null = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/png")
      );
      const fileName = "header-image.png";
      const file = new File([blob!], fileName);
      const cid = await storeFiles([file]);
      const path = `${cid}/${fileName}`;
      return { path };
    } catch {
      dispatchNotification({
        message: `sending ${canvasName} failed!`,
        type: "error",
        position: "topR",
      });
      return;
    }
  }

  //Handlers
  const handleSubmit = async (values: any, actions: any) => {
    try {
      if (!editorVal) throw "campaign description is empty";
    } catch (e) {
      typeof e === "string" &&
        dispatchNotification({ message: e, type: "error", position: "topR" });
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    let headerImgPath, avatarImgPath;
    if (imgCanvas) {
      const result = await sendCanvasToIpfs(imgCanvas, "header image");
      if (result) {
        ({ path: headerImgPath } = result);
      }
      if (imgAvatarCanvas) {
        const result = await sendCanvasToIpfs(imgAvatarCanvas, "avatar image");
        if (result) {
          ({ path: avatarImgPath } = result);
        }
      }
    }

    const {
      campaignTitle,
      walletAddress,
      projectImgUrl,
      projectAvatarUrl,
      goalAmount,
      fundingPeriodInDays,
    } = values;

    const campaignObj = {
      campaignTitle,
      campaignDescription: editorVal,
      walletAddress,
      projectImgUrl,
      projectAvatarUrl,
      goalAmount,
      fundingPeriodInDays,
      headerImgPath,
      avatarImgPath,
    };

    try {
      const files = makeFileObjects(campaignObj, campaignTitle);
      const cid = await storeFiles(files);

      const path = `${cid}/${campaignTitle}`;

      const handleSuccess = async (tx: any) => {
        actions.resetForm();
        await tx.wait(1);

        dispatchNotification({
          message: "Project Created Successfully!",
          type: "success",
          position: "topR",
        });
        navigate(`/campaigns/${campaignTitle}`, { state: { hash: path } });
      };

      const handleError = (error: any) => {
        dispatchNotification({
          message: "Project Creation Failed",
          type: "error",
          position: "topR",
        });
      };

      await createCampaign({
        onSuccess(tx: any) {
          handleSuccess(tx);
        },
        onError(error) {
          handleError(error);
        },
        params: {
          params: {
            hash: path,
            _goalAmount:  goalAmount ,
            _fundingPeriodInDays: fundingPeriodInDays,
          },
        },
      });
    } catch (e) {
      dispatchNotification({
        message: "Project Creation Failed",
        type: "error",
        position: "topR",
      });
    } finally {
      setIsLoading(false);
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
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-6 mt-4">
            <TextInput
              name="campaignTitle"
              label="Proposal Title"
              placeholder="Title"
            />
            <TextInput
              name="walletAddress"
              placeholder=""
              label="Creator Wallet Address"
              validate={validateEthereumAddress}
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
              <TextInput name="goalAmount" label="Fund Amount" placeholder="" />
              <TextInput
                name="fundingPeriodInDays"
                label="Funding Period Days"
                placeholder=""
              />
              <label className="block text-gray-700 text-sm font-bold mb-2  capitalize">
                campaign description
              </label>
              <SimpleMDE
                value={editorVal}
                onChange={(value: string) => setEditorVal(value)}
              />

              <div>
                <label
                  htmlFor="photo"
                  className="block  text-sm font-medium text-gray-900 dark:text-gray-300 border-2 p-2 my-2"
                >
                  <FileUploadOutlinedIcon className="text-primary-color" />{" "}
                  Upload Project Image for Header
                </label>
                <input
                  id="photo"
                  name="photo
                "
                  type="file"
                  onChange={handlePhotoInputChange}
                  className=" hidden"
                  aria-describedby="file_input_help"
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
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300 border-2 p-2 my-2"
                >
                  <FileUploadOutlinedIcon className="text-primary-color" />
                  Upload Project Avatar Square Image
                </label>
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  onChange={handleAvatarImgInputChange}
                  className="hidden"
                  aria-describedby="file_input_help"
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
            <CommonButton
              text="submit"
              variant="contained"
              className="bg-primary-color"
              type="submit"
              disabled={isLoading}
            />
            {isLoading && <CustomLinerProgress />}{" "}
          </Form>
        </Formik>
      </div>
    );
  };

  return (
    <div className="mx-3 md:w-3/4 md:mx-auto m-2">
      <>
        {isWeb3Enabled ? createForm() : <ConnectPlease />}
        {!client &&
          dispatchNotification({
            message: "ipfs connection failed",
            type: "error",
            position: "topR",
          })}
      </>
    </div>
  );
};

export default CreateCampaign;
