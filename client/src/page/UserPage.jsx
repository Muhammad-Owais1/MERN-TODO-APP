import React from "react";
import UserInfo from "../components/UserInfo";
import UserButtons from "../components/UserButtons";
import { useSelector } from "react-redux";

export default function UserPage() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <div className="page flex flex-col gap-4 items-center justify-center">
      {user ? <UserInfo user={user} /> : <UserButtons />}
    </div>
  );
}
