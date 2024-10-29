import Announcements from "@/src/components/Announcements";
import BigCalendar from "@/src/components/BigCalendar";
import FormModal from "@/src/components/FormModal";
import Performance from "@/src/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-purple-100 dark:bg-purple-900 rounded-xl py-6 px-4 flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Leonard Doe</h1>
                <FormModal table="teacher" type="update" data={{
                  id: 1,
                  username: "1234567890",
                  firstName: "Jon",
                  lastName: "Jon",
                  email: "john@doe.com",
                  password: "john@doe.com",
                  img:
                    "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  phone: "1234567890",
                  address: "123 Main St, Anytown, USA",
                  sex: "male",
                  bloodType: "a",
                  birthday: "2000-02-02"
                }} />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas aperiam facilis perspiciatis, sapiente eligendi possimus.
              </p>
              <div className="flex items-center justify-between gap-4 flex-wrap text-xs font-medium text-gray-600 dark:text-white">
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full xl:w-1/3">
                  <Image src="/blood.png" alt="" height={14} width={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full xl:w-1/3">
                  <Image src="/date.png" alt="" height={14} width={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full xl:w-1/3">
                  <Image src="/mail.png" alt="" height={14} width={14} />
                  <span>user.mail@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full xl:w-1/3">
                  <Image src="/phone.png" alt="" height={14} width={14} />
                  <span>(11) 99309-0285</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap shadow rounded-xl">
            <div className="bg-white dark:bg-gray-800 w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">90%</h1>
                <span className="text-sm text-gray-400 dark:text-gray-300">Attendance</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">2</h1>
                <span className="text-sm text-gray-400 dark:text-gray-300">Branches</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">6</h1>
                <span className="text-sm text-gray-400 dark:text-gray-300">Lessons</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">6</h1>
                <span className="text-sm text-gray-400 dark:text-gray-300">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white dark:bg-gray-800 rounded-md p-4 h-[800px]">
          <h1 className="text-gray-900 dark:text-gray-100">Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Shortcuts</h1>
          <div className="flex mt-4 gap-4 flex-wrap text-xs text-gray-500 dark:text-gray-300">
            <Link className="p-2 rounded-md bg-blue-50 dark:bg-blue-900/50" href="/">Teacher&apos;s Classes</Link>
            <Link className="p-2 rounded-md bg-yellow-50 dark:bg-green-900/50" href="/">Teacher&apos;s Students</Link>
            <Link className="p-2 rounded-md bg-purple-50 dark:bg-purple-900/50" href="/">Teacher&apos;s Lessons</Link>
            <Link className="p-2 rounded-md bg-red-50 dark:bg-red-900/50" href="/">Teacher&apos;s Exams</Link>
            <Link className="p-2 rounded-md bg-gray-100 dark:bg-gray-900/50" href="/">Teacher&apos;s Assignments</Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
