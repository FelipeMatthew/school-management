"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 2000, expense: 9800 },
  { name: "Apr", income: 2780, expense: 3908 },
  { name: "May", income: 1890, expense: 4800 },
  { name: "Jun", income: 2390, expense: 3800 },
  { name: "Jul", income: 3490, expense: 4300 },
  { name: "Aug", income: 3490, expense: 4300 },
  { name: "Sep", income: 3490, expense: 4300 },
  { name: "Oct", income: 3490, expense: 4300 },
  { name: "Nov", income: 3490, expense: 4300 },
  { name: "Dez", income: 3490, expense: 4300 },
];

const FinanceChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Finance</h1>
        <Image src="/moreDark.png" alt="more dark" width={20} height={20} />
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" className="dark:stroke-gray-600" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              tickMargin={20}
            />
            <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#CEEBFB"
              strokeWidth={5}
              dot={{ stroke: '#CEEBFB', strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#CFCEFF" // Cor clara para o modo claro
              strokeWidth={5}
              dot={{ stroke: '#CFCEFF', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
