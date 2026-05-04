import * as yup from "yup";

export const loginSheme = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
});


export type LoginData = yup.InferType<typeof loginSheme>;