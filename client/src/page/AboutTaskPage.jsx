import React from "react";
import { useLocation } from "react-router-dom";

export default function AboutTaskPage() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div>
        <h1>{`task id is ${location.pathname.split("/tasks/task/")[1]}`}</h1>
      </div>
    </>
  );
}
