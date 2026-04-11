import { useMutation } from "@tanstack/react-query"
import  * as authService from "../../services/auths.service"
import { RegisterHTTPRequest, RegisterHTTPResponse } from "../../interfaces/http/register"

export const useRegisterMutation = () => {
    const mutation = useMutation({
        mutationFn: (userData: RegisterHTTPRequest) => authService.register(userData),
        onSuccess: (data: RegisterHTTPResponse) => console.log("User registered successfully", data),
        onError: (error) => console.error("Error registering user", error)
    })
    return mutation;
}