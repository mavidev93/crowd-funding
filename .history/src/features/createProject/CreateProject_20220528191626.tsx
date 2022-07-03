import React from 'react'

import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';


interface MyTextInput{
  labe:string
}

const MyTextInput = ({ label, ...props }:) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

type Props = {}


const CreateProject = (props: Props) => {
  return (
    <div>CreateProject</div>
  )
}

export default CreateProject