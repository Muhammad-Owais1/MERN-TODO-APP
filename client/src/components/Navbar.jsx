import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  let location = useLocation();

  const user = useSelector((state) => state.auth.user);
  const userLink = user ? `/user/${user._id}` : "/user";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`flex flex-col items-center  transition-all duration-300 `}
      >
        <h1
          className={`py-2 px-10  text-left sm:text-center text-[30px] font-['Anton_SC'] font-medium text-blue-400 w-screen transition-all duration-300 ${
            scrolled ? "opacity-0 h-0" : "opacity-100 h-auto"
          }`}
        >
          TODO APP
        </h1>

        <nav
          className={`sm:flex justify-center  w-screen gap-5 pb-2 fixed px-10 hidden  ${
            scrolled ? "pt-2 bg-white " : "pt-14"
          }`}
        >
          {[
            ["Home", "/"],
            ["Tasks", "/tasks"],
            ["User", userLink],
            ["Add Task", "/addtask"],
            ["More", "/more"],
          ].map((item, index) => (
            <div
              className={`cursor-pointer flex items-center justify-center ${
                (location.pathname === "/" && item[1] === "/") ||
                (location.pathname !== "/" &&
                  location.pathname.startsWith(item[1]) &&
                  item[1] !== "/")
                  ? "text-blue-600 border-blue-600"
                  : "border-black text-black"
              } hover:text-blue-300 hover:border-blue-300 border-[2px] w-24 h-8 rounded-2xl`}
              key={index}
            >
              <Link
                className='w-full h-full uppercase text-xs font-["Montserrat"] flex items-center justify-center'
                to={item[1]}
              >
                {item[0]}
              </Link>
            </div>
          ))}
        </nav>
        <nav className="flex justify-around py-2 sm:hidden  fixed bottom-0 z-20  bg-white border-t-2 border-black w-full">
          {[
            ["fa-list-check", "/tasks"],
            ["fa-plus", "/addtask"],
            ["fa-house", "/"],
            ["fa-circle-info", "/more"],
            ["fa-user", userLink],
          ].map((item, index) => (
            <div
              className="cursor-pointer flex items-center justify-center flex-col text-white  w-8 h-8 pt-1 rounded-2xl "
              key={index}
            >
              <Link
                className="h-full w-full flex items-center justify-center"
                to={item[1]}
              >
                <i
                  className={`fa-solid ${item[0]} ${
                    (location.pathname === "/" && item[1] === "/") ||
                    (location.pathname !== "/" &&
                      location.pathname.startsWith(item[1]) &&
                      item[1] !== "/")
                      ? "text-blue-700"
                      : "text-orange-400"
                  }`}
                ></i>
              </Link>
              <div className="h-1 w-5 bg-black rounded-md nav-underline"></div>
            </div>
          ))}
        </nav>
      </header>
    </>
  );
}
