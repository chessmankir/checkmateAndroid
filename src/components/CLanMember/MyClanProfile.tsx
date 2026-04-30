import {styles} from "@/src/StyleSheets/clanMembers";
import {Pressable, Text, View} from "react-native";
import React, {useState} from "react";
import {router} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import {MyClanMenuActions} from "@/src/components/CLanMember/MyClanMenuActions";
import {MyClanMenu} from "@/src/components/CLanMember/MyClanMenu";
import {useClanMemberModeration} from "@/src/hooks/Clan/useClanMemberModeration";
import {MyClanMemberActions} from "@/src/components/CLanMember/MyClanMemberActions";
import {MyClanActivity} from "@/src/components/CLanMember/MyClanActivity";

export function MyClanProfile({member, isSmallPhone, type, rolePlayer, actions}) {
    const {menuOpen, setMenuOpen} = useClanMemberModeration(member);
    const [activityOpen, setActivityOpen] = useState<boolean>(false);

    const openProfile = (pubg_id: string | number | undefined) => {
        if (!pubg_id) return;

        router.push({
            pathname: "/profile/[pubg_id]",
            params: {pubg_id: String(pubg_id)},
        });
    };
    const toogLeActivity = () => {
        setActivityOpen((prev) => !prev);
    }

    const firstLetter = member?.name?.slice(0, 1)?.toUpperCase() || "?";

    return (
        <Pressable
            style={styles.memberCard}
            onPress={toogLeActivity}
        >
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

                {type === "clanmember" && (
                    <MyClanMemberActions
                        member={member}
                        openProfile={openProfile}
                        rolePlayer={rolePlayer}
                        setMenuOpen={setMenuOpen}
                        menuOpen={menuOpen}
                        type={type}
                        actions={actions}
                    />
                )}
            </View>

            {activityOpen && type === "clanmember" && (
                <MyClanActivity member={member} />
            )}
        </Pressable>

    );
}