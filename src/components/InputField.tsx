import type { FC, InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";
import { string } from "zod";

interface InputFieldProps {
  label: string;
  type?: string; // text
  register: any;
  name: string;
  defaultValue: string;
  error?: FieldError;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const InputField: FC<InputFieldProps> = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4 items-start">
      <label htmlFor={label} className="text-sm text-gray-500">
        {label}       
      </label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400">
          {error.message.toString()}
        </p>
      )}
    </div>
  );
};

export default InputField;
