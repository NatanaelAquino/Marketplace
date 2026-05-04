import { UserInterface } from "../user";

export interface RegisterHTTPRequest {
    name: string;
    email: string;
    avatarUrl?: string;
    phone: string;
    password: string;
}
