import {Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";
import React from "react";

export  function UserProfileMain({member}){
    return (
        <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Основная информация</Text>
            <Text style={styles.infoText}>Ник: {member.nickname || "—"}</Text>
            <Text style={styles.infoText}>PUBG ID: {member.pubg_id || "—"}</Text>
            <Text style={styles.infoText}>Имя: {member.name || "—"}</Text>
            <Text style={styles.infoText}>Возраст: {member.age || "—"}</Text>
            <Text style={styles.infoText}>Город: {member.city || "—"}</Text>
            <Text style={styles.infoText}>Статус: {member.status || "—"}</Text>
            <Text style={styles.infoText}>
                Режимы: {member.modes?.length ? member.modes.join(", ") : "—"}
            </Text>
        </View>

    )
}