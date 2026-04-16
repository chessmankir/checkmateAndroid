import React, { useMemo, useState } from "react";
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    useWindowDimensions,
    View,
} from "react-native";
import {styles} from "@/src/StyleSheets/clanMembers";
import {MyClanListClans} from "@/src/components/CLanMember/MyClanListClans";
import {useMyClan} from "@/src/hooks/MyClan/useMyClan";


type MemberType = {
    id: number;
    name: string;
    nickname: string;
    age: number;
    pubg_id: number;
    city: string;
    role: string;
    online: boolean;
    clan_id: number;
    clan_name: string;
    months_in_clan: number;
};


const mockMembers: MemberType[] = [
    {
        id: 1,
        name: "Николай",
        nickname: "netu161",
        age: 25,
        pubg_id: 5664455873,
        city: "Волгодонск",
        role: "Участник",
        online: true,
        clan_id: 1,
        clan_name: "Checkmate",
        months_in_clan: 8,
    },
    {
        id: 2,
        name: "Соня",
        nickname: "KRAPIVA",
        age: 29,
        pubg_id: 5125048934,
        city: "Иркутск",
        role: "Участник",
        online: false,
        clan_id: 1,
        clan_name: "Checkmate",
        months_in_clan: 8,
    },
    {
        id: 3,
        name: "Гриша",
        nickname: "evilDIZZY",
        age: 27,
        pubg_id: 5140786468,
        city: "Краснодар",
        role: "Участник",
        online: true,
        clan_id: 1,
        clan_name: "Checkmate",
        months_in_clan: 8,
    },
    {
        id: 4,
        name: "Сергей",
        nickname: "S'PSIX1",
        age: 20,
        pubg_id: 5150491059,
        city: "Орёл",
        role: "Участник",
        online: false,
        clan_id: 2,
        clan_name: "Checkmate2",
        months_in_clan: 8,
    },
    {
        id: 5,
        name: "Лёха",
        nickname: "ghost",
        age: 25,
        pubg_id: 5181641997,
        city: "Екатеринбург",
        role: "Офицер",
        online: true,
        clan_id: 3,
        clan_name: "Checkmate Black",
        months_in_clan: 6,
    },
    {
        id: 6,
        name: "Диана",
        nickname: "foxfire",
        age: 20,
        pubg_id: 5207167338,
        city: "Челябинск",
        role: "Участник",
        online: true,
        clan_id: 4,
        clan_name: "Checkmate White",
        months_in_clan: 5,
    },
    {
        id: 7,
        name: "Артём",
        nickname: "RageX",
        age: 24,
        pubg_id: 5212345678,
        city: "Москва",
        role: "Участник",
        online: false,
        clan_id: 5,
        clan_name: "Checkmate Olds",
        months_in_clan: 12,
    },
    {
        id: 8,
        name: "Илья",
        nickname: "spr1nt",
        age: 22,
        pubg_id: 5234567890,
        city: "Казань",
        role: "Участник",
        online: true,
        clan_id: 6,
        clan_name: "Checkmate Tdm",
        months_in_clan: 4,
    },
];

export function ProfileClanTab() {
    const { width } = useWindowDimensions();
    const isPhone = width < 600;
    const isSmallPhone = width < 390;
    const {myClans, selectedClanId} = useMyClan();

    const [search, setSearch] = useState("");

    const filteredMembers = useMemo(() => {
        const query = search.trim().toLowerCase();

        return mockMembers.filter((member) => {
            const inClan = member.clan_id === selectedClanId;

            const matchesSearch =
                query.length === 0 ||
                member.name.toLowerCase().includes(query) ||
                member.nickname.toLowerCase().includes(query) ||
                String(member.pubg_id).includes(query);

            return inClan && matchesSearch;
        });
    }, [search, selectedClanId]);

    return (
        <View style={styles.screen}>
            <View style={styles.headerBlock}>
                <Text style={[styles.title, isPhone && styles.titlePhone]}>
                    Участники кланов
                </Text>
                <Text style={styles.subtitle}>
                    Управление составом, ролями и статусами участников
                </Text>
            </View>

        {/*    <View style={styles.clansWrap}>
                {clansWithCount.map((clan) => {
                    const isActive = clan.id === selectedClanId;

                    return (
                        <Pressable
                            key={clan.id}
                            onPress={() => setSelectedClanId(clan.id)}
                            style={[
                                styles.clanChip,
                                isPhone ? styles.clanChipPhone : styles.clanChipTablet,
                                isActive && styles.clanChipActive,
                            ]}
                        >
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.clanChipText,
                                    isActive && styles.clanChipTextActive,
                                ]}
                            >
                                {clan.name}
                            </Text>

                            <View
                                style={[
                                    styles.countBadge,
                                    isActive && styles.countBadgeActive,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.countBadgeText,
                                        isActive && styles.countBadgeTextActive,
                                    ]}
                                >
                                    {clan.count}
                                </Text>
                            </View>
                        </Pressable>
                    );
                })}
            </View>*/}

            <MyClanListClans clans={myClans} selectedClanId={selectedClanId}/>

            <View style={styles.searchCard}>
                <TextInput
                    placeholder="Поиск по имени, нику или PUBG ID"
                    placeholderTextColor="#7F8AA8"
                    value={search}
                    onChangeText={setSearch}
                    style={[styles.searchInput, isPhone && styles.searchInputPhone]}
                />

                <Text style={styles.totalText}>Показано: {filteredMembers.length}</Text>
            </View>

            <FlatList
                data={filteredMembers}
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
                    <Pressable style={styles.memberRow}>
                        <View style={styles.memberRowLeft}>
                            <View style={styles.avatarCircle}>
                                <Text style={styles.avatarText}>
                                    {item.name.slice(0, 1).toUpperCase()}
                                </Text>
                            </View>

                            <View style={styles.memberRowInfo}>
                                <View style={styles.nameRow}>
                                    <Text
                                        numberOfLines={1}
                                        style={[
                                            styles.memberRowName,
                                            isSmallPhone && styles.memberRowNameSmall,
                                        ]}
                                    >
                                        {item.name}
                                    </Text>
                                    {item.online && <View style={styles.onlineDot} />}
                                </View>

                                <Text numberOfLines={1} style={styles.memberRowNick}>
                                    @{item.nickname}
                                </Text>

                                <Text numberOfLines={1} style={styles.memberRowMeta}>
                                    ID {item.pubg_id} • {item.age} лет • {item.city}
                                </Text>
                            </View>
                        </View>

                        <Pressable style={styles.miniProfileButton}>
                            <Text style={styles.miniProfileButtonText}>Профиль</Text>
                        </Pressable>
                    </Pressable>
                )}
            />
        </View>
    );
}

