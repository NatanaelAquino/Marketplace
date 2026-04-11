import * as yup from "yup";

export const registerSheme = yup.object({
    name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone is required").matches(/^\d{10,11}$/, "Phone must be 10 or 11 digits"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), "password not confirmed"], "Passwords must match").required("Confirm Password is required")
});


export type RegisterData = yup.InferType<typeof registerSheme>;