"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "total",
    count: 100,
    fill: "white",
  },
  {
    name: "girls",
    count: 60,
    fill: "#fffb00",
  },
  {
    name: "boys",
    count: 40,
    fill: "#83a6ed",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Students</h1>
        <Image src="/moreDark.png" alt="more dark" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-blue-400 dark:bg-blue-600 rounded-full" />
          <h1 className="font-bold text-gray-800 dark:text-gray-200">123.50</h1>
          <h2 className="text-xs text-gray-400 dark:text-gray-500">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow-400 dark:bg-yellow-400 rounded-full" />
          <h1 className="font-bold text-gray-800 dark:text-gray-200">134.980</h1>
          <h2 className="text-xs text-gray-400 dark:text-gray-500">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
