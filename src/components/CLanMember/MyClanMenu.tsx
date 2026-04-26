import {Pressable, View} from "react-native";
import {styles} from "@/src/StyleSheets/clanMembers";
import {Ionicons} from "@expo/vector-icons";
import {MyClanMenuActions} from "@/src/components/CLanMember/MyClanMenuActions";
import React from "react";

export function MyClanMenu({member, type, rolePlayer, setMenuOpen, menuOpen, actions}){
    return (
        <View>
            {type === "clanmember" && rolePlayer === "leader" && (
                <Pressable
                    style={styles.memberMenuButton}
                    onPress={() => setMenuOpen((prev) => !prev)}
                >
                    <Ionicons name="ellipsis-vertical" size={18} color="#c7d2fe" />
                </Pressable>
            )}

            {menuOpen && (
                <MyClanMenuActions member={member} actions={actions}  />
            )}
        </View>
    )
}