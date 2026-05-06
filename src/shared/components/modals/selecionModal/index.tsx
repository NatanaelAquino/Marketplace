import { View, Text, TouchableOpacity } from "react-native"
import { SelectionOption, SelectionVariant } from "../../../hooks/useAppModal"
import { FC } from "react"
import { Ionicons } from "@expo/vector-icons"
import clsx from "clsx"
import { colors } from "../../../../styles/colors"


export interface SelectioModalProps {
    title: string
    message?: string
    option: SelectionOption[]
}

export const SelectionModal: FC<SelectioModalProps> = (
    {
        title,
        message,
        option
    }
) => {
    const getButtonClass = (variant: SelectionVariant) => clsx("w-full py-3 px-4 rounded-lg items-center justify-center mb-2 flex-row",
        {   
            "bg-danger": variant === "danger",
            "bg-blue-dark": variant === "secondary",
            "bg-purble-base": variant === "primary"
        }
    )


    return (
        <View className="bg-white rounded-xl shadow-2xl w-[85%] mx-auto max-w-sm p-6 ">
            <View className="items-center ">
                <Text className="text-lg font-bold text-gray-900 mb-3">
                    {title}

                </Text>
                {message && <Text className="text-base text-gray-600 mb-6 leading-6">{message}</Text>}
            </View>
            <View className="gap-3">
                {
                    option.map((item, index) => (
                        <TouchableOpacity key={index} onPress={item.onPress}
                            className={getButtonClass(item.variant ?? "primary")}>
                            {item.icon && <Ionicons name={item.icon} size={20} color={colors.white} 
                            className="mr-2"/>}
                            <Text className="font-semibold text-white ">{item.text}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}