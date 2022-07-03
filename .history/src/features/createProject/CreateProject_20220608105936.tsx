/** @format */

import React from "react";

//Third party
import { Formik, Form, useField, FieldProps, FieldHookConfig ,Field} from "formik";
import * as Yup from "yup";

//App
import TextInput from "../../components/TextInput/TextInput";
import Textarea from "../../components/Textarea/Textarea";
import CommonButton from "../../components/CommonButton/CommonButton";
const CreateProject = () => {
  return (
    <div className="mx-3 md:w-3/4 md:mx-auto">
      <Formik
        initialValues={{ proposal: "", creator: "",fundAmount:"",walletAddress:"" }}
        validationSchema={Yup.object({
          proposal: Yup.string().required("Required!"),
          creator: Yup.string().required("Required!"),
        })}
        onSubmit={(value, {}) => {
          console.log(value);
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
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
  <Field as="select" name="color" className= >
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>

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


          <CommonButton text="submit" variant="contained" className="bg-primary-color"/>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateProject;
