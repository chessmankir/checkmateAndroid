import React, { useMemo, useState } from "react";
import {
    FlatList,
    Text,
    useWindowDimensions,
    View,
} from "react-native";
import {styles} from "@/src/StyleSheets/clanMembers";
import {MyClanListClans} from "@/src/components/CLanMember/MyClanListClans";
import {useMyClan} from "@/src/hooks/MyClan/useMyClan";
import {MyClanSearch} from "@/src/components/CLanMember/MyClanSearch";
import {MyClanProfile} from "@/src/components/CLanMember/MyClanProfile";
import {selectRole, useAuthStore} from "@/src/store/authStore";
import {stat} from "node:fs";

export function ProfileClanTab() {
    const { width } = useWindowDimensions();
    const isPhone = width < 600;
    const isSmallPhone = width < 390;
    const {myClans, selectedClanId, setSelectedClanId, searchData,
        setSearchData, clanMembers, handleSearch, actions} = useMyClan();
    const rolePlayer = useAuthStore(selectRole);

    return (
        <View style={styles.screen}>
            <MyClanListClans
                clans={myClans}
                selectedClanId={selectedClanId}
                setSelectedClanId={setSelectedClanId}
            />
           <MyClanSearch search={searchData} isPhone={isPhone} handleSearch={handleSearch} />

            <FlatList
                data={clanMembers}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={styles.listContent}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyBox}>
                        <Text style={styles.emptyText}>Никого не найдено</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <MyClanProfile member={item} isSmallPhone={isSmallPhone} type={"clanmember"} rolePlayer={rolePlayer} actions={actions} />
                )}
            />
        </View>
    );
}

