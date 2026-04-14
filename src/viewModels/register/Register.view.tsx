import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterView } from "./useRegister.view";
import { FC, useState } from "react";
import { AppInputController } from "../../shared/components/AppInputController";

export const RegisterView: FC<ReturnType<typeof useRegisterView>> = ({
    onSubmit,
    control
}) => {



    return (
        <View className="flex-1 items-center justify-center">
           <AppInputController 
            control={control}
            name="email"
            letIcon="mail-outline"
            label="E-mail"
           />


            <Text className="text-2xl font-bold">Register Screen</Text>
            <TouchableOpacity onPress={onSubmit} className="mt-4 bg-blue-500 px-4 py-2 rounded">
                <Text className="text-white">Register</Text>
            </TouchableOpacity>

        </View>
    )
}