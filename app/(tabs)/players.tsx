import React, { useMemo, useState } from "react";
import {
    FlatList,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useMember } from "@/src/hooks/Members/useMember";
import { MemberType } from "@/src/types/MemberType";
import { styles } from "@/app/(tabs)/styles";
import {PlayerCard} from "@/src/components/players/PlayerCard";

const filters = ["Все", "Classic", "Metro", "TDM"] as const;
type FilterType = (typeof filters)[number];

export default function PlayersScreen() {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState<FilterType>("Все");

    const { members } = useMember();

    const renderMember = ({ item }: { item: MemberType }) => (
        <PlayerCard member={item} />
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={members}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderMember}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={
                    <>
                        <View style={styles.headerBlock}>
                            <View>
                                <Text style={styles.brand}>Checkmate</Text>
                                <Text style={styles.title}>Поиск тиммейтов</Text>
                                <Text style={styles.subtitle}>
                                    Найди игроков, кланы и турниры для каток
                                </Text>
                            </View>

                            <View style={styles.headerBadge}>
                                <Text style={styles.headerBadgeText}>
                                    {members.length} игроков
                                </Text>
                            </View>
                        </View>

                        <View style={styles.searchBox}>
                            <Ionicons name="search" size={18} color="#94a3b8" />
                            <TextInput
                                value={search}
                                onChangeText={setSearch}
                                placeholder="Поиск по нику, роли, городу"
                                placeholderTextColor="#64748b"
                                style={styles.searchInput}
                            />
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.filterRow}
                        >
                            {filters.map((filter) => {
                                const isActive = activeFilter === filter;

                                return (
                                    <Pressable
                                        key={filter}
                                        onPress={() => setActiveFilter(filter)}
                                        style={[
                                            styles.filterChip,
                                            isActive && styles.filterChipActive,
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.filterChipText,
                                                isActive && styles.filterChipTextActive,
                                            ]}
                                        >
                                            {filter}
                                        </Text>
                                    </Pressable>
                                );
                            })}
                        </ScrollView>

                        <View style={styles.sectionRow}>
                            <Text style={styles.sectionTitle}>Список игроков</Text>
                            <Text style={styles.sectionLink}>Сначала онлайн</Text>
                        </View>
                    </>
                }
                ListEmptyComponent={
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyTitle}>Ничего не найдено</Text>
                        <Text style={styles.emptySubtitle}>
                            Попробуй изменить поиск или фильтр
                        </Text>
                    </View>
                }
            />
        </View>
    );
}