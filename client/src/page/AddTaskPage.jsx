import React, { useState } from "react";
import MyCalender from "../components/MyCalender";
import AddTaskForm from "../components/AddTaskForm";
import { useSelector } from "react-redux";

export default function AddTaskPage() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className=" page flex sm:justify-center items-center sm:flex-row flex-col pt-10">
      <AddTaskForm user={user} />
      <MyCalender />
    </div>
  );
}
