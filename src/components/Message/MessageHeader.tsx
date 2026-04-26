import {styles} from "@/src/StyleSheets/message";
import {Pressable, Text, View} from "react-native";
import {router} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {formatLastSeen} from "@/src/libs/DateUtils";

export function MessageHeader({ conversation }) {
    const isOnline = conversation?.is_online;

    const onGoProfile = () =>{
        router.push({
            pathname: "/profile/[pubg_id]",
            params: { pubg_id: String(conversation.pubg_id) },
        });
    }

    return (
        <View style={styles.header}>
            <Pressable style={styles.backBtn} onPress={() => router.back()}>
                <Ionicons name="chevron-back" size={24} color="#fff" />
            </Pressable>

            <Pressable onPress={() => onGoProfile()}>
                <View style={styles.headerInfo}>
                    <View style={styles.headerNameRow}>
                        {isOnline && <View style={styles.onlineDot}/>}
                        <Text style={styles.headerName}>{conversation?.nickname}</Text>
                    </View>
                    {!isOnline && (
                        <Text style={styles.headerStatus}>
                            {formatLastSeen(conversation?.last_seen_at)}
                        </Text>
                    )}
                </View>
        </Pressable>
        </View>
    );
}