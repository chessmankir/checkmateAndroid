import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuthStore } from "@/src/store/authStore";

export default function RootLayout() {
    const router = useRouter();
    const segments = useSegments();

    const { isAuth, isLoading, restoreAuth } = useAuthStore();

    useEffect(() => {
        restoreAuth();
    }, []);

    useEffect(() => {
        if (isLoading) return;
        if (isLoading) return;

        const inTabsGroup = segments[0] === "(tabs)";
        const inLoginPage = segments[0] === "login";

        if (!isAuth && !inLoginPage) {
            router.replace("/login");
            return;
        }

        if (isAuth && !inTabsGroup) {
            router.replace("/(tabs)/players");
        }
    }, [isAuth, isLoading, segments]);

    if (isLoading) {
        return (
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
        );
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" />
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}