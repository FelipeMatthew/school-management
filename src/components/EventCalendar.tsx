"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetutr adpstrinsg elite",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetutr adpstrinsg elite",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
      <Calendar
        locale="en-US"
        onChange={onChange}
        value={value}
        className="dark:bg-gray-700"
      />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-6 text-gray-800 dark:text-gray-200">Events</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map(event => (
          <div key={event.id} className="p-5 rounded-md shadow border-2 border-gray-100 border-t-4 odd:border-t-blue-400 dark:odd:border-t-blue-400 even:border-t-purple-500 dark:even:border-t-purple-500 dark:border-gray-600 dark:bg-gray-700">
            <div className="flex items-center justify-between">
              <h1 className="text-gray-600 dark:text-gray-300 font-semibold">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-xs">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
