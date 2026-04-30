import {Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";
import React from "react";

export function ProfileText({label, valueText}) {
    return (
        <View style={styles.simpleRow}>
            <Text style={styles.simpleKey}>{label}</Text>
            <Text style={styles.simpleValue}>{valueText}</Text>
        </View>
    )
}