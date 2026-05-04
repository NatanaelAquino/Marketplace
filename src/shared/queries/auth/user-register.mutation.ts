import { useMutation } from "@tanstack/react-query"
import  * as authService from "../../services/auths.service"
import { RegisterHTTPRequest } from "../../interfaces/http/register"
import { AuthResponse } from "../../interfaces/http/auth-response"

export const useRegisterMutation = () => {
    const mutation = useMutation({
        mutationFn: (userData: RegisterHTTPRequest) => authService.register(userData),
        onSuccess: (data: AuthResponse) => console.log("User registered successfully", data),
        onError: (error) => console.error("Error registering user", error)
    })
    return mutation;
}