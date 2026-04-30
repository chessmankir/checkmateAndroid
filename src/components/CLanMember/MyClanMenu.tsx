import { styles } from "@/src/StyleSheets/clanMembers";
import { Modal, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { MyClanMenuActions } from "./MyClanMenuActions";

export function MyClanMenu({ member, menuOpen, setMenuOpen, actions }) {
    return (
        <View>
            <Pressable
                style={styles.memberMenuButton}
                onPress={() => setMenuOpen(true)}
            >
                <Ionicons name="ellipsis-vertical" size={18} color="#cbd5e1" />
            </Pressable>

            <Modal
                visible={menuOpen}
                transparent
                animationType="fade"
                onRequestClose={() => setMenuOpen(false)}
            >
                <Pressable
                    style={styles.memberModalOverlay}
                    onPress={() => setMenuOpen(false)}
                >
                    <Pressable
                        style={styles.memberModalBox}
                        onPress={(e) => e.stopPropagation()}
                    >
                        <MyClanMenuActions
                            member={member}
                            actions={actions}
                            closeMenu={() => setMenuOpen(false)}
                        />
                    </Pressable>
                </Pressable>
            </Modal>
        </View>
    );
}