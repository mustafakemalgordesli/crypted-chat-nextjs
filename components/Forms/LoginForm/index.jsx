import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="border border-gray-500 rounded-lg px-24 py-8 shadow-xl">
      <div>
        <h1 className="text-gray-300 font-semibold text-2xl mb-8">
          Login to your account
        </h1>
      </div>
      <form>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Username
          </label>
          <input
            type="text"
            className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your password
          </label>
          <input
            type="password"
            className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            required
          />
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
