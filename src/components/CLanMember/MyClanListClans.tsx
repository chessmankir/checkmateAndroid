import React from "react";
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import { styles } from "@/src/StyleSheets/clanMembers";

type ClanType = {
    id: number;
    name: string;
    count?: number;
    number: number;
};

type Props = {
    clans: ClanType[];
    selectedClanId: number;
    handleSearch: (id: number) => void;
};

export function MyClanListClans({
                                    clans,
                                    selectedClanId,
                                    setSelectedClanId,
                                }: Props) {
    const { width } = useWindowDimensions();
    const isPhone = width < 600;

    return (
        <View style={styles.clansWrap}>
            {clans.map((clan) => {
                const isActive = clan.number == selectedClanId;

                return (
                    <Pressable
                        key={clan.id}
                        onPress={() => setSelectedClanId(clan.number)}
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
                                {clan.real_count ?? 0}
                            </Text>
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
}