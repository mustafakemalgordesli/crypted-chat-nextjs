import React from "react";
import Link from "next/link";
import Image from "next/image";
import ChatList from "./ChatList";

const Sidebar = () => {
  return (
    <>
      <div className="drawer-side z-10">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="border-b border-gray-600">
            <div className="mb-3">
              <div className="overflow-hidden transition-all text-sm font-semibold px-2.5 py-1">
                <form>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      className="block w-full p-1 pl-10 text-xs text-gray-300 bg-transparent border border-gray-500 placeholder-gray-400 rounded-lg"
                      placeholder="Find or start a conversation"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-3 px-4">
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-semibold text-xs uppercase">
                Direct Messages
              </h2>
              <div
                className="tooltip hover:tooltip-open tooltip-top z-999"
                data-tip="Create DM"
              >
                <div className="dropdown dropdown-right dropdown-bottom">
                  <label
                    tabIndex={0}
                    className="btn hover:bg-none font-semibold text-lg"
                  >
                    +
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-999 menu p-2 shadow bg-base-100 rounded-box w-72"
                  >
                    <h1 className="text-start text-lg p-4">Select Friends</h1>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center jus text-gray-900 transition duration-75 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white group"
                      >
                        <button
                          type="button"
                          className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                          <Image
                            height={32}
                            width={32}
                            className="w-8 h-8 rounded-full object-cover"
                            src="/1.jpg"
                            alt="user photo"
                          />
                        </button>
                        <div className="flex flex-col justify-between items-start overflow-hidden transition-all mr-2 px-2.5 py-0.5">
                          <h4 className="font-semibold text-gray-200">
                            John Doe
                          </h4>
                          <span className="text-xs text-gray-600">
                            johndoe@gmail.com
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center jus text-gray-900 transition duration-75 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white group"
                      >
                        <button
                          type="button"
                          className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                          <Image
                            height={32}
                            width={32}
                            className="w-8 h-8 rounded-full object-cover"
                            src="/1.jpg"
                            alt="user photo"
                          />
                        </button>
                        <div className="flex flex-col justify-between items-start overflow-hidden transition-all mr-2 px-2.5 py-0.5">
                          <h4 className="font-semibold text-gray-200">
                            John Doe
                          </h4>
                          <span className="text-xs text-gray-600">
                            johndoe@gmail.com
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full px-1 py-2 overflow-y-auto">
            <ChatList />

            <div className="fixed w-full z-20 bottom-0 left-0 space-y-2 font-medium border-t border-gray-700 dark:border-gray-700">
              <div>
                <div className="flex items-center p-2 text-gray-900 transition duration-75 group">
                  <div className="flex text-sm bg-gray-800 rounded-full md:mr-0">
                    <div className="chat-image avatar">
                      <div className="w-8 rounded-full">
                        <Image
                          alt=""
                          width={32}
                          height={32}
                          src="/1.jpg"
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center overflow-hidden transition-all mr-2 px-2.5 py-0.5">
                    <h4 className="font-semibold text-gray-200">John Doe</h4>
                  </div>
                  <div className="dropdown dropdown-top">
                    <label
                      tabIndex={0}
                      className="btn rotate-90 text-xl font-bold self-center rounded-full"
                    >
                      ...
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[9999] menu p-2 shadow bg-base-100 rounded-box w-52 text-gray-600"
                    >
                      <li>
                        <Link href="/settings">Settings</Link>
                      </li>
                      <li>
                        <Link href="/">Logout</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
