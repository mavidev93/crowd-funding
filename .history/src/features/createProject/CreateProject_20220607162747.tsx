/** @format */

import React from "react";

//Third party
import { Formik, Form, useField, FieldProps, FieldHookConfig } from "formik";
import * as Yup from "yup";

//App
import TextInput from "../../components/TextInput/TextInput";

// const MySelect = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <div>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <select {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

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
        <Form>
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
