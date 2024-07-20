import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditTaskPage() {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fecthData = async (taskID) => {
      const response = await fetch(
        `http://localhost:3000/api/task/gettask?taskID=${taskID}`
      );
      const data = await response.json();
      setData(data);
      setStatus(data.status);
      console.log(data);
    };
    fecthData(location.pathname.split("/tasks/task/edit/")[1]);
  }, []);

  const handleEdit = async () => {
    const updatedTask = {
      taskName,
      status,
      description,
    };
    const response = await fetch(
      `http://localhost:3000/api/task/edittask/${
        location.pathname.split("/tasks/task/edit/")[1]
      }`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      }
    );
    const result = await response.json();
    navigate("/tasks");
  };

  return (
    <div className="sm:pt-14  flex items-center flex-col gap-5 ">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="font-bold font-['Montserrat']">Task</h1>
        <input
          className="h-9 border-[1px] border-black rounded-lg w-[80vw] px-2 font-['Montserrat']"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder={data.task}
        />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="font-bold font-['Montserrat']">Status</h1>
        <select
          className="h-9 border-[1px] bg-white border-black rounded-lg w-[80vw] px-2 font-['Montserrat']"
          name=""
          id=""
          value={status}
          placeholder={data.status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="font-bold font-['Montserrat']">Description</h1>
        <textarea
          value={description}
          className="h-52 border-[1px] bg-white border-black rounded-lg w-[80vw] p-2 resize-none font-['Montserrat']"
          onChange={(e) => setDescription(e.target.value)}
          placeholder={data.description}
        ></textarea>
      </div>
      <button
        onClick={handleEdit}
        disabled={!taskName.trim()}
        className={`h-10 w-24 border-2 ${
          !taskName.trim()
            ? "text-gray-700 border-gray-700"
            : "text-black border-black"
        }  rounded-3xl font-['Montserrat'] text-xs `}
      >
        Edit
      </button>
    </div>
  );
}
