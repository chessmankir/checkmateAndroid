import {styles} from "@/src/StyleSheets/duplicates";
import {Image, Text, View} from "react-native";
import React from "react";
import {BASE_URL} from "@/src/config/api";

function getCardImageSource(imageSrc?: string) {
    if (!imageSrc) return null;

    if (imageSrc.startsWith("http://") || imageSrc.startsWith("https://")) {
        return { uri: imageSrc };
    }

    if (imageSrc.startsWith("/")) {
        return { uri: `${BASE_URL}${imageSrc}` };
    }

    return { uri: `${BASE_URL}/${imageSrc}` };
}

export function DuplicateCardTop({card, member}){
    return (
        <View style={styles.memberTop}>
            {card && (
                <Image
                    source={getCardImageSource(card.imageSrc)}
                    style={styles.cardImage}
                />
            )}

            <View style={styles.memberTopInfo}>
                <Text style={styles.cardTitle}>
                    {card?.name ?? "Карточка не выбрана"}
                </Text>
                <Text style={styles.memberName}>
                    {member.name || "Без имени"}
                </Text>
                <Text style={styles.memberNickname}>
                    Ник: {member.nickname || "—"}
                </Text>
            </View>
        </View>
    )
}