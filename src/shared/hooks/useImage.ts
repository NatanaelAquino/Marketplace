import { useModalStore } from "../store/modal-store";
import { useAppModal } from "./useAppModal";
import { useCamera } from "./useCamera";
import { useGallery } from "./useGalery";
import { ImagePickerOptions } from "expo-image-picker"

interface UseImageParams extends ImagePickerOptions {
    callback: (url: string | null) => void
}
export const useImage = ({ callback, ...pikerOptions }: UseImageParams) => {

    const { openCamera, isLoading: cameraLoading } = useCamera(pikerOptions);
    const { openGallery, isLoading: galleryLoading } = useGallery(pikerOptions);

    const isLoading = Boolean(cameraLoading || galleryLoading);

    const { close } = useModalStore();

    const handleCallback = (url: string | null) => {
        close();
        callback?.(url);
    }

    const modals = useAppModal();

    const handleSelectImage = () => modals.showSelection(
        {
            title: "Modal de seleção",
            options: [
                {
                    text: "Galeria",
                    icon: "images",
                    variant: "primary",
                    onPress: async () => {
                        const url = await openGallery()
                        handleCallback(url)
                    }
                },
                {
                    text: "Câmera",
                    icon: "camera",
                    variant: "primary",
                    onPress: async () => {
                        const url = await openCamera()
                        handleCallback(url)
                    }
                },
            ]
        }
    );
    return { handleSelectImage, isLoading }
}