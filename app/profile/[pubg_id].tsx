import React, { useEffect, useState } from "react";
import {ActivityIndicator, Alert, Pressable, ScrollView, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { ProfileHeader } from "@/src/components/Profie/ProfileHeader";
import { styles } from "@/src/StyleSheets/profile";
import {useMemberProfile} from "@/src/hooks/Profile/useMemberProfile";
import {ProfileActivityBlock} from "@/src/hooks/Profile/ProfileActivityBlock";
import {ProfileMainInformation} from "@/src/hooks/Profile/ProfileMainInformation";
import {useAuthStore} from "@/src/store/authStore";

type MemberProfile = {
    id: number;
    nickname?: string;
    pubg_id?: string | number;
    name?: string;
    age?: number;
    city?: string;
    status_game?: string;
    modes?: string[];
};


export default function MemberProfileScreen() {
    const { pubg_id } = useLocalSearchParams<{ pubg_id: string }>();
    const {  member, loading, onPressMessage} =  useMemberProfile(pubg_id);
    const user = useAuthStore((state) => state.user);
    const isAdmin = (user?.isLeader || user?.isModerator) && (user.clan_id === member?.clan_id);

    if (loading) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <Stack.Screen options={{ headerShown: true, title: "Профиль" }} />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator />
                </View>
            </SafeAreaView>
        );
    }

    if (!member) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <Stack.Screen options={{ headerShown: true, title: "Профиль" }} />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#f8fafc", fontSize: 16 }}>Профиль не найден</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen options={{ headerShown: true, title: member.nickname || "Профиль" }} />

            <ScrollView
                style={styles.screen}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <ProfileHeader profileForm={member} />

                <ProfileMainInformation member={member} pubg_id={pubg_id} />
                {isAdmin && member?.activity && (
                    <ProfileActivityBlock member={member} />
                )}
                <Pressable onPress={onPressMessage} style={styles.messageButton}>
                    <Text style={styles.messageButtonText}>Написать</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}