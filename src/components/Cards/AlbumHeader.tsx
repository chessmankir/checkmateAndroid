import React from "react";
import { Text, View } from "react-native";
import { styles } from "@/src/StyleSheets/cards";

export function AlbumHeader() {
    return (
        <View style={styles.topHeader}>
            <Text style={styles.screenTitle}>Карты</Text>
        </View>
    );
}