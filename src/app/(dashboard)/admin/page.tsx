import AttendanceChart from "../../../components/AttendanceChart";
import CountChart from "../../../components/CountChart";
import UserCard from "../../../components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="stuffs" />
        </div>
        {/* MIDDLE  CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart/>
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div>a</div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">l</div>
    </div>
  );
};

export default AdminPage;