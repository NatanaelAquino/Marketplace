import { useForm } from "react-hook-form"
import { LoginData, loginSheme } from "./login.sheme"
import { yupResolver } from "@hookform/resolvers/yup"
import { useLoginMutation } from "../../shared/queries/auth/user-login.mutation"
import useUserStore from "../../shared/store/user-store"

export const useLoginViewModel = () => {


    const {user} = useUserStore();

    const { control, handleSubmit } = useForm<LoginData>({
        resolver: yupResolver(loginSheme),
        defaultValues: {
            email: "",
            password: ""
        }
    })


    const loginMutation = useLoginMutation();

    const onSubmit = handleSubmit(async (userFomaData: LoginData) => {
        const userData = await loginMutation.mutate(userFomaData)
    });


    return { control, onSubmit }
}
