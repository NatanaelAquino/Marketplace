import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterData, registerSheme } from "./register.sheme";
import { useRegisterMutation } from "../../shared/queries/auth/user-register.mutation";
import useUserStore from "../../shared/store/user-store";

export const useRegisterView = () => {

    const userRegisterMutation = useRegisterMutation();
    const { setSession, user } = useUserStore();


    const { control, handleSubmit, formState: { errors } } = useForm<RegisterData>({
        resolver: yupResolver(registerSheme),
        defaultValues: {
            name: "teste",
            email: "teste4@teste.com",
            phone: "35998234567",
            password: "12345678",
            confirmPassword: "12345678"
        }
    });


    const onSubmit = handleSubmit(async (userData) => {
        const { confirmPassword, ...registerData } = userData;
        const mutationResponse = await userRegisterMutation.mutateAsync(registerData);
        setSession({
            user: mutationResponse.user,
            token: mutationResponse.token,
            refreshToken: mutationResponse.refreshToken
        });

    });

    console.log("User in RegisterView", user);


    return {
        control,
        onSubmit,
        errors

    }
}