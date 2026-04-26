import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuthStore } from "@/src/store/authStore";
import {SafeAreaView} from "react-native-safe-area-context";

export default function RootLayout() {
    const router = useRouter();
    const segments = useSegments();

    const { isAuth, isLoading, restoreAuth } = useAuthStore();

    useEffect(() => {
        restoreAuth();
    }, []);

    useEffect(() => {
        if (isLoading) return;

        const inLoginPage = segments[0] === "login";

        if (!isAuth && !inLoginPage) {
            router.replace("/login");
            return;
        }

        if (isAuth && inLoginPage) {
            router.replace("/(tabs)/players");
        }
    }, [isAuth, isLoading, segments]);

    if (isLoading) {
        return (
            <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#0b1220",
                    }}
                >
                    <ActivityIndicator size="large" />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" />
                <Stack.Screen name="(tabs)" />
            </Stack>
        </SafeAreaView>
    );
}