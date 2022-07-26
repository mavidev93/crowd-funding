//Third Party
import { useField } from "formik";

interface TextInputProps{
    // config : FieldHookConfig<T>;
    label: string;
    name: string;
    className:string;
    placeholder:string
  }

const MyTextArea = (props:) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
  };