"use client";

import axios from "axios";
import { useState } from "react";

export default function UsernameEditForm() {
  const [isLoading, SetLoading] = useState(false);
  const [isEdit, SetEdit] = useState(false);
  const [username, setUsername] = useState("faya");
  const [error, setError] = useState("");

  const onSubmit = () => {
    SetLoading(true);
    if (!username) {
      setError("Username must be required");
      SetLoading(false);
      return;
    }

    axios
      .patch("/api/users/updateusername", {
        username,
      })
      .then((res) => {
        if (res?.data?.success) {
          localStorage.setItem("user", JSON.stringify(res?.data?.user));
          SetLoading(false);
          SetEdit(false);
        }
      })
      .catch((err) => {
        SetLoading(false);
        SetEdit(false);
      });
  };

  return (
    <div className="h-[60px] flex justify-between items-center px-2 sm:px-6 border-b border-black">
      <div className="flex items-center space-x-3">
        <div className="font-bold uppercase opacity-50">Username:</div>
        {isEdit ? (
          <>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="text"
              className="input input-bordered w-full max-w-sm placeholder:text-sm h-10"
            />
            {/* {error && (
              <p className="text-xs h-2 flex justify-center items-center text-center text-red-700 mt-4">
                {error}
              </p>
            )} */}
          </>
        ) : (
          <div className="text-sm">{username}</div>
        )}
      </div>
      <div>
        {isEdit ? (
          <button
            className="btn btn-ghost btn-sm flex flex-row items-center justify-center text-center"
            onClick={onSubmit}
            disabled={isLoading}
          >
            {isLoading && <span className="loading loading-spinner"></span>}
            <span className={`${isLoading && "hidden"} sm:inline-block`}>
              Save
            </span>
          </button>
        ) : (
          <button
            className="btn btn-ghost btn-sm w-[65px] text-center"
            onClick={() => SetEdit((s) => !s)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
