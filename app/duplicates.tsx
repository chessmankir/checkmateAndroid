// app/duplicates.tsx
import React from "react";
import {
    ActivityIndicator,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useDuplicatesCard } from "@/src/hooks/Cards/useDuplicatesCard";

export default function DuplicatesScreen() {
    const router = useRouter();
    const { card, members, loading } = useDuplicatesCard();

    if (loading) {
        return (
            <SafeAreaView style={styles.safe}>
            <View style={styles.loadingWrap}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Загрузка дубликатов...</Text>
        </View>
        </SafeAreaView>
    );
    }

    return (
        <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
        <Text style={styles.title}>Дубликаты карточки</Text>
    <Text style={styles.subtitle}>
        Пользователи, у которых есть дубликаты выбранной карточки
    </Text>
    </View>

    {card && (
        <View style={styles.selectedCard}>
        <Image source={{ uri: card.imageSrc }} style={styles.selectedImage} />
    <View style={styles.selectedInfo}>
    <Text style={styles.selectedName}>{card.name}</Text>
        <Text style={styles.selectedAlbum}>
        Альбом: {card.album_name ?? "—"}
        </Text>
        </View>
        </View>
    )}

    <View style={styles.list}>
        {members.map((member) => (
                <View key={member.id} style={styles.memberCard}>
            <View style={styles.memberTop}>
                {card && (
                    <Image
                        source={{ uri: card.imageSrc }}
    style={styles.cardImage}
    />
)}

    <View style={styles.memberTopInfo}>
    <Text style={styles.cardTitle}>
        {card?.name ?? "Карточка не выбрана"}
    </Text>
    <Text style={styles.memberName}>
        {member.name || "Без имени"}
        </Text>
        <Text style={styles.memberNickname}>
        Ник: {member.nickname || "—"}
    </Text>
    </View>
    </View>

    <View style={styles.section}>
    <Text style={styles.sectionTitle}>Ищет:</Text>

    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.wantsRow}
        >
        {member.missing_cards?.length ? (
                    member.missing_cards.map((want) => (
                        <Image
                            key={want.id}
                source={{ uri: want.imageSrc }}
    style={styles.wantImage}
    />
))
) : (
        <Text style={styles.emptyText}>Нет данных</Text>
)}
    </ScrollView>
    </View>

    <Pressable
    style={styles.profileButton}
    onPress={() => router.push(`/profile/${member.pubg_id}`)}
>
    <Text style={styles.profileButtonText}>Открыть профиль</Text>
    </Pressable>
    </View>
))}
    </View>
    </ScrollView>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#0b1220",
    },
    content: {
        padding: 16,
        paddingBottom: 32,
    },
    loadingWrap: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    loadingText: {
        color: "#fff",
        fontSize: 16,
    },
    header: {
        marginBottom: 16,
    },
    title: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "700",
        marginBottom: 6,
    },
    subtitle: {
        color: "#94a3b8",
        fontSize: 14,
        lineHeight: 20,
    },
    selectedCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#111827",
        borderRadius: 18,
        padding: 14,
        marginBottom: 18,
    },
    selectedImage: {
        width: 84,
        height: 112,
        borderRadius: 12,
        marginRight: 14,
        backgroundColor: "#1f2937",
    },
    selectedInfo: {
        flex: 1,
    },
    selectedName: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 6,
    },
    selectedAlbum: {
        color: "#94a3b8",
        fontSize: 14,
    },
    list: {
        gap: 14,
    },
    memberCard: {
        backgroundColor: "#111827",
        borderRadius: 18,
        padding: 14,
    },
    memberTop: {
        flexDirection: "row",
        marginBottom: 14,
    },
    cardImage: {
        width: 64,
        height: 86,
        borderRadius: 10,
        marginRight: 12,
        backgroundColor: "#1f2937",
    },
    memberTopInfo: {
        flex: 1,
        justifyContent: "center",
    },
    cardTitle: {
        color: "#e2e8f0",
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 6,
    },
    memberName: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 4,
    },
    memberNickname: {
        color: "#94a3b8",
        fontSize: 14,
    },
    section: {
        marginBottom: 14,
    },
    sectionTitle: {
        color: "#cbd5e1",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
    },
    wantsRow: {
        gap: 8,
        alignItems: "center",
    },
    wantImage: {
        width: 52,
        height: 70,
        borderRadius: 8,
        backgroundColor: "#1f2937",
    },
    emptyText: {
        color: "#64748b",
        fontSize: 14,
    },
    profileButton: {
        backgroundColor: "#2563eb",
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: "center",
    },
    profileButtonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "700",
    },
});