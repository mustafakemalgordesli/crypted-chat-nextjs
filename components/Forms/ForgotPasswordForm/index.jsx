"use client"
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ForgotPasswordForm() {
    const router = useRouter();

    const notify = React.useCallback((message, configs) => {
        toast(message, configs);
    }, []);

    return <>
        <div className="flex flex-col justify-center px-12 py-12 border border-gray-500 rounded-lg shadow-xl">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img
                    className="mx-auto h-10 w-auto"
                    src="/vite.svg"
                    alt="Your Company"
                /> */}
                <h2 className="text-center text-gray-300 font-semibold text-2xl mb-4 leading-9 tracking-tight ">
                    Reset your password
                </h2>
            </div>

            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validate={(values) => {
                        const errors = {};

                        if (!values.email) {
                            errors.email = "Email Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = "Invalid email address";
                        }

                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const res = await axios.post(
                                `/api/users/forgotpassword`, {
                                email: values.email
                            }
                            );
                            if (res.data.success) {
                                notify("Password reset email sent", {
                                    hideProgressBar: true,
                                    autoClose: 1000,
                                    type: "success",
                                });
                                setTimeout(
                                    () => { router.push("/resetpassword") },
                                    500
                                );
                            } else {
                                notify("Password reset mail not sented", {
                                    hideProgressBar: true,
                                    autoClose: 3000,
                                    type: "error",
                                });
                                setSubmitting(false);
                            }
                        } catch (err) {
                            console.log(err)
                            notify("Password reset mail not sented", {
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
                            <div className="mb-6">
                                <label
                                    htmlFor="username"
                                    className="label"
                                >
                                    <span className="label-text text-gray-200">Your Email</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className="input input-bordered w-full max-w-xs placeholder:text-sm"
                                    />
                                </div>
                                {errors.email && <p className="text-xs text-red-700 mt-4">{errors.email}</p>}
                            </div>

                            <div>
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="flex justify-center btn btn-block"
                                >
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>

                <p className="flex flex-col justify-center items-center sm:flex-row mt-10 text-center text-sm ">
                    Şifrenizi hatırladınız mı?
                    <Link
                        href="/login"
                        className="link link-info link-hover pl-1"
                    >
                        Giriş Yap
                    </Link>
                </p>
            </div>
        </div >
        <ToastContainer />
    </>
}