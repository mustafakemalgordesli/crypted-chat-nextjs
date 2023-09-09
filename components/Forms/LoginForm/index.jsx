"use client";

import Link from "next/link";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const index = () => {
  
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        { username, password }
      );
      console.log("Login successful:", response.data);

      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Please check your credentials.");
    }
  };

  return (
    <div className="border border-gray-500 rounded-lg px-24 py-8 shadow-xl">
      <div>
        <h1 className="text-gray-300 font-semibold text-2xl mb-8">
          Login to your account
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-gray-200">Username</span>
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="text"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs placeholder:text-sm"
              required
              // className={errors.username && touched.username ? "input input-bordered input-error w-full max-w-xs placeholder:text-sm" : "input input-bordered w-full max-w-xs placeholder:text-sm"}
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-gray-200">Password</span>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              className="input input-bordered w-full max-w-xs placeholder:text-sm"
              required
              // className={errors.username && touched.username ? "input input-bordered input-error w-full max-w-xs placeholder:text-sm" : "input input-bordered w-full max-w-xs placeholder:text-sm"}
            />
            {error && <p className="text-xs text-red-700 mt-4">{error}</p>}
          </div>
        </div>
        <div className="mb-6 self-end">
          <Link href="#" className="link link-info link-hover text-sm">
            Forget your password?
          </Link>
        </div>
        <button type="submit" className="btn btn-block">
          Login
        </button>
        <div className="mt-4">
          <p>
            Don&apos;t have an account?
            <Link href="/register" className="link link-info link-hover pl-1">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default index;
