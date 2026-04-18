import {Pressable, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/PlayerCard.styles";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {router} from "expo-router";

export function PlayerBottom({member}) {

    const onRouterProfile = (id) => {
        console.log(id);
        // router.push(`/profile/${id}`);
    }
    console.log(member);
    return (
        <View style={styles.cardBottom}>
            <View style={styles.onlineBox}>
                <Ionicons
                    name={member.online ? "radio" : "pause-circle-outline"}
                    size={16}
                    color="#94a3b8"
                />
                <Text style={styles.onlineText}>
                    {member.online ? "В сети2" : "Не в сети2"}
                </Text>
            </View>

            <View style={styles.actionRow}>
                <Pressable onPress={() => onRouterProfile(member.id)}
                    style={styles.secondaryButton}
                   /* onPress={() => onProfilePress?.(member)}*/
                >
                    <Text style={styles.secondaryButtonText}>Профиль</Text>
                </Pressable>

                <Pressable
                    style={styles.primaryButton}
                    /*onPress={() => onMessagePress?.(member)}*/
                >
                    <Ionicons name="chatbubble-ellipses-outline" size={16} color="#08111f" />
                    <Text style={styles.primaryButtonText}>Написать</Text>
                </Pressable>
            </View>
        </View>
    )
}