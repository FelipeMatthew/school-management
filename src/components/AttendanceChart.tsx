"use client";
import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 60,
  },
  {
    name: "Tue",
    present: 30,
    absent: 40,
  },
  {
    name: "Wed",
    present: 20,
    absent: 100,
  },
  {
    name: "Thu",
    present: 80,
    absent: 30,
  },
  {
    name: "Fri",
    present: 90,
    absent: 48,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 h-full shadow">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl text-gray-800 dark:text-gray-200">Attendance</h1>
        <Image src="/moreDark.png" alt="more dark" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" className="dark:stroke-gray-600" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#fffb00" // Amarelo
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar dataKey="absent" fill="#83a6ed" /> {/* Azul */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
