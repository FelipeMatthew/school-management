import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";
import TableSearch from "@/src/components/TableSearch";
import { assignmentsData, role } from "@/src/lib/data";
import { Pencil, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type AssignmentType = {
  id: number;
  subject:string;
  class: string;
  teacher: string;
  dueDate: string;
};

// Responsividade não vai exibir algumas colunas
const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell"
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell"
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const AssignmentsListPage = () => {
  const renderRow = (item: AssignmentType) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-50 duration-300 cursor-pointer"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td >{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button
              type="button"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-300"
            >
              <Pencil  width={16} height={16} className="text-white" />
            </button>
          </Link>
          {role === "admin" && (
            <button
              type="button"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-300"
            >
              <Trash width={16} height={16} className="text-white" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Assignments Data</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100"
            >
              <Image src="/filter.png" width={14} height={14} alt="" />
            </button>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100"
            >
              <Image src="/sort.png" width={14} height={14} alt="" />
            </button>
            {role === "admin" && (
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100"
              >
                <Image src="/plus.png" width={14} height={14} alt="" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AssignmentsListPage;
