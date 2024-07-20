import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TasksList from "../components/TasksList";
import getTime from "../helper/getTime";

export default function TaskPage() {
  const [data, setData] = useState({});
  const user = useSelector((state) => state.auth.user);
  const { month, date, year, week } = getTime();

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const res = await fetch(
          `https://mern-todo-app-owais.vercel.app/api/task/gettasks?id=${user._id}`,
          {
            method: "GET",
          }
        );
        const data = await res.json();
        console.log(data.tasks);
        setData(data);
      };
      fetchData();
    }
  }, [user]);

  console.log(week);

  const filteredTasks =
    data.tasks?.filter(
      (task) => task.date == date && task.month == month && task.year == year
    ) || [];

  return (
    <div className="page pt-20">
      <div className="m-2 sm:ml-20 mb-10 flex flex-wrap gap-10 items-center justify-between w-[65%]">
        <div>
          <h1 className="font-['Montserrat'] font-bold text-[20px] text-gray-800">{`${month} ${date}`}</h1>
          <p className="font-['Montserrat']">
            {filteredTasks.length} tasks today
          </p>
        </div>
        <div className="flex flex-col sm:w-auto w-[90vw]">
          <div className="flex items-center justify-around mb-5">
            {week[0].map((item, index) => (
              <a
                href={`#${week[1][index]}`}
                key={index}
                className="flex flex-col items-center justify-center gap-1 h-20 w-10 bg-transparent hover:bg-orange-600 text-gray-400 hover:text-white  rounded-full"
              >
                <p className="font-bold font-['Montserrat'] ">{item}</p>
                <p className="text-[8px] font-['Montserrat'] uppercase">
                  {week[1][index].slice(0, 3)}
                </p>
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-orange-600"></div>
            <div className="h-[2px] w-96 bg-orange-600"></div>
            <div className="h-2 w-2 rounded-full bg-orange-600"></div>
          </div>
        </div>
      </div>
      <TasksList data={data} />
    </div>
  );
}
