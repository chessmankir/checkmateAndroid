import {router} from "expo-router";
import {Pressable, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {styles} from "@/src/StyleSheets/playersPage";
import {PlayerMode} from "@/src/types/PlayerMode";
import {PlayerStatus} from "@/src/types/PlayerStatus";

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

export function PlayerCard({
                               member,
                               isSmallPhone,
                               getModeLabel,
                               getStatusLabel
                           }: {
    member: PlayerType;
    isSmallPhone: boolean;
    getModeLabel: (mode?: PlayerMode | null) => void;
    getStatusLabel: (status?: PlayerStatus | null) => void;
}) {
    console.log("member");
    console.log(member);
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
            <View style={styles.playerCardTop}>
                <View style={styles.memberRowLeft}>
                    <View style={styles.avatarCircle}>
                        <Text style={styles.avatarText}>{firstLetter}</Text>
                    </View>

                    <View style={styles.memberRowInfo}>
                        <View style={styles.nameRow}>
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.memberRowName,
                                    isSmallPhone && styles.memberRowNameSmall,
                                ]}
                            >
                                {member?.name || "Без имени"}
                            </Text>

                            {member?.online && <View style={styles.onlineDot} />}
                        </View>

                        <Text numberOfLines={1} style={styles.memberRowNick}>
                            @{member?.nickname || "unknown"}
                        </Text>

                        <Text numberOfLines={1} style={styles.memberRowMeta}>
                            ID {member?.pubg_id || "—"} • {member?.age || "—"} лет •{" "}
                            {member?.city || "—"}
                        </Text>
                    </View>
                </View>

                <Pressable
                    style={styles.miniProfileButton}
                    onPress={() => openProfile(member?.pubg_id)}
                >
                    <Text style={styles.miniProfileButtonText}>Профиль</Text>
                </Pressable>
            </View>

            <View style={styles.cardBottom}>
              {/*  <View style={styles.tagsRow}>
                    {member?.modes.map((mode) => (
                        <View key={mode} style={styles.tagChip}>
                            <Text style={styles.tagChipText}>{getModeLabel(mode)}</Text>
                        </View>
                    ))}
                </View>*/}

                <View style={styles.statusBadge}>
                    <Ionicons name="flash" size={14} color="#87a8ff" />
                    <Text style={styles.statusBadgeText}>
                        {getStatusLabel(member.status)}
                    </Text>
                </View>
            </View>
        </View>
    );
}