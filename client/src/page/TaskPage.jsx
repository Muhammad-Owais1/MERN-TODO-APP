import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function TaskPage() {
  const [data, setData] = useState({});
  let user = useSelector((state) => state.auth.user);
  if (user) {
    let id = user._id;
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          `http://localhost:3000/api/task/gettask?id=${id}`,
          {
            method: "GET",
          }
        );
        const data = await res.json();
        setData(data);
      };
      fetchData();
    }, []);
  }
  // console.log(data?.tasks[0]?.task);

  return (
    <div className="page h-full">
      {data.tasks?.map((item, index) => (
        <h1 key={index}>{item.task}</h1>
      ))}
    </div>
  );
}
