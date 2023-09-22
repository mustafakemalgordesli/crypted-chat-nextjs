"use client";

import { useState } from "react";

export default function UsernameEditForm() {
  const [isLoading, SetLoading] = useState(false);
  const [isEdit, SetEdit] = useState(false);
  const [username, setUsername] = useState("faya");
  const [error, setError] = useState("deneme");
  return (
    <>
      <td>
        <div className="flex items-center space-x-3">
          <div className="font-bold uppercase opacity-50">Username:</div>
          {isEdit ? (
            <>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                type="text"
                className="input input-bordered w-full max-w-xs placeholder:text-sm h-10"
                required
              />
              {error && (
                <p className="text-xs h-4 flex justify-center items-center text-center text-red-700 mt-4">
                  {error}
                </p>
              )}
            </>
          ) : (
            <div className="text-sm">faya</div>
          )}
        </div>
      </td>
      <td className="hidden"></td>
      <th className="w-auto">
        {isEdit ? (
          <button
            className="btn btn-ghost btn-sm w-[65px]"
            onClick={() => SetEdit((s) => !s)}
          >
            Save
          </button>
        ) : (
          <button
            className="btn btn-ghost btn-sm w-[65px]"
            onClick={() => SetEdit((s) => !s)}
          >
            Edit
          </button>
        )}
      </th>
    </>
  );
}
