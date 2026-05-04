import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { ButtonVariantsProps, buttonVatriants } from "./button.variants"
import { FC } from "react"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../../styles/colors"


interface AppButtonProps extends TouchableOpacityProps, ButtonVariantsProps {
    leftIcon?: keyof typeof Ionicons.glyphMap
    rightIcon?: keyof typeof Ionicons.glyphMap
    children: string

}

export const AppButton: FC<AppButtonProps> = ({
    className,
    leftIcon,
    rightIcon,
    children,
    isDisabled,
    isLoading,
    variant = "field",
    ...rest
}) => {
    const contentColor = variant === "field" ? colors.white : colors["purple-base"]

    const styles = buttonVatriants({
        hasIcon: !!leftIcon || !!rightIcon,
        isDisabled,
        isLoading,
        variant
    })

    const renderContent = () => {
        if (isLoading) {
            return (<>
                <ActivityIndicator
                    size={"small"}
                    color={contentColor}
                />
            </>
            )
        }

        return (<>
            {leftIcon && <Ionicons name={leftIcon} size={20} color={contentColor} />}
            <Text className={styles.text()}>{children}</Text>
            {rightIcon && <Ionicons name={rightIcon} size={20} color={contentColor} />}
        </>
        )
    }

    return (
        <TouchableOpacity className={styles.base({ className })} {...rest} >
            {renderContent()}
        </TouchableOpacity>
    )
}