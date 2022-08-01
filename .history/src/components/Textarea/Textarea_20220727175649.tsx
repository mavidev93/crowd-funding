/** @format */

//Third Party
import { useField } from "formik";
import CustomError from '../CustomError/CustomError'
interface TextareaProps {
  // config : FieldHookConfig<T>;
  label: string;
  name: string;
  className?: string;
  placeholder: string;
  id: string;
}

const Textarea = (props: TextareaProps) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id || props.name}>{props.label}</label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-56"
        {...field}
        {...props}
      />
      <CustomError name={props.name}/>
    </>
  );
};

export default Textarea;
