import {ScrollView, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/playersPage";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {PlayerCard} from "@/src/components/players/PlayerCard";
import {MyClanProfile} from "@/src/components/CLanMember/MyClanProfile";

export function PlayerBlock({members}) {
    const isSmallPhone = true;
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
        >
            {members.length > 0 ? (
                members.map((member) => (
                    /*<PlayerCard key={member.id} member={member}  />*/
                    <MyClanProfile  key={member.id} member={member} isSmallPhone={isSmallPhone} />
                ))
            ) : (
                <View style={styles.emptyBox}>
                    <Ionicons
                        name="people-outline"
                        size={28}
                        color="#7f88ab"
                    />
                    <Text style={styles.emptyTitle}>Никого не найдено</Text>
                    <Text style={styles.emptyText}>
                        Попробуй изменить поиск или фильтры
                    </Text>
                </View>
            )}
        </ScrollView>
    )
}