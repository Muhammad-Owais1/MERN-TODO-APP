import React from "react";
import { Link } from "react-router-dom";

export default function UserButtons() {
  return (
    <>
      <h1 className='text-center font-["Montserrat"] font-semibold text-4xl '>
        Login And Start Using
      </h1>
      <div className=" flex flex-wrap justify-center items-center gap-10">
        <button className='h-10 w-24 border-2 border-black rounded-3xl font-["Montserrat"] uppercase text-xs  '>
          <Link
            className="h-full w-full flex justify-center items-center"
            to="/user/login"
          >
            login
          </Link>
        </button>
        <button className='h-10 w-24 border-2 border-black rounded-3xl font-["Montserrat"] uppercase text-xs  '>
          <Link
            className="h-full w-full flex justify-center items-center"
            to="/user/signup"
          >
            signup
          </Link>
        </button>
      </div>
    </>
  );
}
