//Third Party
import { useField } from "formik";

interface TextareaProps{
    // config : FieldHookConfig<T>;
    label: string;
    name: string;
    className?:string;
    placeholder:string;
    id:string;
  }

const MyTextArea = (props:TextareaProps) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <textarea  {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
  };

  export default 