import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  return (
    <main className="h-screen w-screen flex">
      <section className="left relative flex flex-col h-screen min-w-96 bg-slate-300">
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
          <div className="message-box">
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
        </div>
      </section>
    </main>
  );
};

export default Project;
