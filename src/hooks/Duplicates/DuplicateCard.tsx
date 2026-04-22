import {styles} from "@/src/StyleSheets/duplicates";
import {Image, Text, View} from "react-native";
import React from "react";
import {getCardImageSource} from "@/src/libs/cardUrl";

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