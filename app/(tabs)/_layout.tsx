import {Tabs} from 'expo-router';
import React from 'react';

import {HapticTab} from '@/components/haptic-tab';
import {IconSymbol} from '@/components/ui/icon-symbol';
import {Colors} from '@/constants/theme';
import {useColorScheme} from '@/hooks/use-color-scheme';
import {Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={
                {
                    headerStyle: {backgroundColor: "#0f172a",},
                    headerTintColor: "#ffffff",
                    tabBarStyle: {
                        backgroundColor: "#0f172a",
                        borderTopColor: "#1e293b"
                    },
                    tabBarActiveTintColor: '#38bdf8',
                    tabBarInactiveTintColor: "#94q3b8",
                    sceneStyle: {
                        backgroundColor: "#020617",
                    },
                    headerRight: () => (
                        <Pressable
                            onPress={() => {
                                router.push('/login')
                            }}
                            style={{marginRight: 16}}>
                            <Ionicons name="log-in-outline" size={24} color="fffffff"/>
                        </Pressable>
                    ),
                }
            }
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Игроки",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="people-outline" size={24} color={color}/>
                    )
                }}
            />

            <Tabs.Screen
                name="clans"
                options={{
                    title: "Кланы",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="clans-outline" size={24} color={color}/>
                    )
                }}
            />

            <Tabs.Screen
                name="tournaments"
                options={{
                    title: "Игроки",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="tournaments-outline" size={24} color={color}/>
                    )
                }}
            />
        </Tabs>
    )
}
