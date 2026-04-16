import {styles} from "@/src/StyleSheets/clanMembers";
import {Pressable, Text, View} from "react-native";
import React from "react";
export function MyClanProfile({member, isSmallPhone}){
    return (
        <Pressable style={styles.memberRow}>
            <View style={styles.memberRowLeft}>
                <View style={styles.avatarCircle}>
                    <Text style={styles.avatarText}>
                        {member.name.slice(0, 1).toUpperCase()}
                    </Text>
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
                            {member.name}
                        </Text>
                        {member.online && <View style={styles.onlineDot} />}
                    </View>

                    <Text numberOfLines={1} style={styles.memberRowNick}>
                        @{member.nickname}
                    </Text>

                    <Text numberOfLines={1} style={styles.memberRowMeta}>
                        ID {member.pubg_id} • {member.age} лет • {member.city}
                    </Text>
                </View>
            </View>

            <Pressable style={styles.miniProfileButton}>
                <Text style={styles.miniProfileButtonText}>Профиль</Text>
            </Pressable>
        </Pressable>
    )
}