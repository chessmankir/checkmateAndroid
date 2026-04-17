import {styles} from "@/src/StyleSheets/cards";
import {Text, View} from "react-native";
import React from "react";

export function AlbumHeader(){
    return (
        <View style={styles.topHeader}>
            <Text style={styles.screenTitle}>Карты</Text>
        </View>
    );
}