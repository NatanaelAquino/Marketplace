import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterData, registerSheme } from "./register.sheme";
import { useRegisterMutation } from "../../shared/queries/auth/user-register.mutation";

export const useRegisterView = () => {

    const userRegisterMutation = useRegisterMutation();

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterData>({
        resolver: yupResolver(registerSheme),
        defaultValues: {
            name: "Natanael ",
            email: "teste@teste.com",
            phone: "35998234567",
            password: "12345678",
            confirmPassword: "12345678"
        }
    });
    const onSubmit = handleSubmit( async (userData) => {
       const { confirmPassword, ...data } = userData;
       await userRegisterMutation.mutateAsync(data);
    });


    return {
        control,
        onSubmit,
        errors

    }
}