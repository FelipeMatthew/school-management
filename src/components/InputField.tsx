import type { FC, InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

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
      <label htmlFor={label} className="text-sm text-gray-500 dark:text-gray-300">
        {label}       
      </label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 dark:ring-gray-600 p-2 rounded-md text-sm w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400 dark:text-red-300">
          {error.message.toString()}
        </p>
      )}
    </div>
  );
};

export default InputField;
