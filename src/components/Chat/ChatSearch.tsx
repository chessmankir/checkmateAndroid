import {TextInput, View} from "react-native";
import {styles} from "@/src/StyleSheets/chat";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export function ChatSearch({search, onSearch}){
    return (
        <View style={styles.searchWrap}>
            <Ionicons name="search-outline" size={18} color="#94a3b8" />
            <TextInput
                placeholder="Поиск..."
                placeholderTextColor="#94a3b8"
                value={search}
                onChangeText={(text)=>(onSearch(text))}
                style={styles.searchInput}
            />
        </View>
    )
}