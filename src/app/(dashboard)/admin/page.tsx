import Announcements from "@/src/components/Announcements";
import AttendanceChart from "@/src/components/AttendanceChart";
import CountChart from "@/src/components/CountChart";
import EventCalendar from "@/src/components/EventCalendar";
import FinanceChart from "@/src/components/FinanceChart";
import UserCard from "@/src/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row bg-white dark:bg-gray-900">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="stuffs" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px] bg-white dark:bg-gray-800 rounded-lg shadow">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px] bg-white dark:bg-gray-800 rounded-lg shadow">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <EventCalendar />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
