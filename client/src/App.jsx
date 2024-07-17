import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingPage from "./page/LoadingPage";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import TaskPage from "./page/TaskPage";
import AddTaskPage from "./page/AddTaskPage";
import UserPage from "./page/UserPage";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import UserInfo from "./components/UserInfo";
import AboutTaskPage from "./page/AboutTaskPage";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  console.log(user);

  return (
    <>
      {showLoading ? (
        <LoadingPage />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<TaskPage />} />
              {user && (
                <Route path="/tasks/task/:taskid" element={<AboutTaskPage />} />
              )}
              <Route path="/addtask" element={<AddTaskPage />} />
              {/* if (!user) {<Route path="/user" element={<UserPage />} />} */}
              {!user && <Route path="/user" element={<UserPage />} />}
              <Route path={`/user/${user?._id}`} element={<UserPage />} />
              <Route path="/user/login" element={<LoginPage />} />
              <Route path="/user/signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
