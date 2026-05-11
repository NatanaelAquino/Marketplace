import { useCallback, useState } from "react"
import * as ImagePicker from 'expo-image-picker';
import { Toast } from 'toastify-react-native'
import {ImagePickerOptions} from "expo-image-picker"
export const useCamera = (pikerOptions: ImagePickerOptions) => {

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

            const result = await ImagePicker.launchCameraAsync(pikerOptions)
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