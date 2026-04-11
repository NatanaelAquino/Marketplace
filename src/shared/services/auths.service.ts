import { RegisterHTTPRequest, RegisterHTTPResponse } from "../interfaces/http/register";
import {  marketPlaceApiCliente } from "../api/market-place";
export const register = async (userData: RegisterHTTPRequest) => {
    const {data} = await marketPlaceApiCliente.post<RegisterHTTPResponse>("/auth/register", userData);

    return data;
}