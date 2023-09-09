import React from "react";

const index = () => {
  return (
    <>
      <div className="navbar bg-base-100 fixed top-0 right-0 z-10 lg:left-80 border-b border-gray-500">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex items-center justify-between min-w-full mx-1">
          <div className="flex items-center w-full">
            <button>Friends</button>
            <div className="divider divider-horizontal"></div>
            <button>Online</button>
            <div className="divider divider-horizontal"></div>
            <button>All</button>
            <div className="divider divider-horizontal"></div>
            <button className="btn btn-sm">Add Friend</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
