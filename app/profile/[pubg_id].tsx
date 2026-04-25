import React, { useEffect, useState } from "react";
import {ActivityIndicator, Alert, Pressable, ScrollView, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { ProfileHeader } from "@/src/components/Profie/ProfileHeader";
import { styles } from "@/src/StyleSheets/profile";
import {BASE_URL} from "@/src/config/api";
import {useMemberProfile} from "@/src/hooks/Profile/useMemberProfile";
import {Ionicons} from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard"

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

const copyPubgId = async (pubgId: string) => {
    await Clipboard.setStringAsync(pubgId);
    Alert.alert("Скопировано", "PUBG ID скопирован в буфер");
};

export default function MemberProfileScreen() {
    const { pubg_id } = useLocalSearchParams<{ pubg_id: string }>();
    const {  member, loading, onPressMessage} =  useMemberProfile(pubg_id);

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
{/*
                        <View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>PUBG ID</Text>
                            <Text style={styles.simpleValue}>{member.pubg_id || "—"}</Text>
                        </View>*/}

                        <View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>PUBG ID</Text>

                            <View style={styles.simpleRight}>
                                <Text style={styles.simpleValue}>
                                    {member.pubg_id || "—"}
                                </Text>

                                <Pressable
                                    onPress={() => copyPubgId(member.pubg_id)}
                                    style={styles.copyIcon}
                                >
                                    <Ionicons name="copy-outline" size={16} color="#8fb0ff" />
                                </Pressable>
                            </View>
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
                        {/*<View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>Клан</Text>
                            <Text style={styles.simpleValue}>{member.clan_name || "Без клана"}</Text>
                        </View>*/}
                        <View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>Клан</Text>

                            <View style={styles.clanBadge}>
                                <Ionicons name="shield-checkmark-outline" size={15} color="#8fb0ff" />
                                <Text style={styles.clanBadgeText}>
                                    {member.clan_name || "Без клана"}
                                </Text>
                            </View>
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