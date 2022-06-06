interface FormFieldProps {
  htmlFor: string;
  label: string;
  type?: string;
  // value: any;
  // onChange?: (...args: any) => any;
  name: string;
}

export function FormField({
  htmlFor,
  label,
  type = "text",
  name,
}: // value,
// onChange = () => {},
FormFieldProps) {
  return (
    <>
      <label htmlFor={htmlFor} className="text-blue-600 font-semibold">
        {label}
      </label>
      <input
        // onChange={onChange}
        type={type}
        id={htmlFor}
        className="w-full p-2 rounded-xl my-2"
        // value={value}
        name={name}
      />
    </>
  );
}
