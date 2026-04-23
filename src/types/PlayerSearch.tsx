import {styles} from "@/src/StyleSheets/playersPage";
import {Ionicons} from "@expo/vector-icons";
import {TextInput, View} from "react-native";
import React from "react";

export function PlayerSearch({search, onSearch}){
    return (
        <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#94a0c8" />
            <TextInput
                value={search}
                onChangeText={(value)=> onSearch(value)}
                placeholder="Поиск игроков"
                placeholderTextColor="#7f8ab1"
                style={styles.searchInput}
            />
        </View>
    )
}