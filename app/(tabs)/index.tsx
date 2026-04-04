import React, { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {useMember} from "@/hooks/Members/useMember";
import {MemberType} from "@/types/MemberType";


const filters = ["Все", "Classic", "Metro", "TDM"] as const;
type FilterType = (typeof filters)[number];

export default function PlayersScreen() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("Все");

/*  const filteredPlayers = useMemo(() => {
    return players.filter((player) => {
      const matchesSearch =
          player.nickname.toLowerCase().includes(search.toLowerCase()) ||
          player.role.toLowerCase().includes(search.toLowerCase()) ||
          player.city.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
          activeFilter === "Все" ? true : player.mode === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);*/

  const {members} = useMember();
  console.log(members);

  return (
      <View style={styles.screen}>
        <FlatList<MemberType>
            data={members}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
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
                  <Ionicons name="search-outline" size={20} color="#94a3b8" />
                  <TextInput
                      value={search}
                      onChangeText={setSearch}
                      placeholder="Поиск по нику, роли или городу"
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
            renderItem={({ item }) => (
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.avatar}>
                      <Text style={styles.avatarText}>
                        {item.nickname.charAt(0).toUpperCase()}
                      </Text>
                    </View>

                    <View style={styles.cardInfo}>
                      <View style={styles.nameRow}>
                        <Text style={styles.nickname}>{item.nickname}</Text>
                        <View
                            style={[
                              styles.statusDot,
                              item.online ? styles.statusOnline : styles.statusOffline,
                            ]}
                        />
                      </View>

                      <Text style={styles.role}>{item.role}</Text>
                      <Text style={styles.city}>{item.city}</Text>
                    </View>

                    <View style={styles.modeBadge}>
                      <Text style={styles.modeBadgeText}>{item.mode}</Text>
                    </View>
                  </View>

                  <View style={styles.cardBottom}>
                    <View style={styles.onlineBox}>
                      <Ionicons
                          name={item.online ? "radio-button-on" : "radio-button-off"}
                          size={14}
                          color={item.online ? "#22c55e" : "#64748b"}
                      />
                      <Text style={styles.onlineText}>
                        {item.online ? "В сети" : "Не в сети"}
                      </Text>
                    </View>

                    <View style={styles.actionRow}>
                      <Pressable style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Профиль</Text>
                      </Pressable>

                      <Pressable style={styles.primaryButton}>
                        <Ionicons
                            name="chatbubble-ellipses-outline"
                            size={16}
                            color="#08111f"
                        />
                        <Text style={styles.primaryButtonText}>Написать</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
            )}
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <Ionicons name="sad-outline" size={32} color="#94a3b8" />
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0b1220",
  },

  listContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 28,
  },

  headerBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 18,
  },

  brand: {
    color: "#60a5fa",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6,
    letterSpacing: 0.3,
  },

  title: {
    color: "#f8fafc",
    fontSize: 28,
    fontWeight: "800",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
    maxWidth: 250,
  },

  headerBadge: {
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  headerBadgeText: {
    color: "#cbd5e1",
    fontSize: 12,
    fontWeight: "600",
  },

  searchBox: {
    backgroundColor: "#111827",
    borderColor: "#1f2937",
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 14,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  searchInput: {
    flex: 1,
    color: "#f8fafc",
    marginLeft: 10,
    fontSize: 15,
  },

  filterRow: {
    paddingBottom: 10,
    gap: 10,
  },

  filterChip: {
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  filterChipActive: {
    backgroundColor: "#60a5fa",
    borderColor: "#60a5fa",
  },

  filterChipText: {
    color: "#cbd5e1",
    fontWeight: "600",
    fontSize: 13,
  },

  filterChipTextActive: {
    color: "#08111f",
  },

  sectionRow: {
    marginTop: 8,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "700",
  },

  sectionLink: {
    color: "#60a5fa",
    fontSize: 13,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
  },

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: "#1d4ed8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  avatarText: {
    color: "#eff6ff",
    fontSize: 24,
    fontWeight: "800",
  },

  cardInfo: {
    flex: 1,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  nickname: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "700",
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
  },

  statusOnline: {
    backgroundColor: "#22c55e",
  },

  statusOffline: {
    backgroundColor: "#64748b",
  },

  role: {
    color: "#93c5fd",
    fontSize: 14,
    marginTop: 4,
    fontWeight: "600",
  },

  city: {
    color: "#94a3b8",
    fontSize: 13,
    marginTop: 4,
  },

  modeBadge: {
    backgroundColor: "#0b1220",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#223049",
    marginLeft: 10,
  },

  modeBadgeText: {
    color: "#cbd5e1",
    fontSize: 12,
    fontWeight: "700",
  },

  cardBottom: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#1f2937",
    paddingTop: 14,
  },

  onlineBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    gap: 6,
  },

  onlineText: {
    color: "#94a3b8",
    fontSize: 13,
    fontWeight: "500",
  },

  actionRow: {
    flexDirection: "row",
    gap: 10,
  },

  secondaryButton: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#334155",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b1220",
  },

  secondaryButtonText: {
    color: "#e2e8f0",
    fontSize: 14,
    fontWeight: "700",
  },

  primaryButton: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#60a5fa",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },

  primaryButtonText: {
    color: "#08111f",
    fontSize: 14,
    fontWeight: "800",
  },

  emptyState: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  emptyTitle: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 12,
  },

  emptySubtitle: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
});