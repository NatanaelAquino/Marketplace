import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRegisterView } from "./useRegister.view";
import { FC } from "react";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/authFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { AppButton } from "../../shared/components/AppButton";
import { Ionicons } from "@expo/vector-icons";

export const RegisterView: FC<ReturnType<typeof useRegisterView>> = ({
    onSubmit,
    control,
    showSelection
}) => {


    return (
        <KeyboardContainer>
            <ScrollView className="flex-1 px-[40px]">
                <AuthFormHeader title="Criar Conta" subtitle="Preencha os dados abaixo para criar sua conta" />
                <AppInputController
                    control={control}
                    name="name"
                    leftIcon="person-outline"
                    label="Nome"
                />
                <TouchableOpacity onPress={()=>showSelection()}>
                    <Ionicons name="cloud-upload-outline" size={20} color="black" />
                </TouchableOpacity>
                <AppInputController
                    control={control}
                    name="phone"
                    leftIcon="call-outline"
                    label="Telefone"
                />

                <Text className="text-base mt-4 font-bold text-gray-500">Acessa</Text>
                <AppInputController
                    control={control}
                    name="email"
                    leftIcon="mail-outline"
                    label="E-mail"
                />

                <AppInputController
                    control={control}
                    name="password"
                    leftIcon="lock-closed-outline"
                    label="Senha"
                    secureTextEntry
                />

                <AppInputController
                    control={control}
                    name="confirmPassword"
                    leftIcon="lock-closed-outline"
                    label="Confirmar Senha"
                    secureTextEntry
                />
                <AppButton className="mt-6" onPress={onSubmit}  >
                    Criar Conta
                </AppButton>
                <View className="mt-16">
                    <Text className="text-base mb-6 text-gray-300"> Já tem uma conta? </Text>

                    <AppButton variant="outline" onPress={() => router.push("/login")} >
                        Login
                    </AppButton>
                </View>

            </ScrollView>
        </KeyboardContainer>
    )
}