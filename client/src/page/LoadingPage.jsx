import React from "react";

export default function LoadingPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-12 bg-black">
      <h1 className='text-center capitalize font-normal text-3xl px-5 text-white font-["Anton_SC"]'>
        add your <span className="text-orange-400">tasks</span> to remeber them.
      </h1>
      <div className="loader"></div>
    </div>
  );
}
