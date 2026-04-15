import {Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";
import React from "react";

export function ProfileHeader({profileForm}){
    return (
        <View style={styles.heroCard}>
            <View style={styles.heroTop}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                        {profileForm.nickname?.slice(0, 2).toUpperCase()}
                    </Text>
                </View>

                <View style={styles.heroInfo}>
                    <Text style={styles.brand}>Checkmate</Text>
                    <Text style={styles.heroTitle}>{profileForm.nickname}</Text>
                    <Text style={styles.heroSubtitle}>
                        {profileForm.name}
                    </Text>
                </View>
            </View>
        </View>
    )
}