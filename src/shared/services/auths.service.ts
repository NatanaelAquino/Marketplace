import { RegisterHTTPRequest } from "../interfaces/http/register";
import { baseURL, marketPlaceApiCliente } from "../api/market-place";
import { AuthResponse } from "../interfaces/http/auth-response";
import { LoginHTTPRequest } from "../interfaces/http/login";
import { UploadAvatarRequest } from "../interfaces/http/upload-avatar";
export const register = async (userData: RegisterHTTPRequest) => {
    const { data } = await marketPlaceApiCliente.post<AuthResponse>("/auth/register", userData);

    return data;
}

export const login = async (userData: LoginHTTPRequest) => {
    const { data } = await marketPlaceApiCliente.post<AuthResponse>("/auth/login", userData);

    return data;
}

export const uploadAvatar = async (avartar: string) => {

    const formData = new FormData();
    formData.append('avatar', {
        uri: avartar,
        type: 'image/jpeg',
        name: 'avatar.jpg'
    } as unknown as Blob);

    const { data } = await marketPlaceApiCliente.post<UploadAvatarRequest>("/user/avatar",
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    );


    data.url = `${baseURL}${data.url}`;

    return data
}