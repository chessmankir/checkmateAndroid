import React from "react";
import { Pressable, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/src/StyleSheets/clanMembers";

type Props = {
    search: string;
    isPhone: boolean;
    handleSearch: (value: string) => void;
};

export function MyClanSearch({ search, isPhone, handleSearch }: Props) {
    const hasSearch = search.trim().length > 0;

    return (
        <View style={styles.searchCard}>
            <View style={styles.searchInputWrap}>
                <TextInput
                    placeholder="Поиск по имени, нику или PUBG ID"
                    placeholderTextColor="#7F8AA8"
                    value={search}
                    onChangeText={handleSearch}
                    style={[
                        styles.searchInput,
                        isPhone && styles.searchInputPhone,
                        hasSearch && styles.searchInputWithClear,
                    ]}
                />

                {hasSearch && (
                    <Pressable
                        onPress={() => handleSearch("")}
                        style={styles.clearSearchButton}
                        hitSlop={10}
                    >
                        <Ionicons name="close-circle" size={22} color="#7F8AA8" />
                    </Pressable>
                )}
            </View>
        </View>
    );
}