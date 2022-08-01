/** @format */

import { useField } from "formik";
import CustomError from "../CustomError/CustomError";
interface TextInputProps {
  // config : FieldHookConfig<T>;
  label: string;
  name: string;
  className?: string;
  placeholder: string;
  validate?: (value: any) => string | undefined;
}

const TextInput = ({
  label,
  name,
  className,
  placeholder,
  validate,
}: TextInputProps) => {
  const [field, meta, helper] = useField({
    label,
    name,
    className,
    placeholder,
    validate,
  });

  return (
    <div className={"my-2 " + className}>
      {label && (
        <label
          htmlFor={name}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {label}
        </label>
      )}
      <div className="">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...field}
          {...props}
        />
        <CustomError name={name} />
      </div>
    </div>
  );
};

export default TextInput;
