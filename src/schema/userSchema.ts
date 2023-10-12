import * as yup from "yup";

export const createUserYupValidate = yup.object().shape({
  body: yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Must be 5 or more characters long")
      .max(16, "Must be 5 or fewer characters long"),
    role: yup
      .string()
      .oneOf(["admin", "super_admin", "tourist"], "Role not match")
      .required("Role is required"),
    phone: yup.string().required("Phone number is required"),
    address: yup.string().required("Address is required"),
    image: yup.string().required("Image number is required"),
  }),
});
