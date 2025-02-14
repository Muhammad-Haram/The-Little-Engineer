import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  return (
    <main className="h-screen w-screen flex">
      <section className="left relative flex flex-col h-screen min-w-72 bg-slate-300">
        <header className="flex justify-between items-center p-2 px-4 w-full bg-slate-100 absolute z-10 top-0">
          <button className="flex gap-2">
            <i className="ri-add-fill mr-1"></i>
            <p>Add collaborator</p>
          </button>

          <button className="p-2">
            <i className="ri-group-fill"></i>
          </button>
        </header>

        <div className="conversation-area pt-14 pb-10 flex-grow flex flex-col h-full relative">
          <div className="message-box p-2 flex-grow flex flex-col gap-2 overflow-auto max-h-full scrollbar-hide">

            <div className="message max-w-64 flex flex-col p-2 bg-slate-50 w-fit rounded-md">
              <small className="opacity-65 text-xs">example@gmail.com</small>
              <p className="text-sm">Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur</p>
            </div>

            <div className="message ml-auto max-w-64 flex flex-col p-2 bg-slate-50 w-fit rounded-md">
              <small className="opacity-65 text-xs">example@gmail.com</small>
              <p className="text-sm">Lorem ipsum dolor, sit amet consectetur</p>
            </div>

          </div>

          <div className="inputField w-full flex absolute bottom-0">
            <input
              className="p-2 px-4 border-none outline-none flex-grow"
              type="text"
              placeholder="Enter message"
            />
            <button className="px-5 bg-slate-950 text-white">
              <i className="ri-send-plane-fill"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
