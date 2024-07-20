import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function AboutTaskPage() {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fecthData = async (taskID) => {
      const response = await fetch(
        `http://localhost:3000/api/task/gettask?taskID=${taskID}`
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fecthData(location.pathname.split("/tasks/task/")[1]);
  }, []);

  return (
    <>
      <div className=" px-2 pb-20 sm:p-20 flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <h1 className="font-['Montserrat'] font-bold capitalize text-[20px]">
              {data?.user?.email.split("@")[0]}
            </h1>
            <h1 className="font-['Montserrat'] text-[20px]">added</h1>
          </div>
          <div className="bg-red-400 sm:border-2 sm:bg-red-100 sm:border-red-400 overflow-hidden p-2 sm:p-10 text-white sm:text-black rounded-lg">
            <p className="font-['Montserrat']">{data?.task}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <h1 className="font-['Montserrat'] capitalize text-[20px]">At</h1>
          </div>
          <div className="bg-green-400 sm:border-2 sm:bg-green-100 sm:border-green-400 overflow-hidden p-2 sm:p-10 text-white sm:text-black rounded-lg">
            <p className="font-['Montserrat']">{`${data?.date} / ${data?.month} / ${data?.year}, ${data?.day} at ${data.time}`}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <h1 className="font-['Montserrat'] capitalize text-[20px]">
              Status
            </h1>
          </div>
          <div className="bg-orange-400 sm:border-2 sm:bg-orange-100 sm:border-orange-400 overflow-hidden p-2 sm:p-10 text-white sm:text-black rounded-lg">
            <p className="font-['Montserrat'] capitalize">{data?.status}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <h1 className="font-['Montserrat'] capitalize text-[20px]">
              Description
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-blue-400 sm:border-2 sm:bg-blue-100 sm:border-blue-400  overflow-hidden p-2 sm:p-10 text-white sm:text-black rounded-lg ">
              <p className="font-['Montserrat'] capitalize max-w-[80vw] text-wrap overflow-hidden ">
                {data?.description}
              </p>
            </div>
            {!data?.description && <p className="">No Description</p>}
          </div>
        </div>
        <div className="flex">
          <button className='h-10 w-24 border-2 border-black block rounded-3xl font-["Montserrat"] text-xs'>
            <Link
              to={`/tasks/task/edit/${data?._id}`}
              className="h-full w-full flex items-center justify-center"
            >
              Edit
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
