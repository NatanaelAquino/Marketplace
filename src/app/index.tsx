import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
export default function App() {
    return (
        <View>
            <Text>App</Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
                <Text className="text-purple-base">Login</Text>
            </TouchableOpacity>
        </View>
    );
}