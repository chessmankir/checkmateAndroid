import {Image, ScrollView, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/duplicates";
import React from "react";

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

export function DuplicateSearch({member}){
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ищет:</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.wantsRow}
            >
                {member.missing_cards?.length ? (
                    member.missing_cards.map((want) => (
                        <Image
                            key={want.id}
                            source={getCardImageSource(want.imageSrc)}
                            style={styles.wantImage}
                        />
                    ))
                ) : (
                    <Text style={styles.emptyText}>Нет данных</Text>
                )}
            </ScrollView>
        </View>
    )
}