"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
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
    <div className="bg-white rounded-lg p-4 h-full shadow">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Attendance</h1>
        <Image src="/moreDark.png" alt="more dark" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}} />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#fffb00"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar dataKey="absent" fill="#83a6ed" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
