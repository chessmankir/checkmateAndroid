import {styles} from "@/src/StyleSheets/playersPage";
import {Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export function PlayerCardBottom({ member }) {
    const modes = Array.isArray(member.modes) ? member.modes : [];
    return (
        <View style={styles.playerBottom}>
            {modes.map((mode, i) => (
            <View key={i} style={styles.smallChip}>
                <Text style={styles.smallChipText}>
                    {mode}
                </Text>
            </View>
        ))}

            {member.status_game != null  &&
                <View style={styles.statusChip}>
                    <Ionicons name="flash" size={14} color="#87a8ff"/>
                    <Text style={styles.statusChipText}>
                        {member?.status_game}
                    </Text>
                </View>
            }
        </View>
    )
}