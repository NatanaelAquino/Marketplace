import { useRef, useState } from "react"
import { BlurEvent, FocusEvent, TextInput } from 'react-native'
import { colors } from "../../../styles/colors";



interface AppInputViewModelProps {
    isError?: boolean;
    isDisabled?: boolean;
    error?: string;
    secureTextEntry?: boolean;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    mask?: (text: string) => string | void
    onChangeText?: (text: string) => string | void
    value?: string
}

export const useAppInputViewModel = ({
    isError,
    isDisabled,
    error,
    secureTextEntry,
    onFocus,
    onBlur,
    mask,
    onChangeText,
    value
}: AppInputViewModelProps) => {

    const [showPassword, setShowPassword] = useState(secureTextEntry)
    const [isFocused, setIsFocused] = useState(false)

    const inputRef = useRef<TextInput>(null)

    const handlePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    const handleWrapperPress = () => {
        inputRef.current?.focus()
    }

    const handleFocus = (event: FocusEvent) => {
        setIsFocused(true)
        onFocus?.(event)
    }

    const handleBlur = (event: BlurEvent) => {
        setIsFocused(false)
        onBlur?.(event)
    }

    const getIconColor = () => {
        if (isError) return colors.danger
        if (isFocused) return colors["purple-base"]
        if (value) return colors["purple-base"]
        return colors.gray[200]
    }

    const handleChangeText = (text: string) => {
        if (mask) {
            onChangeText?.(mask(text) || text)
        } else {
            onChangeText?.(text)
        }
    }
    return {
        showPassword,
        isFocused,
        inputRef,
        handlePasswordVisibility,
        handleWrapperPress,
        handleFocus,
        handleBlur,
        getIconColor,
        handleChangeText
    }
}