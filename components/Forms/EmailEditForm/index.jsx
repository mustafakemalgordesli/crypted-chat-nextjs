"use client";

import { useState } from "react";

export default function EmailEditForm() {
  const [isLoading, SetLoading] = useState(false);
  const [isEdit, SetEdit] = useState(false);
  const [email, setEmail] = useState("faya@gmail.com");
  const [error, setError] = useState("deneme");
  return (
    <div className="h-[60px] flex justify-between items-center px-2 sm:px-6 border-b border-black">
      <div className="flex items-center space-x-3">
        <div className="font-bold uppercase opacity-50">Email:</div>
        {isEdit ? (
          <>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              className="input input-bordered w-full max-w-sm placeholder:text-sm h-10"
              required
            />
            {/* {error && (
              <p className="text-xs h-4 flex justify-center items-center text-center text-red-700 mt-4">
                {error}
              </p>
            )} */}
          </>
        ) : (
          <div className="text-sm">{email}</div>
        )}
      </div>
      <div>
        {isEdit ? (
          <button
            className="btn btn-ghost btn-sm flex flex-row items-center justify-center text-center"
            onClick={() => SetLoading((s) => !s)}
            disabled={isLoading}
          >
            {isLoading && <span class="loading loading-spinner"></span>}
            <span className="hidden sm:inline-block">Save</span>
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
