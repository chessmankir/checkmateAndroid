import {Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/duplicates";
import React from "react";

export function DuplicateHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Дубликаты карточки</Text>
            <Text style={styles.subtitle}>
                Пользователи, у которых есть дубликаты выбранной карточки
            </Text>
        </View>
    )
}