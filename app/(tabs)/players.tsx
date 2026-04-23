import React, { useMemo, useState } from "react";
import {
    View
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
import {useMember} from "@/src/hooks/Members/useMember";

type PlayerStatus =
    | "all"
    | "as"
    | "as-master"
    | "as-dominator"
    | "conqueror"
    | "legend";

export default function PlayersScreen() {

    const {members,mode, draftMode, setDraftMode, draftStatus, status, setDraftStatus, openFilters,
        filterModalVisible, setFilterModalVisible, applyFilters, search, onSearch,   setMode, setStatus,} = useMember();

    const hasActiveFilters = mode !== "" || (status !== "all" && status !== "");
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <PlayerHeader hasActiveFilters={hasActiveFilters} openFilters={openFilters} />

                <PlayerSearch search={search} onSearch={onSearch} />

                {hasActiveFilters && (
                    <ActiveFiltersPlayers mode={mode} setSelectedMode={setMode}
                    status={status}  setSelectedStatus={setStatus} />
                )}

               <PlayerBlock members={members} />

                <PlayerFilterModal filterModalVisible={filterModalVisible} draftMode={draftMode} setDraftMode={setDraftMode}
                                  setDraftStatus={setDraftStatus} draftStatus={draftStatus}
                               applyFilters={applyFilters} setFilterModalVisible={setFilterModalVisible}
                     />
            </View>
        </SafeAreaView>
    );
}