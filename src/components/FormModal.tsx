"use client";

import { Pencil, Plus, Trash, X } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

// Importa e trabalha de maneira dinamica
// Dynamic loading - Lazy loading - Apenas no lado do cliente
// const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
//   loading: () => <h1>Loading...</h1>
// })

const TeacherForm = dynamic(() => import("./forms/TeacherForm"))
const StudentForm = dynamic(() => import("./forms/StudentForm"))
const ParentForm = dynamic(() => import("./forms/ParentForm"))
const ClassForm = dynamic(() => import("./forms/ClassForm"))
const SubjectForm = dynamic(() => import("./forms/SubjectForm"))
const LessonForm = dynamic(() => import("./forms/LessonForm"))
const ExamForm = dynamic(() => import("./forms/ExamForm"))
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"))
const ResultForm = dynamic(() => import("./forms/ResultForm"))
const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"))
const EventForm = dynamic(() => import("./forms/EventForm"))
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"))


// Como se fosse map do go 
const forms: {[key: string]: (type: "create" | "update", data?: any) => JSX.Element}={
  teacher: (type, data) => <TeacherForm type={type} data={data}/>,
  student: (type, data) => <StudentForm type={type} data={data}/>,
  parent: (type, data) => <ParentForm type={type} data={data}/>,
  class: (type, data) => <ClassForm type={type} data={data}/>,
  subject: (type, data) => <SubjectForm type={type} data={data}/>,
  lesson: (type, data) => <LessonForm type={type} data={data}/>,
  exam: (type, data) => <ExamForm type={type} data={data}/>,
  assignment: (type, data) => <AssignmentForm type={type} data={data}/>,
  result: (type, data) => <ResultForm type={type} data={data}/>,
  attendance: (type, data) => <AttendanceForm type={type} data={data}/>,
  event: (type, data) => <EventForm type={type} data={data}/>,
  announcement: (type, data) => <AnnouncementForm type={type} data={data}/>,
}
 
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
      <Plus width={16} height={16} />
    ) : type === "update" ? (
      <Pencil width={16} height={16} className="text-white" />
    ) : (
      <Trash width={16} height={16} className="text-white" />
    );

  const [open, setOpen] = useState<boolean>(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4 items-start">
        <span className="text-center font-medium">
          All data will be lost. Are you sure want to delete this {table}?
        </span>
        <button
          type="button"
          className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center"
        >
          Delete
        </button>
      </form>
    ) : ((type === "create" || type === "update") && forms[table]) ? (
      forms[table](type,data)
    ) : ( "Form not found :(")
  };

  return (
    <>
      <button
        type="button"
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        {icon}
        {open && (
          <div
            id="modal-overlay"
            className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
          >
            <div
              className="bg-white p-4 shadow relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%]  2xl:w-[40%] rounded-md"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <Form />
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}
              >
                <X className="text-black" width={24} height={24} />
              </div>
            </div>
          </div>
        )}
      </button>
    </>
  );
};

export default FormModal;
