"use client";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import InputError from "@/components/InputError";

export default function ResetPasswordForm() {
  const router = useRouter();

  const notify = React.useCallback((message, configs) => {
    toast(message, configs);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/" className="flex items-center mb-4 text-3xl font-bold">
        <Image
          className="mr-2"
          src="/1.jpg"
          alt="logo"
          width={36}
          height={36}
        />
        Crypted-Chat
      </Link>
      <div className="flex flex-col justify-center px-24 py-4 border border-gray-500 rounded-lg shadow-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-gray-300 font-semibold text-2xl mb-4 leading-9 tracking-tight ">
            Change Password
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{
              pin: "",
              password: "",
              confirmPassword: "",
            }}
            validateOnBlur={false}
            validateOnChange={false}
            validate={(values) => {
              const errors = {};

              if (!values.pin) {
                errors.pin = "Pin is required";
              } else if (!(values.pin > 99999 && values.pin < 1000000)) {
                errors.pin = "Pin must have 6 digits";
              }

              if (!values.password) {
                errors.password = "Password Required";
              }

              if (!values.confirmPassword) {
                errors.confirmPassword = "Confirm Password Required";
              }

              if (
                values.password &&
                values.confirmPassword &&
                values.password !== values.confirmPassword
              ) {
                errors.password = "Passwords not matching";
                errors.confirmPassword = "Passwords not matching";
              }

              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const res = await API.post("/users/resetpassword", values);
                if (res.data.success) {
                  notify("Password reset is successful", {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: "success",
                  });
                  setTimeout(() => navigate("/login", { replace: true }), 1000);
                } else {
                  notify("Password reset is unsuccessful", {
                    hideProgressBar: true,
                    autoClose: 3000,
                    type: "error",
                  });
                  setSubmitting(false);
                }
              } catch (err) {
                notify("Password reset is unsuccessful", {
                  hideProgressBar: true,
                  autoClose: 3000,
                  type: "error",
                });
                setSubmitting(false);
              }
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} method="POST">
                <div className="mb-4">
                  <label htmlFor="pin" className="label">
                    <span className="label-text text-gray-200">Pin</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="pin"
                      name="pin"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.pin}
                      className={
                        errors.password
                          ? "input input-bordered input-error w-full max-w-xs placeholder:text-sm"
                          : "input input-bordered w-full max-w-xs placeholder:text-sm"
                      }
                      maxLength={6}
                    />
                  </div>
                  <InputError error={errors.pin} />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="label">
                    <span className="label-text text-gray-200">Password</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={
                        errors.password
                          ? "input input-bordered input-error w-full max-w-xs placeholder:text-sm"
                          : "input input-bordered w-full max-w-xs placeholder:text-sm"
                      }
                    />
                  </div>
                  <InputError error={errors.password} />
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="label">
                    <span className="label-text text-gray-200">
                      Confirm Password
                    </span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      className={
                        errors.password
                          ? "input input-bordered input-error w-full max-w-xs placeholder:text-sm"
                          : "input input-bordered w-full max-w-xs placeholder:text-sm"
                      }
                    />
                  </div>
                  <InputError error={errors.confirmPassword} />
                </div>

                <div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="flex justify-center btn btn-block"
                  >
                    Reset Password
                  </button>
                  <div className="mt-4">
                    <p>
                      Already have an account?
                      <Link
                        href="/login"
                        className="link link-info link-hover pl-1"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
