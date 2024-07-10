import React, { useState } from "react";
import MyCalender from "../components/MyCalender";
import AddTaskForm from "../components/AddTaskForm";

export default function AddTaskPage() {
  return (
    <div className=" page flex sm:justify-center items-center sm:flex-row flex-col pt-10">
      <AddTaskForm />
      <MyCalender />
    </div>
  );
}
