import React, { useMemo, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PlayerCard } from "@/src/components/players/PlayerCard";
import { usePlayers } from "@/src/hooks/players/usePlayer";
import { styles } from "@/src/StyleSheets/PlayerCard.styles";

const filters = ["Все", "Classic", "Metro", "TDM"] as const;
type FilterType = (typeof filters)[number];

export default function PlayersScreen() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("Все");

  const { members, loading, error } = usePlayers();

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const q = search.trim().toLowerCase();

      const matchesSearch =
          q.length === 0 ||
          member.nickname.toLowerCase().includes(q) ||
          member.role.toLowerCase().includes(q) ||
          member.city.toLowerCase().includes(q);

      const matchesFilter =
          activeFilter === "Все" || member.mode === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [members, search, activeFilter]);

  return (
      <View style={styles.screen}>
        <FlatList
            data={filteredMembers}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <>
                <View style={styles.headerBlock}>
                  <View>
                    <Text style={styles.brand}>Checkmate</Text>
                    <Text style={styles.title}>Поиск2 тиммейтов</Text>
                    <Text style={styles.subtitle}>
                      Найди игроков, кланы и турниры для каток
                    </Text>
                  </View>

                  <View style={styles.headerBadge}>
                    <Text style={styles.headerBadgeText}>
                      {filteredMembers.length} игроков
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

                <View style={styles.sectionRow}>
                  <Text style={styles.sectionTitle}>Фильтры</Text>
                </View>

                <View style={styles.filtersWrap}>
                  {filters.map((filter) => {
                    const isActive = activeFilter === filter;

                    return (
                        <Text
                            key={filter}
                            style={[
                              styles.filterChip,
                              isActive && styles.filterChipActive,
                              isActive && styles.filterChipTextActive,
                            ]}
                            onPress={() => setActiveFilter(filter)}
                        >
                          {filter}
                        </Text>
                    );
                  })}
                </View>

                <View style={styles.sectionRow}>
                  <Text style={styles.sectionTitle}>Список игроков</Text>
                  <Text style={styles.sectionLink}>Сначала онлайн</Text>
                </View>

                {loading && <Text style={styles.infoText}>Загрузка...</Text>}
                {error && <Text style={styles.errorText}>{error}</Text>}
              </>
            }
            renderItem={({ item }) => <PlayerCard member={item} />}
            ListEmptyComponent={
              !loading ? (
                  <View style={styles.emptyState}>
                    <Ionicons name="search-outline" size={28} color="#64748b" />
                    <Text style={styles.emptyTitle}>Ничего не найдено</Text>
                    <Text style={styles.emptySubtitle}>
                      Попробуй изменить поиск или фильтр
                    </Text>
                  </View>
              ) : null
            }
        />
      </View>
  );
}