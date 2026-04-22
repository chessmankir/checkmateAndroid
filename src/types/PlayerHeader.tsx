import {styles} from "@/src/StyleSheets/playersPage";
import {Pressable, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export function PlayerHeader({openFilters, hasActiveFilters}){
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Игроки</Text>

            <Pressable style={styles.filterIconButton} onPress={openFilters}>
                <Ionicons name="options-outline" size={22} color="#fff" />
                {hasActiveFilters && <View style={styles.redDot} />}
            </Pressable>
        </View>
    )
}