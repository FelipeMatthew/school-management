import FormModal from "@/src/components/FormModal";
import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";
import TableSearch from "@/src/components/TableSearch";
import { lessonsData, role } from "@/src/lib/data";
import { ArrowDownWideNarrow, SlidersHorizontal } from "lucide-react";

type LessonType = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

// Responsividade não vai exibir algumas colunas
const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const LessonListPage = () => {
  const renderRow = (item: LessonType) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 dark:border-gray-700 dark:even:bg-gray-800 text-sm hover:bg-purple-50 duration-300 cursor-pointer dark:hover:bg-purple-800/30"
    >
      <td className="flex items-center gap-4 p-6">{item.subject}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="lesson" type="update" data={item} />
              <FormModal table="lesson" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white dark:bg-gray-950 p-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-md flex-1">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold text-gray-900 dark:text-gray-100">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-700"
            >
              <SlidersHorizontal width={14} height={14} className="text-black dark:text-white" />
            </button>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-700"
            >
              <ArrowDownWideNarrow width={14} height={14} className="text-black dark:text-white" />
            </button>
            {role === "admin" && (
              <FormModal table="lesson" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default LessonListPage;
