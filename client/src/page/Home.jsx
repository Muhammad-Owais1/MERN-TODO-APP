import React, { useState } from "react";
import Timer from "../components/Timer";
import { useSelector } from "react-redux";
import Heart from "react-animated-heart";
import loginImg from "../imgs/login.png";
import taskImg from "../imgs/sticky-notes.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const user = useSelector((state) => state.auth.user);
  const [isClick, setClick] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="sm:pt-[70px] pt-10 px-10 flex gap-2 items-center justify-center flex-col overflow-scroll">
      {user ? (
        <p className=" text-xs uppercase">{`Wellcome ${user.email}`}</p>
      ) : (
        <p className=" text-xs uppercase text-center">
          Wellcome, You need login before using the app
        </p>
      )}

      <Timer />
      <div className="flex items-center justify-center">
        <p>Plz, Like our app.</p>
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      </div>
      {!user ? (
        <div
          onClick={() => navigate("/user")}
          className="border-2 border-blue-400 w-48 h-48 flex items-center justify-center rounded-lg hover:shadow-2xl shadow-black cursor-pointer"
        >
          <img className="h-44" src={loginImg} alt="" />
        </div>
      ) : (
        <div
          onClick={() => navigate("/addtask")}
          className="border-2 border-orange-400 w-48 h-48 flex items-center justify-center rounded-lg hover:shadow-2xl shadow-black cursor-pointer"
        >
          <img className="h-44" src={taskImg} alt="" />
        </div>
      )}
    </div>
  );
}
