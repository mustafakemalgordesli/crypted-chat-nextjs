import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <>
      <div className="navbar bg-gray-700 fixed top-0 right-0 z-10 lg:left-80">
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
        <div className="flex items-center justify-between max-w-full mx-1">
          <div className="">
            <div className="dropdown dropdown-end flex flex-row justify-center items-center">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-10 rounded-full">
                  <Image src="/1.jpg" alt="" width={40} height={40} />
                </div>
              </label>
              <div className="pl-3 font-semibold text-lg text-gray-200">
                <span>Obi-Wan Kenobi</span>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 left-0 top-14"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="flex-none hidden lg:block">
          <div className="gap-2">
            <div className="form-control p-1">
              <input
                type="search"
                placeholder="Search..."
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default index;
