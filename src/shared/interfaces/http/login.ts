import { UserInterface } from "../user";

export interface LoginHTTPRequest {
    email: string;
    password: string;
}

export interface LoginHTTPResponse {
    user: UserInterface
    token: string;
    refreshToken: string;
}