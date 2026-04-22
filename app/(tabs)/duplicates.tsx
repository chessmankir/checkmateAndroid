// app/duplicates.tsx
import React from "react";
import {
    ActivityIndicator,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useRouter} from "expo-router";
import {useDuplicatesCard} from "@/src/hooks/Cards/useDuplicatesCard";
import {styles} from "@/src/StyleSheets/duplicates";
import {DuplicateHeader} from "@/src/hooks/Duplicates/DuplicateHeader";
import {DuplicateCard} from "@/src/hooks/Duplicates/DuplicateCard";
import {DuplicateCardTop} from "@/src/hooks/Duplicates/DuplicateCardTop";
import {DuplicateSearch} from "@/src/hooks/Duplicates/DuplicateSearch";

export default function DuplicatesScreen() {
    const router = useRouter();
    const {card, members, loading} = useDuplicatesCard();

    if (loading) {
        return (
            <SafeAreaView style={styles.safe}>
                <View style={styles.loadingWrap}>
                    <ActivityIndicator size="large"/>
                    <Text style={styles.loadingText}>Загрузка дубликатов...</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={styles.content}>
               <DuplicateHeader />
                {card && (
                    <DuplicateCard card={card} />
                )}
                <View style={styles.list}>
                    {members.map((member) => (
                        <View key={member.id} style={styles.memberCard}>
                            <DuplicateCardTop card={card} member={member} />
                            <DuplicateSearch member={member} />
                            <Pressable
                                style={styles.profileButton}
                                onPress={() => router.push(`/profile/${member.pubg_id}`)}
                            >
                                <Text style={styles.profileButtonText}>Открыть профиль</Text>
                            </Pressable>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}