import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
export default function Login() {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="">login</Text>
            <TouchableOpacity onPress={() => router.push("/register")}>
                <Text >Register</Text>
            </TouchableOpacity>
        </View>
    )
}