import {styles} from "@/src/StyleSheets/clanMembers";
import {Text, View} from "react-native";
import React from "react";

export function MyClanHeader({isPhone}) {
    return (
        <View style={styles.headerBlock}>
            <Text style={[styles.title, isPhone && styles.titlePhone]}>
                Участники кланов
            </Text>
            <Text style={styles.subtitle}>
                Управление составом, ролями и статусами участников
            </Text>
        </View>
    )
}