/** @format */

import { useState,useEffect } from "react";

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
import axios from 'axios'
//App
import TextInput from "../../components/TextInput/TextInput";
import Textarea from "../../components/Textarea/Textarea";
import CommonButton from "../../components/CommonButton/CommonButton";

const client = create({url: "https://ipfs.infura.io:5001/api/v0"});

const CreateProject = () => {
  const [data, setData] = useState("salam abdolreza");


  //Effects
  useEffect(()=>{
    getData()
    async function getData(){
      const data = await axios.get("https://bafybeidbs56jy2inyi2pgjcqx5y7sohp7gqnrbqwaqjhvxruwjrmaxle6y.ipfs.infura-ipfs.io"))
      console.log(`data is ${JSON.parse(data) }`)
    }
  },[])
  return (
    <div className="mx-3 md:w-3/4 md:mx-auto">
      <Formik
        initialValues={{
          proposal: "",
          creator: "",
          fundAmount: "",
          walletAddress: "",
        }}
        validationSchema={Yup.object({
          proposal: Yup.string().required("Required!"),
          creator: Yup.string().required("Required!"),
        })}
        onSubmit={async(value, {}) => {
          console.log(value);
         const jsonValue = JSON.stringify(value)
          try {
            const created = await client.add(jsonValue);
            const url = `https://ipfs.infura.io/ipfs/${created.path}`;
            console.log(url)
            // setUrlArr((prev) => [...prev, url]);
          } catch (error: any) {
            console.log(error.message);
          }
        }}
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
        </Form>
      </Formik>
    </div>
  );
};

export default CreateProject;
