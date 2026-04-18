import {styles} from "@/src/StyleSheets/cards";
import {Image, Pressable, Text, View} from "react-native";
import React from "react";
import {CardType} from "@/src/types/CardType";


type Props = {
    card: CardType;
    cardWidth: number;
};

/*
const openCardModal = (card: CardType) => {
    setSelectedCard(card);
    setModalVisible(true);
};
*/

const BASE_URL = "http://192.168.0.30:4000";

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

export  function Card({card, cardWidth, openCardModal} : Props){
    const imageSource = getCardImageSource(card.imageSrc);
    return (
        <Pressable
            onPress={() => openCardModal(card)}
            style={[styles.cardBox, { width: cardWidth }]}
        >
            <View style={styles.imageWrap}>
                {imageSource ? (
                    <Image source={imageSource} style={styles.image} />
                ) : (
                    <View style={styles.imageFallback}>
                        <Text style={styles.imageFallbackText}>Нет фото</Text>
                    </View>
                )}
            </View>

            <View style={styles.metaBox}>
                <Text style={styles.cardTitle} numberOfLines={2}>
                    {card.name}
                </Text>

                <View style={styles.counterRow}>
                    <Pressable style={styles.counterBtn}>
                        <Text style={styles.counterBtnText}>-</Text>
                    </Pressable>

                    <Text style={styles.countText}>{card.count ?? 0}</Text>

                    <Pressable style={styles.counterBtn}>
                        <Text style={styles.counterBtnText}>+</Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}