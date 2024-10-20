import TableSearch from "@/src/components/TableSearch";
import Image from "next/image";

const TeacherListPage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
              <Image src="/filter.png" width={14} height={14} alt="" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
              <Image src="/sort.png" width={14} height={14} alt="" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
              <Image src="/plus.png" width={14} height={14} alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <div></div>
      {/* PAGINATION */}
      <div></div>
    </div>
  );
};

export default TeacherListPage;
