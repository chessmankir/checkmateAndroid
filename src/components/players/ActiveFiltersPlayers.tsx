import {styles} from "@/src/StyleSheets/playersPage";
import {ScrollView, View} from "react-native";
import React from "react";
import {AppliedFilterChip} from "@/src/types/AppliedFilterChip";
import {PlayerMode} from "@/src/types/PlayerMode";
import {PlayerStatus} from "@/src/types/PlayerStatus";

const MODES: { key: PlayerMode; label: string }[] = [
    { key: "classic", label: "Классика" },
    { key: "metro", label: "Metro" },
    { key: "tdm", label: "TDM" },
    { key: "ultimate", label: "Ultimate Royale" },
];

const STATUSES: { key: PlayerStatus; label: string }[] = [
    { key: "all", label: "Любой" },
    { key: "as", label: "Продвижение Ас" },
    { key: "asm", label: "Продвижение Ас-мастер" },
    { key: "asd", label: "Продвижение Ас-доминатора" },
    { key: "zavic", label: "Беру завика" },
    { key: "legend", label: "Беру легенду" },
];

function getModeLabel(mode?: PlayerMode | null) {
    return MODES.find((item) => item.key === mode)?.label ?? "";
}

function getStatusLabel(status?: PlayerStatus | null) {
    return STATUSES.find((item) => item.key === status)?.label ?? "";
}

export function ActiveFiltersPlayers({mode, setSelectedMode, status, setSelectedStatus}){
    return (
        <View style={styles.appliedFiltersWrap}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.appliedFiltersRow}
            >
                {mode && (
                    <AppliedFilterChip
                        label={getModeLabel(mode)}
                        onRemove={() => setSelectedMode(null)}
                    />
                )}

                {status !== "all" && (
                    <AppliedFilterChip
                        label={getStatusLabel(status)}
                        onRemove={() => setSelectedStatus("all")}
                    />
                )}
            </ScrollView>
        </View>
    )
}