import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddTaskForm() {
  const [response, setResponse] = useState("");

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

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:3000/api/task/addtask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    await delay(2);
    console.log(response);
    console.log(data);
    setResponse(response);
  };

  const task = watch("task");
  const date = watch("date");

  const isFormValid = task && date;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:w-[50vw] h-full flex flex-col items-center justify-center gap-4 "
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
      <input
        {...register("date", { required: true })}
        type="date"
        className='bg-white focus:outline-none border-b-[1px] border-gray-950 h-8 w-[90%] font-["Montserrat"] px-1'
      />
      <textarea
        {...register("description")}
        className='resize-none focus:outline-none border-b-[1px] border-r-[1px] border-gray-950 h-48 w-[90%] font-["Montserrat"] px-1'
        placeholder="Description"
        maxLength="400"
      ></textarea>
      <p>{response.message}</p>
      <button
        className={`order-[1px] w-16 h-10 border-[1px] ${
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
