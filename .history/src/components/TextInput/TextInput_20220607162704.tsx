import {useField,FieldHookConfig} from 'formik'

interface TextInputProps<T> {
    // config : FieldHookConfig<T>;
    label: string;
    name: string;
  }

  const TextInput = (props: TextInputProps<string>) => {
    const [field, meta] = useField(props);
    return (
      <div className={"text-input " + props.className}>
        {props.label && <label htmlFor={props.name} className="text-input-label">{props.label}</label>}
        <div className="card-backdrop">
          <input {...field} placeholder={props.placeholder} />
        </div>
      </div>
    );
  };

  export default TextInput