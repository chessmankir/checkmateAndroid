import React, { useMemo, useState } from "react";
import {
    Pressable,
    Text,
    useWindowDimensions,
    View,
} from "react-native";
import { styles } from "@/src/StyleSheets/clanMembers";

type ClanType = {
    id: number;
    name: string;
    count?: number;
    number: number;
    real_count?: number;
};

type Props = {
    clans: ClanType[];
    selectedClanId: number;
    setSelectedClanId: (id: number) => void;
};

export function MyClanListClans({
                                    clans,
                                    selectedClanId,
                                    setSelectedClanId,
                                }: Props) {
    const { width } = useWindowDimensions();
    const isPhone = width < 600;
    const [isOpen, setIsOpen] = useState(false);

    const selectedClan = useMemo(() => {
        return clans.find((clan) => clan.number === selectedClanId) ?? clans[0];
    }, [clans, selectedClanId]);

    const onSelectClan = (id: number) => {
        setSelectedClanId(id);
        setIsOpen(false);
    };

    if (!selectedClan) {
        return null;
    }

    return (
        <View style={styles.clanDropdownWrap}>
            <Pressable
                onPress={() => setIsOpen((prev) => !prev)}
                style={[
                    styles.clanSelectedBox,
                    isPhone ? styles.clanChipPhone : styles.clanChipTablet,
                ]}
            >
                <View style={styles.clanSelectedLeft}>
                    <Text
                        numberOfLines={1}
                        style={styles.clanChipText}
                    >
                        {selectedClan.name}
                    </Text>
                </View>

                <View style={styles.clanSelectedRight}>
                    <View style={styles.countBadge}>
                        <Text style={styles.countBadgeText}>
                            {selectedClan.real_count ?? 0}
                        </Text>
                    </View>

                    <Text style={styles.clanArrow}>
                        {isOpen ? "▲" : "▼"}
                    </Text>
                </View>
            </Pressable>

            {isOpen && (
                <View style={styles.clanDropdownList}>
                    {clans.map((clan) => {
                        const isActive = clan.number === selectedClanId;

                        return (
                            <Pressable
                                key={clan.id}
                                onPress={() => onSelectClan(clan.number)}
                                style={[
                                    styles.clanDropdownItem,
                                    isActive && styles.clanDropdownItemActive,
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
            )}
        </View>
    );
}