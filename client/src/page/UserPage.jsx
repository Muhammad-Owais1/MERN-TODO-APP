import React from "react";
import UserInfo from "../components/UserInfo";
import UserButtons from "../components/UserButtons";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  // const navigate = useNavigate();
  // if (user) {
  //   navigate(`/user/${user._id}`);
  // }
  return (
    <div className="flex-col flex items-center justify-center gap-10 pt-[150px] sm:pt-0 sm:h-full">
      {user ? <UserInfo user={user} /> : <UserButtons />}
    </div>
  );
}
