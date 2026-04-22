import React, { useMemo, useState } from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type PlayerMode = "classic" | "metro" | "tdm" | "ultimate";
type PlayerStatus =
    | "all"
    | "as"
    | "as-master"
    | "as-dominator"
    | "conqueror"
    | "legend";

type PlayerType = {
    id: number;
    pubg_id: string;
    name: string;
    nickname: string;
    age: number;
    city: string;
    online: boolean;
    mode: PlayerMode;
    status: Exclude<PlayerStatus, "all">;
};

const MODES: { key: PlayerMode; label: string }[] = [
    { key: "classic", label: "Классика" },
    { key: "metro", label: "Metro" },
    { key: "tdm", label: "TDM" },
    { key: "ultimate", label: "Ultimate Royale" },
];

const STATUSES: { key: PlayerStatus; label: string }[] = [
    { key: "all", label: "Любой" },
    { key: "as", label: "Продвижение Ас" },
    { key: "as-master", label: "Продвижение Ас-мастер" },
    { key: "as-dominator", label: "Продвижение Ас-доминатора" },
    { key: "conqueror", label: "Беру завика" },
    { key: "legend", label: "Беру легенду" },
];

const PLAYERS: PlayerType[] = [
    {
        id: 1,
        pubg_id: "51877538725",
        name: "Аделина",
        nickname: "Zakuska",
        age: 21,
        city: "Ульяновск",
        online: true,
        mode: "classic",
        status: "as",
    },
    {
        id: 2,
        pubg_id: "56555668888",
        name: "Костя",
        nickname: "Û",
        age: 20,
        city: "Дубна",
        online: false,
        mode: "metro",
        status: "as-master",
    },
    {
        id: 3,
        pubg_id: "51723088573",
        name: "Даня",
        nickname: "даня пво",
        age: 20,
        city: "Владивосток",
        online: true,
        mode: "classic",
        status: "as",
    },
    {
        id: 4,
        pubg_id: "51610579117",
        name: "Саня",
        nickname: "SH1NZO",
        age: 18,
        city: "Тель-Авив",
        online: true,
        mode: "ultimate",
        status: "conqueror",
    },
    {
        id: 5,
        pubg_id: "51583125083",
        name: "Аня",
        nickname: "SUNSHINE",
        age: 20,
        city: "Ростов",
        online: false,
        mode: "tdm",
        status: "legend",
    },
    {
        id: 6,
        pubg_id: "51764028184",
        name: "Эля",
        nickname: "PANIKA",
        age: 18,
        city: "Москва",
        online: true,
        mode: "metro",
        status: "as-dominator",
    },
];

function getModeLabel(mode?: PlayerMode | null) {
    return MODES.find((item) => item.key === mode)?.label ?? "";
}

function getStatusLabel(status?: PlayerStatus | null) {
    return STATUSES.find((item) => item.key === status)?.label ?? "";
}

function AppliedFilterChip({
                               label,
                               onRemove,
                           }: {
    label: string;
    onRemove: () => void;
}) {
    return (
        <View style={styles.appliedChip}>
            <Text style={styles.appliedChipText}>{label}</Text>

            <Pressable onPress={onRemove} hitSlop={8}>
                <Ionicons name="close" size={16} color="#b26cff" />
            </Pressable>
        </View>
    );
}

function PlayerCard({ player }: { player: PlayerType }) {
    const firstLetter = player?.name?.slice(0, 1)?.toUpperCase() || "?";

    const openProfile = (pubg_id: string | number | undefined) => {
        if (!pubg_id) return;

        router.push({
            pathname: "/profile/[pubg_id]",
            params: { pubg_id: String(pubg_id) },
        });
    };

    return (
        <View style={styles.playerCard}>
            <View style={styles.playerTop}>
                <View style={styles.playerLeft}>
                    <View style={styles.avatarCircle}>
                        <Text style={styles.avatarText}>{firstLetter}</Text>
                    </View>

                    <View style={styles.playerInfo}>
                        <View style={styles.nameRow}>
                            <Text style={styles.playerName}>{player.name}</Text>
                            {player.online && <View style={styles.onlineDot} />}
                        </View>

                        <Text style={styles.playerNick}>@{player.nickname}</Text>
                        <Text style={styles.playerMeta}>
                            ID {player.pubg_id} • {player.age} лет • {player.city}
                        </Text>

                        <View style={styles.playerBottom}>
                            <View style={styles.smallChip}>
                                <Text style={styles.smallChipText}>
                                    {getModeLabel(player.mode)}
                                </Text>
                            </View>

                            <View style={styles.statusChip}>
                                <Ionicons name="flash" size={14} color="#8fb0ff" />
                                <Text style={styles.statusChipText}>
                                    {getStatusLabel(player.status)}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <Pressable
                    style={styles.profileButton}
                    onPress={() => openProfile(player.pubg_id)}
                >
                    <Text style={styles.profileButtonText}>Профиль</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default function PlayersScreen() {
    const [search, setSearch] = useState("");

    const [filterModalVisible, setFilterModalVisible] = useState(false);

    const [selectedMode, setSelectedMode] = useState<PlayerMode | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<PlayerStatus>("all");

    const [draftMode, setDraftMode] = useState<PlayerMode | null>(null);
    const [draftStatus, setDraftStatus] = useState<PlayerStatus>("all");

    const openFilters = () => {
        setDraftMode(selectedMode);
        setDraftStatus(selectedStatus);
        setFilterModalVisible(true);
    };

    const applyFilters = () => {
        setSelectedMode(draftMode);
        setSelectedStatus(draftStatus);
        setFilterModalVisible(false);
    };

    const hasActiveFilters = !!selectedMode || selectedStatus !== "all";

    const filteredPlayers = useMemo(() => {
        const q = search.trim().toLowerCase();

        return PLAYERS.filter((player) => {
            const matchSearch =
                !q ||
                player.name.toLowerCase().includes(q) ||
                player.nickname.toLowerCase().includes(q) ||
                player.city.toLowerCase().includes(q) ||
                player.pubg_id.includes(q);

            const matchMode = !selectedMode || player.mode === selectedMode;
            const matchStatus =
                selectedStatus === "all" || player.status === selectedStatus;

            return matchSearch && matchMode && matchStatus;
        });
    }, [search, selectedMode, selectedStatus]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Игроки</Text>

                    <Pressable style={styles.filterIconButton} onPress={openFilters}>
                        <Ionicons name="options-outline" size={22} color="#fff" />
                        {hasActiveFilters && <View style={styles.redDot} />}
                    </Pressable>
                </View>

                <View style={styles.searchBox}>
                    <Ionicons name="search" size={18} color="#94a0c8" />
                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        placeholder="Поиск игроков"
                        placeholderTextColor="#7f8ab1"
                        style={styles.searchInput}
                    />
                </View>

                {hasActiveFilters && (
                    <View style={styles.appliedFiltersWrap}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.appliedFiltersRow}
                        >
                            {selectedMode && (
                                <AppliedFilterChip
                                    label={getModeLabel(selectedMode)}
                                    onRemove={() => setSelectedMode(null)}
                                />
                            )}

                            {selectedStatus !== "all" && (
                                <AppliedFilterChip
                                    label={getStatusLabel(selectedStatus)}
                                    onRemove={() => setSelectedStatus("all")}
                                />
                            )}
                        </ScrollView>
                    </View>
                )}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                >
                    {filteredPlayers.length > 0 ? (
                        filteredPlayers.map((player) => (
                            <PlayerCard key={player.id} player={player} />
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

                <Modal
                    animationType="slide"
                    transparent
                    visible={filterModalVisible}
                    onRequestClose={() => setFilterModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalSheet}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalTitle}>Фильтры</Text>

                                <Pressable onPress={() => setFilterModalVisible(false)}>
                                    <Ionicons name="close" size={24} color="#111" />
                                </Pressable>
                            </View>

                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={styles.modalContent}
                            >
                                <View style={styles.filterBlock}>
                                    <Text style={styles.filterBlockTitle}>Режим</Text>

                                    <View style={styles.chipsWrap}>
                                        {MODES.map((mode) => {
                                            const active = draftMode === mode.key;

                                            return (
                                                <Pressable
                                                    key={mode.key}
                                                    style={[
                                                        styles.selectChip,
                                                        active && styles.selectChipActive,
                                                    ]}
                                                    onPress={() =>
                                                        setDraftMode((prev) =>
                                                            prev === mode.key ? null : mode.key
                                                        )
                                                    }
                                                >
                                                    <Text
                                                        style={[
                                                            styles.selectChipText,
                                                            active &&
                                                            styles.selectChipTextActive,
                                                        ]}
                                                    >
                                                        {mode.label}
                                                    </Text>
                                                </Pressable>
                                            );
                                        })}
                                    </View>
                                </View>

                                <View style={styles.filterBlock}>
                                    <Text style={styles.filterBlockTitle}>
                                        Продвижение
                                    </Text>

                                    <View style={styles.statusList}>
                                        {STATUSES.map((status) => {
                                            const active = draftStatus === status.key;

                                            return (
                                                <Pressable
                                                    key={status.key}
                                                    style={[
                                                        styles.statusRow,
                                                        active && styles.statusRowActive,
                                                    ]}
                                                    onPress={() =>
                                                        setDraftStatus(status.key)
                                                    }
                                                >
                                                    <View
                                                        style={[
                                                            styles.radioOuter,
                                                            active &&
                                                            styles.radioOuterActive,
                                                        ]}
                                                    >
                                                        {active && (
                                                            <View
                                                                style={styles.radioInner}
                                                            />
                                                        )}
                                                    </View>

                                                    <Text
                                                        style={[
                                                            styles.statusRowText,
                                                            active &&
                                                            styles.statusRowTextActive,
                                                        ]}
                                                    >
                                                        {status.label}
                                                    </Text>
                                                </Pressable>
                                            );
                                        })}
                                    </View>
                                </View>
                            </ScrollView>

                            <View style={styles.modalButtons}>
                                <Pressable
                                    style={styles.resetModalButton}
                                    onPress={() => {
                                        setDraftMode(null);
                                        setDraftStatus("all");
                                    }}
                                >
                                    <Text style={styles.resetModalButtonText}>
                                        Сбросить
                                    </Text>
                                </Pressable>

                                <Pressable
                                    style={styles.applyModalButton}
                                    onPress={applyFilters}
                                >
                                    <Text style={styles.applyModalButtonText}>
                                        Применить
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#020b22",
    },
    container: {
        flex: 1,
        backgroundColor: "#020b22",
        paddingHorizontal: 16,
        paddingTop: 8,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "800",
    },
    filterIconButton: {
        width: 46,
        height: 46,
        borderRadius: 14,
        backgroundColor: "#101932",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    redDot: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: "#ff4d67",
    },
    searchBox: {
        height: 56,
        borderRadius: 18,
        backgroundColor: "#0d1530",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.05)",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
        gap: 10,
        marginBottom: 8,
    },
    searchInput: {
        flex: 1,
        color: "#fff",
        fontSize: 15,
    },
    appliedFiltersWrap: {
        marginBottom: 8,
    },
    appliedFiltersRow: {
        gap: 10,
        paddingVertical: 6,
        paddingRight: 8,
    },
    appliedChip: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 16,
        backgroundColor: "#f3e2fb",
    },
    appliedChipText: {
        color: "#b04cff",
        fontSize: 14,
        fontWeight: "700",
    },
    listContent: {
        paddingTop: 4,
        paddingBottom: 28,
    },
    playerCard: {
        borderRadius: 22,
        backgroundColor: "#0b1431",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.04)",
        padding: 14,
        marginBottom: 12,
    },
    playerTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },
    playerLeft: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
    },
    avatarCircle: {
        width: 54,
        height: 54,
        borderRadius: 27,
        backgroundColor: "#2f5cff",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    avatarText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "800",
    },
    playerInfo: {
        flex: 1,
        minWidth: 0,
    },
    nameRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    playerName: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "800",
    },
    onlineDot: {
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: "#2dd36f",
    },
    playerNick: {
        marginTop: 4,
        color: "#a7b3d5",
        fontSize: 14,
        fontWeight: "600",
    },
    playerMeta: {
        marginTop: 5,
        color: "#c0cae6",
        fontSize: 12,
    },
    playerBottom: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 12,
    },
    smallChip: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 999,
        backgroundColor: "rgba(63,109,255,0.18)",
        borderWidth: 1,
        borderColor: "rgba(99,139,255,0.18)",
    },
    smallChipText: {
        color: "#8fb0ff",
        fontSize: 12,
        fontWeight: "700",
    },
    statusChip: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 999,
        backgroundColor: "#0e1730",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.06)",
    },
    statusChipText: {
        color: "#dce4ff",
        fontSize: 12,
        fontWeight: "700",
    },
    profileButton: {
        height: 42,
        minWidth: 96,
        borderRadius: 14,
        backgroundColor: "#1c2748",
        borderWidth: 1,
        borderColor: "rgba(122,150,255,0.16)",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 14,
    },
    profileButtonText: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "800",
    },
    emptyBox: {
        borderRadius: 22,
        backgroundColor: "#0b1431",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.04)",
        paddingVertical: 36,
        paddingHorizontal: 20,
        alignItems: "center",
        marginTop: 8,
    },
    emptyTitle: {
        marginTop: 10,
        color: "#fff",
        fontSize: 17,
        fontWeight: "800",
    },
    emptyText: {
        marginTop: 6,
        color: "#98a2c7",
        fontSize: 13,
        textAlign: "center",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.45)",
        justifyContent: "flex-end",
    },
    modalSheet: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 20,
        maxHeight: "85%",
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
    },
    modalTitle: {
        fontSize: 28,
        fontWeight: "800",
        color: "#161616",
    },
    modalContent: {
        paddingBottom: 12,
        gap: 20,
    },
    filterBlock: {
        gap: 12,
    },
    filterBlockTitle: {
        fontSize: 22,
        fontWeight: "800",
        color: "#161616",
    },
    chipsWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    selectChip: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: "#f2f2f6",
    },
    selectChipActive: {
        backgroundColor: "#f4e4fd",
    },
    selectChipText: {
        color: "#222",
        fontSize: 15,
        fontWeight: "600",
    },
    selectChipTextActive: {
        color: "#bb4dff",
        fontWeight: "700",
    },
    statusList: {
        gap: 10,
    },
    statusRow: {
        minHeight: 52,
        borderRadius: 16,
        backgroundColor: "#f5f5f7",
        paddingHorizontal: 14,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    statusRowActive: {
        backgroundColor: "#f3e4fd",
    },
    statusRowText: {
        flex: 1,
        color: "#222",
        fontSize: 15,
        fontWeight: "600",
    },
    statusRowTextActive: {
        color: "#b44fff",
        fontWeight: "700",
    },
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: "#b7b7c9",
        alignItems: "center",
        justifyContent: "center",
    },
    radioOuterActive: {
        borderColor: "#b44fff",
    },
    radioInner: {
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: "#b44fff",
    },
    modalButtons: {
        flexDirection: "row",
        gap: 12,
        marginTop: 10,
    },
    resetModalButton: {
        flex: 1,
        height: 54,
        borderRadius: 18,
        backgroundColor: "#efeff3",
        alignItems: "center",
        justifyContent: "center",
    },
    resetModalButtonText: {
        color: "#222",
        fontSize: 16,
        fontWeight: "700",
    },
    applyModalButton: {
        flex: 1,
        height: 54,
        borderRadius: 18,
        backgroundColor: "#b734ff",
        alignItems: "center",
        justifyContent: "center",
    },
    applyModalButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "800",
    },
});