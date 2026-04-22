import {Image, ScrollView, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/duplicates";
import React from "react";
import {BASE_URL} from "@/src/config/api";
import {getCardImageSource} from "@/src/libs/cardUrl";

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
                            source={getCardImageSource(want?.imageSrc)}
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