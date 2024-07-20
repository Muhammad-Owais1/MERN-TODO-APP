import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
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
    const res = await fetch(
      "https://mern-todo-app-owais.vercel.app/api/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const response = await res.json();
    await delay(2);
    console.log(response, data);
    setResponse(response);
  };

  if (response.status == 201) {
    setTimeout(() => {
      navigate("/user/login");
    }, 2000);
  }

  return (
    <div className="page">
      {isSubmitting ? (
        <div className="flex items-center justify-center">
          <h1 className='font-["Montserrat"] font-semibold text-4xl mt-52'>
            Loading...
          </h1>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="uppercase flex flex-col justify-center items-center gap-10"
        >
          <h1 className='text-center pt-20 pb-2 font-["Montserrat"] font-semibold text-4xl '>
            signup
          </h1>
          <input
            {...register("email")}
            className='focus:outline-none shadow-lg border-black border-2 h-10 w-52 px-2 font-["Montserrat"]'
            type="email"
            placeholder="Email"
          />
          <input
            {...register("password")}
            className='focus:outline-none shadow-lg border-black border-2 h-10 w-52 px-2 font-["Montserrat"]'
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-center items-center gap-5 ">
            <button className='h-10 w-24 border-2 border-black rounded-3xl font-["Montserrat"] text-xs'>
              <Link
                className="h-full w-full flex items-center justify-center "
                to="/user"
              >
                Back
              </Link>
            </button>
            <button
              type="submit"
              className={
                'h-10 w-24 border-2 border-black rounded-3xl font-["Montserrat"] text-xs '
              }
            >
              Signup
            </button>
          </div>
          <p
            className={`font-semibold text-xs ${
              response.status == 201 ? "text-green-600" : "text-red-600"
            }`}
          >
            {response.message}
          </p>
        </form>
      )}
    </div>
  );
}
