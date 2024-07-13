import React from "react";
import { Link } from "react-router-dom";

export default function TasksList({ data }) {
  const bgColors = [
    "bg-orange-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-red-100",
    "bg-indigo-100",
  ];

  const borderColors = [
    "border-orange-400",
    "border-blue-400",
    "border-green-400",
    "border-purple-400",
    "border-red-400",
    "border-indigo-400",
  ];

  const textColors = [
    "bg-orange-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-red-400",
    "bg-indigo-400",
  ];

  const mobileBgColors = [
    "bg-orange-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-red-400",
    "bg-indigo-400",
  ];

  const tasks = data?.tasks || [];

  if (tasks.length === 0) {
    return (
      <div className="flex items-center justify-center flex-col gap-10">
        <h1 className='text-center font-["Montserrat"] font-semibold text-4xl'>
          Start Adding Your Tasks
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <button className='h-10 w-28 border-2 border-black rounded-3xl font-["Montserrat"] text-xs'>
            <Link
              className="h-full w-full flex justify-center items-center"
              to="/addtask"
            >
              Add Your Tasks
            </Link>
          </button>
        </div>
        <p>No Task Available.</p>
      </div>
    );
  }

  const reversedTasks = [...tasks].reverse();

  return (
    <>
      <div className="hidden sm:block pb-20">
        <div className="flex flex-col gap-5 pl-20">
          {reversedTasks.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-5 w-full"
            >
              <p className="font-['Montserrat'] w-20">{item.time}</p>
              <div
                className={`flex items-center justify-between px-[48px] w-[60vw] h-20 border-2 rounded-full ${
                  bgColors[index % bgColors.length]
                } ${borderColors[index % borderColors.length]}`}
              >
                <div
                  className={`font-['Montserrat'] ${
                    textColors[index % textColors.length]
                  } h-8 w-8 rounded-full flex items-center justify-center text-white`}
                >
                  {index + 1}
                </div>
                <h1 className="font-['Montserrat'] text-slate-800 font-bold truncate w-[30%] pl-2">
                  {item.task}
                </h1>
                <p className="font-['Montserrat'] text-gray-500 font-semibold text-xs w-[170px] text-nowrap">{`${item.date} / ${item.month} / ${item.year}, ${item.day}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" sm:hidden pl-2 flex flex-col gap-2">
        {reversedTasks.map((item, index) => (
          <div className="flex items-center" key={index}>
            <p className="text-gray-500 text-sm font-['Montserrat'] w-20">
              {item.time}
            </p>
            <div
              className={`${
                mobileBgColors[index % mobileBgColors.length]
              } h-9  w-[250px] rounded-full flex items-center justify-start px-4`}
            >
              <h1 className="font-['Montserrat'] truncate text-white text-sm">
                {item.task}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
