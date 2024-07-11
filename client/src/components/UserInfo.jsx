import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice.js";
import { useNavigate, Link } from "react-router-dom";

export default function UserInfo({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = user?.email.split("@")[0];

  const handleLogout = () => {
    dispatch(logout());

    // Clear local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/user");
  };

  return (
    <div className="font-['Montserrat'] flex items-center justify-center gap-5 flex-col">
      <h1 className="font-semibold text-[50px]">
        Wellcome {userName.charAt(0).toUpperCase() + userName.slice(1)}
      </h1>
      <p>{user.email}</p>
      <div className="flex items-center justify-center gap-6">
        <button className="h-10 w-24 border-2 border-black rounded-3xl font-['Montserrat'] text-xs">
          <Link
            to="/"
            className="h-full w-full flex items-center justify-center"
          >
            Home
          </Link>
        </button>
        <button
          onClick={handleLogout}
          className="h-10 w-24 border-2 border-black rounded-3xl font-['Montserrat'] text-xs"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
