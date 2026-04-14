import React from "react";
import { Tabs, router } from "expo-router";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#0b1220",
                },
                headerShadowVisible: false,
                headerTintColor: "#f8fafc",
                sceneStyle: {
                    backgroundColor: "#0b1220",
                },
                tabBarStyle: {
                    backgroundColor: "#111827",
                    borderTopColor: "#1f2937",
                    height: 68,
                    paddingTop: 8,
                    paddingBottom: 8,
                },
                tabBarActiveTintColor: "#60a5fa",
                tabBarInactiveTintColor: "#94a3b8",
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                },
                headerRight: () => (
                    <Pressable
                        onPress={() => router.push("/login")}
                        style={{ marginRight: 16 }}
                    >
                        <Ionicons name="person-circle-outline" size={28} color="#f8fafc" />
                    </Pressable>
                ),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Игроки",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people-outline" size={size} color={color} />
                    ),
                }}
            />

           <Tabs.Screen
                name="profile"
                options={{
                    title: "Профиль",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="shield-outline" size={size} color={color} />
                    ),
                }}
            />
            {/*
            <Tabs.Screen
                name="tournaments"
                options={{
                    title: "Турниры",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="trophy-outline" size={size} color={color} />
                    ),
                }}
            />*/}
        </Tabs>
    );
}