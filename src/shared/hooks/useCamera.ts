import { useCallback, useState } from "react"
import * as ImagePicker from 'expo-image-picker';
import { Toast } from 'toastify-react-native'
interface UseCameraOptions {
    aspect?: [number, number],
    quality?: number,
    allowsEditing?: boolean
    exif?: boolean
}

export const useCamera = ({
    allowsEditing,
    aspect,
    quality,
    exif
}: UseCameraOptions) => {

    const [isLoading, setIsLoading] = useState(false)

    const requestCameraPermission = useCallback(async (): Promise<boolean> => {
        try {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            const currentStatus = status === 'granted'
            if (!currentStatus) {
                Toast.error('Precisamos de permissão para acessar sua câmera', 'top')
            }
            return status === 'granted'
        } catch (error) {
            Toast.error('Erro ao solicitar permissão', "top")
            return false
        }
    }, [])
    const openCamera = useCallback(async (): Promise<string | null> => {
        setIsLoading(true)
        try {
            const hasPermission = await requestCameraPermission()

            if (!hasPermission) return null

            const result = await ImagePicker.launchCameraAsync({
                allowsEditing,
                aspect,
                quality,
                exif
            })
            if (!result.canceled && result.assets && result.assets.length > 0) {
                Toast.success('Foto capturada com sucesso', 'top')
                return result.assets[0].uri
            }
            return null
        } catch (error) {
            Toast.error('Error ao abrir la cámara', "top")
            return null
        } finally {
            setIsLoading(false)
        }
    }, [])


    return { requestCameraPermission, openCamera, isLoading }
}