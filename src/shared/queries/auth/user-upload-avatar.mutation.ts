import { useMutation } from "@tanstack/react-query";
import { uploadAvatar } from "../../services/auths.service";
import { Toast } from "toastify-react-native";

export const useUploadAvatarMutation = () => {
    const mutation = useMutation({
        mutationFn: uploadAvatar,
        onSuccess: (response)=>{
            console.log(response);
        },
        onError: (error) => Toast.error("Error uploading da foto de perfil", "top")
    })
    return mutation;
}