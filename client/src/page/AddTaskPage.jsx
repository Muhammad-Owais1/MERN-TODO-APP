import React, { useState } from "react";
import MyCalender from "../components/MyCalender";
import AddTaskForm from "../components/AddTaskForm";

export default function AddTaskPage() {
  return (
    <div className="overflow-x-hidden page h-full flex justify-around items-center sm:flex-row flex-col-reverse gap-20 sm:gap-0 pt-40 pb-64 sm:p-0">
      <MyCalender />
      <AddTaskForm />
    </div>
  );
}
