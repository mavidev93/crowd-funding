interface TextInputProps<T> {
    config : FieldHookConfig<T>;
    label: string;
    name: string;
  }

  const textInput = (props: TextInputProps<string>) => {
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