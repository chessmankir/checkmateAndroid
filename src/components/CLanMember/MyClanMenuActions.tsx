import { styles } from "@/src/StyleSheets/clanMembers";
import {Pressable, Text, View} from "react-native";
import React from "react";

export function MyClanMenuActions({handleMakeModerator, handleMakeLeader, handleBan}){
    return (
        <View style={styles.memberDropdown}>
            <Pressable style={styles.memberDropdownItem} onPress={handleMakeModerator}>
                <Text style={styles.memberDropdownText}>Назначить замом</Text>
            </Pressable>

            <Pressable style={styles.memberDropdownItem} onPress={handleMakeLeader}>
                <Text style={styles.memberDropdownText}>Назначить лидером</Text>
            </Pressable>

            <Pressable style={styles.memberDropdownItem} onPress={handleBan}>
                <Text style={styles.memberDropdownBanText}>БАН</Text>
            </Pressable>
        </View>
    )
}