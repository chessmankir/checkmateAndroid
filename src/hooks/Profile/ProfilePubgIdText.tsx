import {styles} from "@/src/StyleSheets/profile";
import {Alert, Pressable, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import * as Clipboard from "expo-clipboard";


const copyPubgId = async (pubgId: string) => {
    await Clipboard.setStringAsync(pubgId);
    Alert.alert("Скопировано", "PUBG ID скопирован в буфер");
};

export function ProfilePubgIdText({pubg_id}){
    return (
        <View style={styles.simpleRow}>
            <Text style={styles.simpleKey}>PUBG ID</Text>

            <View style={styles.simpleRight}>
                <Text style={styles.simpleValue}>{pubg_id}</Text>

                <Pressable
                    onPress={() => copyPubgId(pubg_id)}
                    style={styles.copyIcon}
                >
                    <Ionicons name="copy-outline" size={16} color="#8fb0ff" />
                </Pressable>
            </View>
        </View>
    )
}