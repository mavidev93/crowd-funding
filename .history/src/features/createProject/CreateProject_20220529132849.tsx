import React from 'react'

import { Formik, Form, useField, FieldProps,FieldHookConfig } from 'formik';
import * as Yup from 'yup';



interface TextInputProps<T> {
  config : FieldHookConfig<T>;
  label: string;
  name: string;
}

const TextInput = (props: TextInputProps<string>) => {
  const [field, meta] = useField(props.config);
  return (
    <div className={"text-input " + props.config.className}>
      {props.label && <label htmlFor={props.name} className="text-input-label">{props.label}</label>}
      <div className="card-backdrop">
        <input {...field} placeholder={props.config.placeholder} />
      </div>
    </div>
  );
};

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


const CreateProject = ()=>{
  return (<div>
    <Formik
    initialValues={{proposal:"",creator:"",}}
    validationSchema={Yup.object({
      proposal:Yup.string().required("Required!"),
      creator:Yup.string().required("Required!")
    })}
    onSubmit={(value,{})=>{
      console.log(value)
    }}
    >

<Form>
           <MyTextInput
             label="First Name"
             name="firstName"
             type="text"
             placeholder="Jane"
           />

           <MyTextInput
             label="Last Name"
             name="lastName"
             type="text"
             placeholder="Doe"
           />

           <MyTextInput
             label="Email Address"
             name="email"
             type="email"
             placeholder="jane@formik.com"
           />

           <MySelect label="Job Type" name="jobType">
             <option value="">Select a job type</option>
             <option value="designer">Designer</option>
             <option value="development">Developer</option>
             <option value="product">Product Manager</option>
             <option value="other">Other</option>
           </MySelect>

           <MyCheckbox name="acceptedTerms">
             I accept the terms and conditions
           </MyCheckbox>

           <button type="submit">Submit</button>
         </Form>


    </Formik>
  </div>)
}


export default CreateProject