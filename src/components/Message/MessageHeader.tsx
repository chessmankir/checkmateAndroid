import {styles} from "@/src/StyleSheets/message";
import {Pressable, Text, View} from "react-native";
import {router} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {formatLastSeen} from "@/src/libs/DateUtils";

export function MessageHeader({ conversation }) {
    const isOnline = conversation?.is_online;

    return (
        <View style={styles.header}>
            <Pressable style={styles.backBtn} onPress={() => router.back()}>
                <Ionicons name="chevron-back" size={24} color="#fff" />
            </Pressable>

            <View style={styles.headerInfo}>
                <View style={styles.headerNameRow}>
                    {isOnline && <View style={styles.onlineDot} />}
                    <Text style={styles.headerName}>{conversation?.nickname}</Text>
                </View>

                {/* Показываем только если НЕ онлайн */}
                {!isOnline && (
                    <Text style={styles.headerStatus}>
                        {formatLastSeen(conversation?.last_seen_at)}
                    </Text>
                )}
            </View>
        </View>
    );
}