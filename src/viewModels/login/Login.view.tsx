import { FC } from "react";
import { Text, View } from "react-native";
import { AuthFormHeader } from "../../shared/components/authFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AppButton } from "../../shared/components/AppButton";
import { register } from "../../shared/services/auths.service";
import Register from "../../app/register";
import { router } from "expo-router";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
    control,
    onSubmit
}) => {

    return (
        <KeyboardContainer >
            <View className="flex-1 items-center justify-center px-[40px]">
                <View className="flex-1 w-full items-center justify-center">

                    <AuthFormHeader title="Bem-vindo(a)" subtitle="Faça login para continuar" />
                    <AppInputController
                        control={control}
                        name="email"
                        leftIcon="mail-outline"
                        placeholder="email@exemple.com.br"
                        label="E-mail"
                    />
                    <AppInputController
                        control={control}
                        name="password"
                        leftIcon="lock-closed-outline"
                        placeholder="••••••••"
                        label="Senha"
                        secureTextEntry
                    />

                    <AppButton
                        className="mt-6"
                        rightIcon="arrow-forward-outline"
                        onPress={onSubmit}>
                        Acessar
                    </AppButton>
                </View>

                <View className="flex-2 pb-16">
                    <Text className="text-base mb-6 text-gray-300"> Não tem uma conta? </Text>

                    <AppButton
                        variant="outline"
                        rightIcon="arrow-forward-outline"
                        onPress={() => { router.push("/register") }}>
                        Registro
                    </AppButton>
                </View>

            </View>
        </KeyboardContainer>
    )
}