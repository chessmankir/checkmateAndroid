import {Pressable, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/clanMembers";
import {Ionicons} from "@expo/vector-icons";
import {MyClanMenu} from "@/src/components/CLanMember/MyClanMenu";
import React from "react";

export function MyClanMemberActions({member, openProfile, rolePlayer, setMenuOpen, menuOpen, type, actions}){
    return (
        <View style={styles.memberActions}>

            {/* Иконка роли */}
            {member?.isLeader && (
                <Ionicons name="trophy" size={18} color="#facc15"/>
            )}

            {!member?.isLeader && member?.isModerator && (
                <Ionicons name="shield-checkmark" size={18} color="#60a5fa"/>
            )}

            <Pressable
                style={styles.miniProfileButton}
                onPress={(e) => {
                    e.stopPropagation();
                    openProfile(member?.pubg_id)
                }}
            >
                <Text style={styles.miniProfileButtonText}>Профиль</Text>
            </Pressable>

            <MyClanMenu member={member} type={type} rolePlayer={rolePlayer} setMenuOpen={setMenuOpen}
                        menuOpen={menuOpen} actions={actions}/>
        </View>
    )
}