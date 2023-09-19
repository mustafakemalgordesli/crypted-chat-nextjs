import Image from "next/image";
import React from "react";

// needs to be fixed!!!!!!!!!!!!!!

const page = () => {
  return (
    <div className="max-w-screen-md mx-auto h-screen pt-20">
      <div>
        <div className="overflow-x-auto">
          <table className="table rounded-xl border border-gray-600 dark:border-gray-800">
            {/* head */}
            <thead>
              <tr>
                <th className="flex flex-row w-full justify-between items-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src="/1.jpg" alt="Avatar" width={48} height={48} />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="inline-flex justify-center p-2 rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 18"
                    >
                      <path
                        fill="currentColor"
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                      />
                    </svg>
                    <span className="sr-only">Upload image</span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold uppercase opacity-50">
                        Username
                      </div>
                      <div className="text-sm">faya</div>
                    </div>
                  </div>
                </td>
                <td></td>
                <th>
                  <button className="btn btn-ghost btn-sm">Edit</button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold uppercase opacity-50">
                        Email
                      </div>
                      <div className="text-sm">faya@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td></td>
                <th>
                  <button className="btn btn-ghost btn-sm">edit</button>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold opacity-50">Password</div>
                      <div className="text-sm ">************</div>
                    </div>
                  </div>
                </td>
                <td></td>
                <th>
                  <button className="btn btn-ghost btn-sm">edit</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
