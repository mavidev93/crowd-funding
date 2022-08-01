import {useField,FieldHookConfig} from 'formik'

interface TextInputProps{
    // config : FieldHookConfig<T>;
    label: string;
    name: string;
    className?:string;
    placeholder:string
    validate?:(value: any)=> string | undefined
  }

  const TextInput = (props: TextInputProps) => {
    const [field, meta,helper] = useField(props);

    return (
      <div className={"mb-4 " + props.className}>
        {props.label && <label htmlFor={props.name} className="block text-gray-700 text-sm font-bold mb-2">{props.label}</label>}
        <div className="">
          <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} placeholder={props.placeholder} />
        </div>
      </div>
    );
  };

  export default TextInput