import { styles } from "@/src/StyleSheets/clanMembers";
import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {MyClanMenuActions} from "@/src/components/CLanMember/MyClanMenuActions";
import {MyClanMenu} from "@/src/components/CLanMember/MyClanMenu";
import {useClanMemberModeration} from "@/src/hooks/Clan/useClanMemberModeration";

export function MyClanProfile({ member, isSmallPhone, type, rolePlayer, actions }) {
    const {menuOpen, setMenuOpen} = useClanMemberModeration(member);
    const openProfile = (pubg_id: string | number | undefined) => {
        if (!pubg_id) return;

        router.push({
            pathname: "/profile/[pubg_id]",
            params: { pubg_id: String(pubg_id) },
        });
    };

    const firstLetter = member?.name?.slice(0, 1)?.toUpperCase() || "?";

    return (
        <View style={styles.memberRow}>
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
                    </View>

                    <Text numberOfLines={1} style={styles.memberRowNick}>
                        @{member?.nickname || "unknown"}
                    </Text>

                    <Text numberOfLines={1} style={styles.memberRowMeta}>
                        ID {member?.pubg_id || "—"} • {member?.age || "—"} лет • {member?.city || "—"}
                    </Text>
                </View>
            </View>

            <View style={styles.memberActions}>

                {/* Иконка роли */}
                {member?.isLeader && (
                    <Ionicons name="trophy" size={18} color="#facc15" />
                )}

                {!member?.isLeader && member?.isModerator && (
                    <Ionicons name="shield-checkmark" size={18} color="#60a5fa" />
                )}

                <Pressable
                    style={styles.miniProfileButton}
                    onPress={() => openProfile(member?.pubg_id)}
                >
                    <Text style={styles.miniProfileButtonText}>Профиль</Text>
                </Pressable>

                <MyClanMenu member={member} type ={type} rolePlayer={rolePlayer} setMenuOpen={setMenuOpen} menuOpen={menuOpen} actions={actions} />
            </View>
        </View>
    );
}