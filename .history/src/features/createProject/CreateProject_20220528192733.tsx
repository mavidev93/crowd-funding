import React from 'react'

import { Formik, Form, useField, FieldProps,FieldHookConfig } from 'formik';
import * as Yup from 'yup';


import { FieldHookConfig, useField } from "formik";

interface ComponentProps<T> {
  config : FieldHookConfig<T>;
  label: string;
  name: string;
}

const MyTextInput = (props: ComponentProps<string>) => {
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



export default CreateProject