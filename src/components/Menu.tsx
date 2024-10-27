import Link from "next/link";
import { role } from "../lib/data";
import { 
  Home, 
  User, 
  Users, 
  BookOpen, 
  Briefcase, 
  Clipboard, 
  FileText, 
  Calendar, 
  MessageSquare, 
  Megaphone, 
  Settings, 
  LogOut 
} from "lucide-react";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <Home size={20} />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Users size={20} />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <Users size={20} />,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <User size={20} />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <BookOpen size={20} />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <Briefcase size={20} />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <Clipboard size={20} />,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FileText size={20} />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Clipboard size={20} />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FileText size={20} />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Users size={20} />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Calendar size={20} />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MessageSquare size={20} />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Megaphone size={20} />,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <User size={20} />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Settings size={20} />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <LogOut size={20} />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm bg-white dark:bg-gray-900 min-h-screen text-gray-700 dark:text-gray-200">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-400 dark:text-gray-500 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center shadow-sm justify-center lg:justify-start gap-4 text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition duration-300"
                >
                  <div className="text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition duration-300">
                    {item.icon}
                  </div>
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
