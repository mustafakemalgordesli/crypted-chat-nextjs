"use client";

import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const index = () => {
  return (
    <div className="flex-none">
      <div className="dropdown dropdown-top">
        <label tabIndex={0} className="btn btn-ghost btn-circle pl-2">
          <div>
            <svg
              className="w-5 h-5"
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
                d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
              />
            </svg>
          </div>

          <div>
            <div
              tabIndex={0}
              className="mt-2 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <Picker
                  data={data}
                  onEmojiSelect={(e) => Field.onChange(`${field.value} ${e}`)}
                />
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default index;
