import React from "react";

export default function UserInfo({ user }) {
  const userName = user.email.split("@")[0];
  return (
    <div className="font-['Montserrat'] ">
      <h1 className="font-semibold text-[50px]">
        Wellcome {userName.charAt(0).toUpperCase() + userName.slice(1)}
      </h1>
      <p>{user.email}</p>
      <button className=" border-black border-2 h-10 w-[80px] rounded-3xl">
        Logout
      </button>
    </div>
  );
}
