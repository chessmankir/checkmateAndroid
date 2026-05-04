import { styles } from "@/src/StyleSheets/playersPage";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";
import React from "react";

export function PlayerSearch({ search, onSearch }) {
    const hasSearch = search.trim().length > 0;

    return (
        <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#94a0c8" />

            <View style={styles.inputWrap}>
                <TextInput
                    value={search}
                    onChangeText={(value) => onSearch(value)}
                    placeholder="Поиск игроков"
                    placeholderTextColor="#7f8ab1"
                    style={[
                        styles.searchInput,
                        hasSearch && styles.searchInputWithClear
                    ]}
                />

                {hasSearch && (
                    <Pressable
                        onPress={() => onSearch("")}
                        style={styles.clearButton}
                        hitSlop={10}
                    >
                        <Ionicons name="close-circle" size={20} color="#7f8ab1" />
                    </Pressable>
                )}
            </View>
        </View>
    );
}