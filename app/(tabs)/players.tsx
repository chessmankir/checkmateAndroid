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
import {styles} from "@/src/StyleSheets/playersPage";
import {PlayerMode} from "@/src/types/PlayerMode";
import {PlayerFilterModal} from "@/src/components/players/PlayerFilterModal";
import {PlayerBlock} from "@/src/components/players/PlayerBlock";
import {ActiveFiltersPlayers} from "@/src/components/players/ActiveFiltersPlayers";
import {PlayerSearch} from "@/src/types/PlayerSearch";
import {PlayerHeader} from "@/src/types/PlayerHeader";

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
                <PlayerHeader hasActiveFilters={hasActiveFilters} openFilters={openFilters} />

                <PlayerSearch search={search} setSearch={setSearch} />

                {hasActiveFilters && (
                    <ActiveFiltersPlayers selectedMode={selectedMode} getModeLabel={getModeLabel} setSelectedMode={setSelectedMode}
                    selectedStatus={selectedStatus} getStatusLabel={getStatusLabel} setSelectedStatus={setSelectedStatus} />
                )}

               <PlayerBlock members={PLAYERS} getStatusLabel={getStatusLabel} getModeLabel={getModeLabel}/>

                <PlayerFilterModal filterModalVisible={filterModalVisible} setFilterModalVisible={setFilterModalVisible}
                    draftMode={draftMode} setDraftMode={setDraftMode}
                    draftStatus={draftStatus} setDraftStatus={setDraftStatus} applyFilters={applyFilters} />
            </View>
        </SafeAreaView>
    );
}