import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/src/StyleSheets/profile";
import { ProfileHeader } from "@/src/components/Profie/ProfileHeader";
import { ProfileClanTab } from "@/src/components/CLanMember/ProfileClanTab";

type MemberProfile = {
    id: number;
    nickname?: string;
    pubg_id?: string;
    name?: string;
    age?: number;
    city?: string;
    status?: string;
    modes?: string[];
    clan_id?: number;
    clan_name?: string;
};

export default function MemberProfileScreen() {
    const { pubg_id } = useLocalSearchParams<{ pubg_id: string }>();
    console.log(pubg_id);
    const [member, setMember] = useState<MemberProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMember = async () => {
            try {
                const backend = `http://192.168.0.30:4000/api/members?pubg_id=${pubg_id}`;
                const response = await fetch(backend, {
                    credentials: "include",
                });
                const data = await response.json();

                if (data.ok) {
                    // если бэк возвращает массив
                    const currentMember = Array.isArray(data.data) ? data.data[0] : data.data;
                    setMember(currentMember ?? null);
                }
            } catch (e) {
                console.error(e);
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
            <SafeAreaView style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
                <ActivityIndicator />
            </SafeAreaView>
        );
    }

    if (!member) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ color: "#fff", fontSize: 16 }}>Профиль не найден</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
                <ProfileHeader profileForm={member} />

                <View style={styles.sectionCard}>
                    <Text style={styles.sectionTitle}>Основная информация</Text>
                    <Text style={styles.infoText}>Ник: {member.nickname || "—"}</Text>
                    <Text style={styles.infoText}>PUBG ID: {member.pubg_id || "—"}</Text>
                    <Text style={styles.infoText}>Имя: {member.name || "—"}</Text>
                    <Text style={styles.infoText}>Возраст: {member.age || "—"}</Text>
                    <Text style={styles.infoText}>Город: {member.city || "—"}</Text>
                    <Text style={styles.infoText}>Статус: {member.status || "—"}</Text>
                    <Text style={styles.infoText}>
                        Режимы: {member.modes?.length ? member.modes.join(", ") : "—"}
                    </Text>
                </View>

                <ProfileClanTab />
            </ScrollView>
        </SafeAreaView>
    );
}