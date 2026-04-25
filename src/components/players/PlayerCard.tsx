import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import React from "react";
import { styles } from "@/src/StyleSheets/playersPage";
import { PlayerMode } from "@/src/types/PlayerMode";
import { PlayerStatus } from "@/src/types/PlayerStatus";

type PlayerType = {
    id: number;
    pubg_id: string;
    name: string;
    nickname: string;
    age: number;
    city: string;
    online: boolean;
    mode: PlayerMode;
    status: Exclude<PlayerStatus, "all">;
};

type Props = {
    member: PlayerType;
    isSmallPhone: boolean;
    getModeLabel: (mode?: PlayerMode | null) => string;
    getStatusLabel: (status?: PlayerStatus | null) => string;
};

const MODES: { key: PlayerMode; label: string }[] = [
    { key: "classic", label: "Классика" },
    { key: "metro", label: "Metro" },
    { key: "tdm", label: "TDM" },
    { key: "ultimate", label: "Ultimate Royale" },
];

function getModeLabel(mode?: PlayerMode | null) {
    return MODES.find((item) => item.key === mode)?.label ?? "";
}

export function PlayerCard({
                               member,
                               isSmallPhone,
                           }: Props) {
    const openProfile = (pubg_id: string | number | undefined) => {
        if (!pubg_id) return;

        router.push({
            pathname: "/profile/[pubg_id]",
            params: { pubg_id: String(pubg_id) },
        });
    };

    const firstLetter = member?.name?.slice(0, 1)?.toUpperCase() || "?";

    return (
        <View style={styles.playerCard}>
            <View style={styles.playerTop}>
                <View style={styles.playerLeft}>
                    <View style={styles.avatarCircle}>
                        <Text style={styles.avatarText}>{firstLetter}</Text>
                    </View>

                    <View style={styles.playerInfo}>
                        <View style={styles.nameRow}>
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.playerName,
                                    isSmallPhone && { fontSize: 16 },
                                ]}
                            >
                                {member?.name || "Без имени"}
                            </Text>

                            {member?.online && <View style={styles.onlineDot} />}

                            <View style={styles.modeInline}>
                                <Text style={styles.modeInlineText}>
                                    {getModeLabel(member?.mode)}
                                </Text>
                            </View>
                        </View>

                        <Text numberOfLines={1} style={styles.playerNick}>
                            @{member?.nickname || "unknown"}
                        </Text>

                        <Text numberOfLines={1} style={styles.playerMeta}>
                            ID {member?.pubg_id || "—"} • {member?.age || "—"} лет •{" "}
                            {member?.city || "—"}
                        </Text>

                        <Pressable
                            style={styles.profileButton}
                            onPress={() => openProfile(member?.pubg_id)}
                        >
                            <Text style={styles.profileButtonText}>Профиль</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}