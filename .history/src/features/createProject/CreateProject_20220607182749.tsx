/** @format */

import React from "react";

//Third party
import { Formik, Form, useField, FieldProps, FieldHookConfig } from "formik";
import * as Yup from "yup";

//App
import TextInput from "../../components/TextInput/TextInput";
import Textarea from "../../components/Textarea/Textarea";

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
        <Form className=""bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <Textarea
            name="proposal"
            label="proposal"
            id="kdjflkd"
            className=""
            placeholder=""
          />
          <TextInput
            name="proposal"
            label="proposal"
            className=""
            placeholder=""
          />
          <TextInput
            name="proposal"
            label="proposal"
            className=""
            placeholder=""
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateProject;
