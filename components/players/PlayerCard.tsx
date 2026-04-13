import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { MemberType } from "@/src/types/MemberType";
import { styles } from "../../StyleSheets/PlayerCard.styles";

type Props = {
    member: MemberType;
    onProfilePress?: (member: MemberType) => void;
    onMessagePress?: (member: MemberType) => void;
};

export function PlayerCard({
                               member,
                               onProfilePress,
                               onMessagePress,
                           }: Props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardTop}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                        {member.nickname.charAt(0).toUpperCase()}
                    </Text>
                </View>

                <View style={styles.cardInfo}>
                    <View style={styles.nameRow}>
                        <Text style={styles.nickname}>{member.nickname}</Text>
                        <View
                            style={[
                                styles.statusDot,
                                member.online ? styles.statusOnline : styles.statusOffline,
                            ]}
                        />
                    </View>

                    <Text style={styles.role}>{member.role}</Text>
                    <Text style={styles.city}>{member.city}</Text>
                </View>

                <View style={styles.modeBadge}>
                    <Text style={styles.modeBadgeText}>{member.mode}</Text>
                </View>
            </View>

            <View style={styles.cardBottom}>
                <View style={styles.onlineBox}>
                    <Ionicons
                        name={member.online ? "radio" : "pause-circle-outline"}
                        size={16}
                        color="#94a3b8"
                    />
                    <Text style={styles.onlineText}>
                        {member.online ? "В сети" : "Не в сети"}
                    </Text>
                </View>

                <View style={styles.actionRow}>
                    <Pressable
                        style={styles.secondaryButton}
                        onPress={() => onProfilePress?.(member)}
                    >
                        <Text style={styles.secondaryButtonText}>Профиль</Text>
                    </Pressable>

                    <Pressable
                        style={styles.primaryButton}
                        onPress={() => onMessagePress?.(member)}
                    >
                        <Ionicons name="chatbubble-ellipses-outline" size={16} color="#08111f" />
                        <Text style={styles.primaryButtonText}>Написать</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}