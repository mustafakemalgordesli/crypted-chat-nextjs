"use client";

import { authSchema } from "@/schemas";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const index = () => {
  const router = useRouter();

  const onSubmit = async (values, actions) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        values
      );
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    router.push("/login");
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: authSchema,
    onSubmit,
  });

  // const router = useRouter()

  // const registerUser = async (e) => {
  //   e.preventDefault()
  //   const response = await fetch('/api/register', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({data})
  //   })

  //   const userInfo = await response.json()
  //   console.log(userInfo)
  //   router.push("/login")
  // }

  return (
    <div className="border border-gray-500 rounded-lg px-24 py-4 shadow-xl">
      <div>
        <h1 className="text-gray-300 mb-4 font-semibold text-2xl text-center">
          Create an account
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-gray-200">Username</span>
            </label>
            <input
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              id="username"
              type="text"
              placeholder="Username"
              className={
                errors.username && touched.username
                  ? "input input-bordered input-error w-full max-w-xs placeholder:text-sm"
                  : "input input-bordered w-full max-w-xs placeholder:text-sm"
              }
            />
            {errors.username && touched.username && (
              <p className="text-xs text-red-600">{errors.username}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-gray-200">Email</span>
            </label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              type="email"
              placeholder="email@example.com"
              className={
                errors.email && touched.email
                  ? "input input-bordered input-error w-full max-w-xs placeholder:text-sm"
                  : "input input-bordered w-full max-w-xs placeholder:text-sm"
              }
            />
            {errors.email && touched.email && (
              <p className="text-xs text-red-600">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div
            className="tooltip tooltip-bottom"
            data-tip="Must have at least 6 characters."
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-gray-200">Password</span>
              </label>
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
                type="password"
                className={
                  errors.password && touched.password
                    ? "input input-bordered input-error w-full max-w-xs placeholder:text-sm"
                    : "input input-bordered w-full max-w-xs placeholder:text-sm"
                }
              />
              {errors.password && touched.password && (
                <p className="text-xs text-red-600">{errors.password}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-gray-200">Confirm Password</span>
            </label>
            <input
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="confirmPassword"
              type="password"
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "input input-bordered input-error w-full max-w-xs placeholder:text-sm"
                  : "input input-bordered w-full max-w-xs placeholder:text-sm"
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-xs text-red-600">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-block disabled:opacity-25"
          disabled={isSubmitting}
        >
          Register
        </button>
        <div className="mt-4">
          <p>
            Already have an account?
            <Link href="/login" className="link link-info link-hover pl-1">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default index;
