"use client";

import { Pencil, Plus, Trash } from "lucide-react";

// TODO: PROPS
const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-blue-100"
      : type === "update"
      ? "bg-blue-400"
      : "bg-purple-300";
  const icon =
    type === "create" ? (
      <Plus width={16} height={16}/>
    ) : type === "update" ? (
      <Pencil width={16} height={16} className="text-white"/>
    ) : (
      <Trash width={16} height={16} className="text-white"/>
    );

  return (
    <>
      <button
        type="button"
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
      >
        {icon}
      </button>
    </>
  );
};

export default FormModal;
