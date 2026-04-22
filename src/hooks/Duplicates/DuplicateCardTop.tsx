import {styles} from "@/src/StyleSheets/duplicates";
import {Image, Text, View} from "react-native";
import React from "react";
import {getCardImageSource} from "@/src/libs/cardUrl";

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