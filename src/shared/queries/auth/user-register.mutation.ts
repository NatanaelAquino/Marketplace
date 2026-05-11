import { useMutation } from "@tanstack/react-query"
import * as authService from "../../services/auths.service"
import { RegisterHTTPRequest } from "../../interfaces/http/register"
import { AuthResponse } from "../../interfaces/http/auth-response"
import useUserStore from "../../store/user-store"

interface UserRegisterMutationParams {
    onSuccess?: () => void
}

export const useRegisterMutation = ({ onSuccess }: UserRegisterMutationParams = {}) => {

    const { setSession } = useUserStore()
    const mutation = useMutation({
        mutationFn: (userData: RegisterHTTPRequest) => authService.register(userData),
        onSuccess: (response) => {
            setSession({
                user: response.user,
                token: response.token,
                refreshToken: response.refreshToken
            });
        }
        ,
        onError: (error) => console.error("Error registering user", error)

    })
    return mutation;
}