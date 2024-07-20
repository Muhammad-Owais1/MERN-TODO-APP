import React from "react";
import getTime from "../helper/getTime";

export default function Timer() {
  const { hour, minute, day, date, month, year } = getTime();
  return (
    <div className="flex flex-col ">
      <h1 className='font-["Montserrat"] text-6xl font-semibold'>{`${hour}:${minute},`}</h1>
      <h2 className='font-["Montserrat"] text-[12px] mt-2 ml-5 '>{`${day}, ${date} / ${month} / ${year}`}</h2>
    </div>
  );
}
