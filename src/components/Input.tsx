import { ChangeEvent } from "react";


interface Input {
  type: "text" | "number" | "email" | "password";
  label?: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = ({
  type = "text",
  label,
  value,
  name,
  placeholder,
  error,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-slate-700 font-medium text-base mb-1.5"
      >
        {label}
      </label>
      <input
        className={`border text-slate-700 border-gray-300 shadow-sm mx-auto rounded-lg w-full py-3 px-3 mb-3  placeholder-gray-500 text-base outline-blue-300 ${
          error && 'ring-2 ring-red-200'
        }`}
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && (
        <span role="alert" className="block text-red-600 text-sm ml-3 mt-1">
          {error}
        </span>
      )}
    </div>
    );
  };
  
  export default Input;