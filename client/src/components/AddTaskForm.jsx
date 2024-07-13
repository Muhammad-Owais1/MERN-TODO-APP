import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import getTime from "../helper/getTime";

export default function AddTaskForm({ user }) {
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, d * 1000);
    });
  };

  const { hour, minute, day, date, month, year, ampm } = getTime();

  const time = `${hour}:${minute} ${ampm}`;

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:3000/api/task/addtask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...data,
        user: user._id,
        time: time,
        date: date,
        day: day,
        month: month,
        year: year,
      }),
    });
    const response = await res.json();
    await delay(2);
    console.log(response);
    console.log(data);
    setResponse(response);
    if (response.status == 403) {
      navigate("/user/login");
    }
  };

  const task = watch("task");

  const isFormValid = task;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:w-[50vw] h-full flex flex-col items-center justify-center sm:gap-4 gap-10 "
    >
      <input
        {...register("task", { required: true })}
        className='focus:outline-none border-b-[1px] border-gray-950 h-8 w-[90%] font-["Montserrat"] px-1'
        type="text"
        placeholder="Add Task"
        maxLength="50"
      />
      <select
        {...register("status")}
        className='focus:outline-none bg-white border-b-[1px] border-gray-950 h-8 w-[90%] font-["Montserrat"] px-1'
      >
        <option value="incomplete" className='font-["Montserrat"]'>
          Incomplete
        </option>
        <option value="complete" className='font-["Montserrat"]'>
          Complete
        </option>
      </select>
      {/* <input
        {...register("date", { required: true })}
        type="date"
        className='bg-white focus:outline-none border-b-[1px] border-gray-950 h-8 w-[90%] font-["Montserrat"] px-1'
      /> */}
      <textarea
        {...register("description")}
        className='resize-none focus:outline-none border-b-[1px] border-r-[1px] border-gray-950 h-40 w-[90%] font-["Montserrat"] px-1'
        placeholder="Description"
        maxLength="400"
      ></textarea>
      <p
        className={`${
          response.status == 201 ? "text-green-600" : "text-red-500"
        } text-sm`}
      >
        {response.message}
      </p>
      <button
        className={`w-16 h-10 border-[1px] ${
          isSubmitting || !isFormValid
            ? "border-gray-600 text-gray-600"
            : "border-gray-950 text-black"
        }`}
        disabled={isSubmitting || !isFormValid}
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
