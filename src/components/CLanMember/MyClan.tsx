import {Pressable, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/clanMembers";
import React from "react";

export  function MyClan({clan, isPhone, isActive}){
    console.log(clan);
    return(
        <Pressable
            key={clan.id}
            /* onPress={() => setSelectedClanId(clan.id)}*/
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
                     {clan.real_count}
                </Text>
            </View>
        </Pressable>
    )
}