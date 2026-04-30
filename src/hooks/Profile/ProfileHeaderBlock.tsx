import {Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";
import React from "react";

export function ProfileHeaderBlock({mainLabel, adddionalLabel}){
    return (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{mainLabel}</Text>
            <Text style={styles.sectionSubtitle}>{adddionalLabel}</Text>
        </View>
    )
}