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


export function DuplicateCard({card}){
    return (
        <View style={styles.selectedCard}>
            {/* */}
            <Image source={getCardImageSource(card.imageSrc)} style={styles.selectedImage}/>
            <View style={styles.selectedInfo}>
                <Text style={styles.selectedName}>{card.name}</Text>
                <Text style={styles.selectedAlbum}>
                    Альбом: {card.album_name ?? "—"}
                </Text>
            </View>
        </View>
    )
}