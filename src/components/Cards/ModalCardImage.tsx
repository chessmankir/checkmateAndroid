import {styles} from "@/src/StyleSheets/cards";
import {Image, Text, View} from "react-native";
import React from "react";

export function ModalCardImage({modalImageSource,imageSrc}){
    return (
        <View style={styles.modalImageWrap}>
            {modalImageSource ? (
                <Image
                    source={imageSrc}
                    style={styles.modalImage}
                />
            ) : (
                <View style={styles.imageFallback}>
                    <Text style={styles.imageFallbackText}>Нет фото</Text>
                </View>
            )}
        </View>
    )
}