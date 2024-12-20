"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField";
import { CloudUpload } from "lucide-react";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, "Username must be at most 20 characters long!"),

  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 3 characters long!" }),
  firstName: z.string().min(3, { message: "First name is required!" }),
  lastName: z.string().min(3, { message: "Last name is required!" }),
  phone: z.string().min(9, { message: "Phone is required!" }),
  address: z.string().min(7, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female", "other"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required!" }),
});

type Inputs = z.infer<typeof schema>;

const StudentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form action="" className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-2xl font-semibold">{type === "create" ? "Create" : "Update"} student</h1>
      <span className="text-lg font-medium text-gray-400">
        Authentication information
      </span>

      <div className="flex justify-between flex-wrap gap-4 p-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />

        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>

      <span className="text-lg font-medium text-gray-400">
        Personal information
      </span>
      <div className="flex justify-between flex-wrap gap-4 p-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors?.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors?.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors?.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors?.birthday}
          type="date"
        />
      </div>

       <div className="flex justify-between items-center flex-wrap gap-4 p-4">
        <div className="flex flex-col gap-2 w-full md:w-1/4 items-start">
          <label
            htmlFor="sex"
            className="text-sm text-gray-500 dark:text-gray-300"
          >
            Sex
          </label>
          <select
            name="sex"
            id="sex"
            {...register("sex")}
            defaultValue={data?.sex}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full dark:ring-gray-600 dark:bg-gray-800 dark:text-gray-200"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400 dark:text-red-500">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>

      <div className="flex flex-col gap-2 w-full md:w-1/4 items-start lg:mt-3">
        <label htmlFor="img" className="text-sm text-gray-500 flex items-center gap-2 cursor-pointer">
        <CloudUpload width={28} height={28}/>
        <span>Upload a photo</span>
        </label>
        <input type="file" {...register("img")}  name="img" id="img" className="hidden"/>
        {errors.img?.message && (
          <p className="text-xs text-red-400">
            {errors.img.message.toString()}
          </p>
        )}
      </div>
      </div>

      <button
        type="submit"
        className="bg-blue-400 text-lg text-white p-2 rounded-md"
      >
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;
