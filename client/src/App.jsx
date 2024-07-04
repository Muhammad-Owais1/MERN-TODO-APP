import React, { useState, useEffect } from "react";
import LoadingPage from "./page/LoadingPage";
import Home from "./page/Home";
import Navbar from "./components/Navbar";

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
            <header className="flex flex-col items-center bg-slate-900">
              <h1 className="py-2 px-2 text-left sm:text-center text-[30px] font-['Anton_SC'] font-medium text-yellow-400 w-full ">TODO APP</h1>
              <Navbar />
            </header>
            <Home />
          </>
      }

    </>
  );
}

export default App;
