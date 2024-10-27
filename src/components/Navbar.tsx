"use client";

import Image from "next/image";
import { Megaphone, MessageCircleMore, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 dark:shadow-lg dark:shadow- transition-colors duration-300">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-4 rounded-lg shadow text-xs ring-[1.5px] ring-gray-400 dark:ring-gray-600 p-2 dark:bg-gray-800">
        <Image src="/search.png" alt="" height={14} width={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent outline-none dark:text-gray-300"
        />
      </div>
      {/* ICONS & USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 duration-300">
          <MessageCircleMore width={20} height={20} className="text-gray-600 dark:text-gray-300"/>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 duration-300">
        <Megaphone width={20} height={20}  className="text-gray-600 dark:text-gray-300"/>
          {/* NOTIFICATION ICON */}
          <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full flex items-center justify-center bg-purple-500 text-white text-[10px]">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium dark:text-gray-200">
            Felipe Matthew
          </span>
          <span className="text-[10px] text-gray-500 dark:text-gray-400 text-right">
            Admin
          </span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full cursor-pointer"
        />
        <div onClick={toggleTheme} className="relative cursor-pointer">
          <Sun
            width={20}
            height={20}
            className={`${
              isDarkMode ? "opacity-0 scale-0" : "opacity-100 scale-100"
            } transition-all duration-300 transform`}
          />
          <Moon
            width={20}
            height={20}
            className={`absolute top-0 left-0 ${
              isDarkMode ? "opacity-100 scale-100" : "opacity-0 scale-0"
            } transition-all duration-300 transform text-white`}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
