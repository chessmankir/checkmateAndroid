import {Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/chat";
import React from "react";

export function ChatHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> Чаты </Text>
        </View>
    )
}