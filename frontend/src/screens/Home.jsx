import React, { useContext, useState } from "react";
import { UserContext } from "../context/user.context";
import axios from "../config/axios.js";

const Home = () => {
  const { user } = useContext(UserContext);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [ProjectName, setProjectName] = useState(null);

  function createProject(e) {
    e.preventDefault();

    axios
      .post("/projects/create", {
        name: ProjectName,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setisModalOpen(false);
  }

  return (
    <main className="p-4">
      <div className="projects">
        <button
          onClick={() => {
            setisModalOpen(true);
          }}
          className="project p-4 border border-slate-300 rounded-md"
        >
          New Project
          <i className="ri-link ml-2"></i>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-1/3">
            <h2 className="text-xl mb-4">Create New Project</h2>
            <form onSubmit={createProject}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="projectName"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  value={ProjectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-[#2c323d] hover:bg-[#161a24] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Create
                  <i className="ri-add-fill ml-2"></i>
                </button>
                <button
                  type="button"
                  className="bg-gray-50 border border-slate-300 hover:bg-gray-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline text-black"
                  onClick={() => setisModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
