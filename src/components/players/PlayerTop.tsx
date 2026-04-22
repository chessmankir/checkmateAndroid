import {Text, View} from "react-native";
import React from "react";
import { styles } from "@/src/StyleSheets/PlayerCard.styles";

export function PlayerTop ({member}){
    console.log(member);
    return (
        <View style={styles.cardTop}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {member?.nickname.charAt(0).toUpperCase()}
                </Text>
            </View>

            <View style={styles.cardInfo}>
                <View style={styles.nameRow}>
                    <Text style={styles.nickname}>{member?.nickname}</Text>
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
    )
}