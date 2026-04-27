import { styles } from "@/src/StyleSheets/clanMembers";
import {Pressable, Text, View} from "react-native";
import React from "react";

export function MyClanMenuActions({member, actions}){
    return (
        <View style={styles.memberDropdown}>
            {!member.isLeader && (
                <Pressable style={styles.memberDropdownItem} onPress={member.isModerator ? () => actions.removeModerator(member) : () => actions.makeModerator(member)}>
                    <Text style={styles.memberDropdownText}>{member.isModerator ?  `Снять зама` : `Назначить замом` }</Text>
                </Pressable>
            )}

            {!member.isLeader && (
                <Pressable style={styles.memberDropdownItem} onPress={() => actions.handleMakeLeader(member)}>
                    <Text style={styles.memberDropdownText}>Назначить лидером</Text>
                </Pressable>
            )}

            <Pressable style={styles.memberDropdownItem} onPress={() =>  actions.banMember(member)}>
                <Text style={styles.memberDropdownBanText}>БАН</Text>
            </Pressable>
        </View>
    )
}