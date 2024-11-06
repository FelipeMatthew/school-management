import FormModal from "@/src/components/FormModal";
import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";
import TableSearch from "@/src/components/TableSearch";
import { role, teachersData } from "@/src/lib/data";
import prisma from "@/src/lib/prisma";
import { ITEM_PER_PAGE } from "@/src/lib/settings";
import type { Class, Prisma, Subject, Teacher } from "@prisma/client";
import { ArrowDownWideNarrow, Eye, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TeacherType = Teacher & { subjects: Subject[] } & { classes: Class[] };

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  { header: "Classes", accessor: "classes", className: "hidden lg:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden xl:table-cell" },
  { header: "Actions", accessor: "actions" },
];

const renderRow = (item: TeacherType) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-50 duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700"
  >
    <td className="flex items-center gap-4 p-4">
      <Image
        src={item.img || "/avatar.png"}
        alt={item.name}
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col text-black dark:text-white">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {item?.email}
        </p>
      </div>
    </td>
    <td className="hidden md:table-cell text-black dark:text-white">
      {item.username}
    </td>
    <td className="hidden md:table-cell text-black dark:text-white">
      {item.subjects.map((subject) => subject.name).join(",")}
    </td>
    <td className="hidden lg:table-cell text-black dark:text-white">
      {item.classes.map((classItem) => classItem.name).join(", ")}
    </td>
    <td className="hidden lg:table-cell text-black dark:text-white">
      {item.phone}
    </td>
    <td className="hidden xl:table-cell text-black dark:text-white">
      {item.address}
    </td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/teachers/${item.id}`}>
          <button
            type="button"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-300 dark:bg-blue-700"
          >
            <Eye width={16} height={16} className="text-white" />
          </button>
        </Link>
        {role === "admin" && (
          <FormModal table="teacher" type="delete" id={item.id} />
        )}
      </div>
    </td>
  </tr>
);

const TeacherListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? Number.parseInt(page) : 1;

  // URL PARMS CONDITION

  const query: Prisma.TeacherWhereInput = {};

  // VAI PEGAR OS VALORES E TRATAR CADA UM DE UMA MENEIRA, TEMOS AQUI O CLASSID E O SEARCH POR ENQUANTO
  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "classId":
            query.lessons = {
              some: { classId: Number.parseInt(value) },
            };
            break
          case "search":
            query.name = {
              contains: value, mode: "insensitive" 
            }
        }
      }
    }
  }

  // Fetching data
  const [data, count] = await prisma.$transaction([
    prisma.teacher.findMany({
      where: query,
      include: {
        subjects: true,
        classes: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.teacher.count({ where: query }),
  ]);

  return (
    <div className="bg-white dark:bg-gray-950 p-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-md flex-1 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold text-black dark:text-white">
          All Teachers
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end rounded">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800"
            >
              <SlidersHorizontal
                width={14}
                height={14}
                className="text-black dark:text-white"
              />
            </button>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800"
            >
              <ArrowDownWideNarrow
                width={14}
                height={14}
                className="text-black dark:text-white"
              />
            </button>
            {role === "admin" && <FormModal type="create" table="teacher" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default TeacherListPage;
