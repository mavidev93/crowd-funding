import {useField,FieldHookConfig} from 'formik'

interface TextInputProps{
    // config : FieldHookConfig<T>;
    label: string;
    name: string;
    className:string;
    placeholder:string
  }

  const TextInput = (props: TextInputProps) => {
    const [field, meta] = useField(props);
    return (
      <div className={"mb-4 " + props.className}>
        {props.label && <label htmlFor={props.name} className="">{props.label}</label>}
        <div className="card-backdrop">
          <input {...field} placeholder={props.placeholder} />
        </div>
      </div>
    );
  };

  export default TextInput