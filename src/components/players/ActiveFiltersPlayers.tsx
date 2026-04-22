import {styles} from "@/src/StyleSheets/playersPage";
import {ScrollView, View} from "react-native";
import React from "react";
import {AppliedFilterChip} from "@/src/types/AppliedFilterChip";

export function ActiveFiltersPlayers({selectedMode, getModeLabel, setSelectedMode, selectedStatus, getStatusLabel, setSelectedStatus}){
    return (
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
    )
}