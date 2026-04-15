import {Pressable, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";
import {ProfileSectionCard} from "@/src/components/Profie/ProfileSectionCard";
import React from "react";

export function ProfileStatusBlock({statuses, profileForm, updateField}){
    return (
        <ProfileSectionCard title="Статус" subtitle="Выбери один вариант">
            <View style={styles.statusWrap}>
                {statuses.map((statusItem) => {
                    const isActive = profileForm.status_game === statusItem.key;

                    return (
                        <Pressable
                            key={statusItem.key}
                            onPress={() => updateField("status_game", statusItem.key)}
                            style={[
                                styles.statusChip,
                                isActive && styles.statusChipActive,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.statusChipText,
                                    isActive && styles.statusChipTextActive,
                                ]}
                            >
                                {statusItem.label}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </ProfileSectionCard>
    )
}