import { ImagePickerOptions } from "expo-image-picker"
import { useCallback, useState } from "react"
import * as ImagePicker from 'expo-image-picker';
import { Toast } from 'toastify-react-native'
import { Alert, Linking } from "react-native";


export const useGallery = (pikerOptions: ImagePickerOptions) => {

    const [isLoading, setIsLoading] = useState(false)



    const reuqestGalleryPermission = useCallback(async (): Promise<boolean> => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            const currentStatus = status === 'granted'
            if (!currentStatus) {
                Alert.alert(
                    'Permissão negada',
                    'Precisamos de preimissão para acessar sua galeria',
                    [
                        {
                            text: "Cacnelar",
                            style: "cancel"
                        },
                        {
                            text: "Abrir configurações",
                            onPress: () => {
                               Linking.openSettings()
                            }
                        }
                    ])
            }
            return status === 'granted'
        } catch (error) {
            Toast.error('Erro ao solicitar permissão', "top")
            return false
        }
    }, [])
    const openGallery = useCallback(async (): Promise<string | null> => {
        setIsLoading(true)
        try {
            const hasPermission = await reuqestGalleryPermission()

            if (!hasPermission) return null

            const result = await ImagePicker.launchImageLibraryAsync(pikerOptions);
            if (!result.canceled && result.assets && result.assets.length > 0) {
                Toast.success('Foto selecionada com sucesso', 'top')
                return result.assets[0].uri
            }

            return null
        } catch (error) {
            Toast.error('Erro ao slecionar a foto', "top")
            return null
        }
    }, [])
    return { openGallery, isLoading }
}