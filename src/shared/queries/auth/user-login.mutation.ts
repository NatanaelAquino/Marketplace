import { useMutation } from "@tanstack/react-query"
import * as authService from "../../services/auths.service"
import { AuthResponse } from "../../interfaces/http/auth-response"
import { LoginHTTPRequest } from "../../interfaces/http/login"
import useUserStore from "../../store/user-store"

export const useLoginMutation = () => {

    const { setSession } = useUserStore();


    const mutation = useMutation({
        mutationFn: (userData: LoginHTTPRequest) => authService.login(userData),
        onSuccess: (data: AuthResponse) => {
            setSession(data);
        },
        onError: (error) => console.error("Error logging in user", error)
    })
    return mutation;
}