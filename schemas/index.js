import * as yup from "yup";

const usernameRules =
  /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

export const authSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email!").required("Required"),
  username: yup
    .string()
    .matches(usernameRules, { message: "Please create a stronger username" })
    .required("Required"),
  password: yup.string().min(6).required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match!")
    .required("Required"),
});
