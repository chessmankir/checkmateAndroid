import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Stack, useRouter, useSegments} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';
import {useAuthStore} from "@/src/store/authStore";
import {useEffect} from "react";
import {usePreLogin} from "@/src/hooks/Login/usePreLogin";
import {ActivityIndicator, View} from "react-native";

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootLayout() {
    console.log('Root Layout');
    usePreLogin();
    console.log('isLoading ',isLoading);
    const {isLoading} = useAuthStore();
    if(isLoading){
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0b1220" }}>
            <ActivityIndicator size="large" />
        </View>
    }
    return (
        <Stack screenOptions={{headerShown: false}}>
          {/*  <Stack.Screen name="login" />
            <Stack.Screen name="(tabs)" />*/}
        </Stack>
    );
}
