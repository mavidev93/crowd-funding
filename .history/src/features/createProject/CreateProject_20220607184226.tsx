/** @format */

import React from "react";

//Third party
import { Formik, Form, useField, FieldProps, FieldHookConfig } from "formik";
import * as Yup from "yup";

//App
import TextInput from "../../components/TextInput/TextInput";
import Textarea from "../../components/Textarea/Textarea";
import CommonButton from "../../components/CommonButton/CommonButton";
const CreateProject = () => {
  return (
    <div>
      <Formik
        initialValues={{ proposal: "", creator: "" }}
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
            name="money needed"
            label="money needed"
            className=""
            placeholder=""
          />
          <TextInput
            name="crypto"
            label="crypto"
            className=""
            placeholder=""
          />

          <CommonButton 
        </Form>
      </Formik>
    </div>
  );
};

export default CreateProject;
