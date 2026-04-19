import React, { useEffect, useState } from "react";
import {ActivityIndicator, Pressable, ScrollView, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { ProfileHeader } from "@/src/components/Profie/ProfileHeader";
import { styles } from "@/src/StyleSheets/profile";

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

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export default function MemberProfileScreen() {
    const { pubg_id } = useLocalSearchParams<{ pubg_id: string }>();
    const [member, setMember] = useState<MemberProfile | null>(null);
    const [loading, setLoading] = useState(true);

    const onPressMessage = () => {
        console.log("onPressMessage");
    }

    useEffect(() => {
        const loadMember = async () => {
            try {
                const response = await fetch(
                    `${BASE_URL}/api/members?pubg_id=${pubg_id}`,
                    {
                        credentials: "include",
                    }
                );

                const data = await response.json();
                console.log(data);
                if (data.ok) {
                    const currentMember = Array.isArray(data.data) ? data.data[0] : data.data;
                    setMember(currentMember ?? null);
                }
            } catch (error) {
                console.log("profile load error", error);
            } finally {
                setLoading(false);
            }
        };

        if (pubg_id) {
            loadMember();
        }
    }, [pubg_id]);

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

                <View style={styles.sectionCard}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Основная информация</Text>
                        <Text style={styles.sectionSubtitle}>
                            Данные участника
                        </Text>
                    </View>

                    <View style={styles.simpleList}>
                        <View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>Ник</Text>
                            <Text style={styles.simpleValue}>{member.nickname || "—"}</Text>
                        </View>

                        <View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>PUBG ID</Text>
                            <Text style={styles.simpleValue}>{member.pubg_id || "—"}</Text>
                        </View>

                        <View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>Имя</Text>
                            <Text style={styles.simpleValue}>{member.name || "—"}</Text>
                        </View>

                        <View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>Возраст</Text>
                            <Text style={styles.simpleValue}>
                                {member.age ? `${member.age}` : "—"}
                            </Text>
                        </View>

                        <View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>Город</Text>
                            <Text style={styles.simpleValue}>{member.city || "—"}</Text>
                        </View>

                        {/*<View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>Статус</Text>
                            <Text style={styles.simpleValue}>{member.status_game || "—"}</Text>
                        </View>*/}

                        <View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>Режимы</Text>
                            <Text style={styles.simpleValue}>
                                {member.modes?.length ? member.modes.join(", ") : "—"}
                            </Text>
                        </View>
                    </View>
                </View>
                <Pressable onPress={onPressMessage} style={styles.messageButton}>
                    <Text style={styles.messageButtonText}>Написать</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}