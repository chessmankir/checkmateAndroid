import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Stack, useRouter, useSegments} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';
import {useAuthStore} from "@/src/store/authStore";
import {useEffect} from "react";
import {useLogin} from "@/src/hooks/Login/useLogin";
import {ActivityIndicator, View} from "react-native";

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootLayout() {
    useLogin();
    const {isLoading} = useAuthStore();
    if(isLoading){
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0b1220" }}>
            <ActivityIndicator size="large" />
        </View>
    }
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="login" />
        </Stack>
    );
}
