import {styles} from "@/src/StyleSheets/message";
import {Pressable, Text, View} from "react-native";
import {router} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export function MessageHeader({conversation}){
    return (
        <View style={styles.header}>
            <Pressable style={styles.backBtn} onPress={() => router.back()}>
                <Ionicons name="chevron-back" size={24} color="#fff" />
            </Pressable>

            <View style={styles.headerInfo}>
                <Text style={styles.headerName}>{conversation?.nickname}</Text>
               {/* <Text style={styles.headerStatus}>{user.lastSeen}</Text>*/}
            </View>
        </View>
    )
}