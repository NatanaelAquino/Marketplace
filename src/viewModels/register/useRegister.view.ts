import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterData, registerSheme } from "./register.sheme";
import { useRegisterMutation } from "../../shared/queries/auth/user-register.mutation";
import useUserStore from "../../shared/store/user-store";
import { useAppModal } from "../../shared/hooks/useAppModal";
import { useImage } from "../../shared/hooks/useImage";
import { useState } from "react";
import { CameraType } from "expo-image-picker";
import { useUploadAvatarMutation } from "../../shared/queries/auth/user-upload-avatar.mutation";

export const useRegisterView = () => {

    const { setSession, updateUser } = useUserStore();
    const [avatar, setAvatar] = useState<string | null>(null);

    const modals = useAppModal();
    const { handleSelectImage } = useImage({
        callback: setAvatar,
        cameraType: CameraType.front,
    });
    const showSelection = async () => await handleSelectImage();

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterData>({
        resolver: yupResolver(registerSheme),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: ""
        }
    });

    const uploadAvatarMutation = useUploadAvatarMutation();

    const userRegisterMutation = useRegisterMutation({
        onSuccess: async () => {
            if (avatar) {
                const { url } = await uploadAvatarMutation.mutateAsync(avatar);
                updateUser({ avatarUrl: url });
            }
        }
    });

    const onSubmit = handleSubmit(async (userData) => {
        const { confirmPassword, ...registerData } = userData;
        await userRegisterMutation.mutateAsync(registerData);
    });

    return {
        control,
        onSubmit,
        errors,
        showSelection,
        avatar

    }
}