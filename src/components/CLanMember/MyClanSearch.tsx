import {Text, TextInput, View} from "react-native";
import {styles} from "@/src/StyleSheets/clanMembers";
import React from "react";

export function MyClanSearch({search, isPhone, setSearch}){
    return (
        <View style={styles.searchCard}>
            <TextInput
                placeholder="Поиск по имени, нику или PUBG ID"
                placeholderTextColor="#7F8AA8"
                value={search}
                onChangeText={setSearch}
                style={[styles.searchInput, isPhone && styles.searchInputPhone]}
            />

            {/*<Text style={styles.totalText}>Показано: {filteredMembers.length}</Text>*/}
        </View>
    )
}