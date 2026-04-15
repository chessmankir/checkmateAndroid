import {Pressable, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";
import {Ionicons} from "@expo/vector-icons";
import {ProfileSectionCard} from "@/src/components/Profie/ProfileSectionCard";
import React from "react";

export function ProfileModeBlock({profileForm, availableModes, onToggleMode}){
    return (
        <ProfileSectionCard title="Режимы" subtitle="Можно выбрать несколько">
            <View style={styles.chipsWrap}>
                {availableModes.map((mode) => {
                    const isActive = profileForm.modes?.includes(mode);

                    return (
                        <Pressable
                            key={mode}
                            onPress={() => onToggleMode(mode)}
                            style={[styles.modeChip, isActive && styles.modeChipActive]}
                        >
                            <Ionicons
                                name={isActive ? "checkmark-circle" : "ellipse-outline"}
                                size={16}
                                color={isActive ? "#08111f" : "#93c5fd"}
                            />
                            <Text
                                style={[
                                    styles.modeChipText,
                                    isActive && styles.modeChipTextActive,
                                ]}
                            >
                                {mode}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </ProfileSectionCard>
    )
}