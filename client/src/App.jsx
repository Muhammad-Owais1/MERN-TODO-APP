import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoadingPage from "./page/LoadingPage";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import TaskPage from "./page/TaskPage";
import UserPage from "./page/UserPage";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";

function App() {
  const [showLoading, setShowLoading] = useState(true);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {
        showLoading ? <LoadingPage />
          :
          <>
            <BrowserRouter>
              <header className="flex flex-col items-center bg-slate-900">

                <h1 className="py-2 px-10 text-left sm:text-center text-[30px] font-['Anton_SC'] font-medium text-yellow-400 w-full ">
                  TODO APP
                </h1>

                <Navbar />
              </header>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tasks' element={<TaskPage />} />
                <Route path='/user' element={<UserPage />} />
                <Route path='/user/login' element={<LoginPage />} />
                <Route path='/user/signup' element={<SignupPage />} />
              </Routes>
            </BrowserRouter>
          </>
      }

    </>
  );
}

export default App;
