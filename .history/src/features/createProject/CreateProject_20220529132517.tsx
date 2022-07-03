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
      proposal:Yup.string().required("Required!")
      creator:Yup
    })}
    >

    </Formik>
  </div>)
}


export default CreateProject