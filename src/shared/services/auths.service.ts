import { RegisterHTTPRequest } from "../interfaces/http/register";
import { marketPlaceApiCliente } from "../api/market-place";
import { AuthResponse } from "../interfaces/http/auth-response";
import { LoginHTTPRequest } from "../interfaces/http/login";
export const register = async (userData: RegisterHTTPRequest) => {
    const { data } = await marketPlaceApiCliente.post<AuthResponse>("/auth/register", userData);

    return data;
}

export const login = async (userData: LoginHTTPRequest) => {
    const { data } = await marketPlaceApiCliente.post<AuthResponse>("/auth/login", userData);

    return data;
}