"use client";
import Image from "next/image";
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

const Performance = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md h-80 relative mt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Performance</h1>
        <Image src="/moreDark.png" alt="" height={16} width={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">9.2</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">of 10 max LTS</p>
      </div>
      <div className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center text-gray-900 dark:text-gray-100">
        1st Semester - 2nd Semester
      </div>
    </div>
  );
};

export default Performance;
