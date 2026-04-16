import {styles} from "@/src/StyleSheets/clanMembers";
import {Pressable, Text, useWindowDimensions, View} from "react-native";
import React, {useMemo, useState} from "react";
import {useMyClan} from "@/src/hooks/MyClan/useMyClan";
import {MyClan} from "@/src/components/CLanMember/MyClan";

type ClanType = {
    id: number;
    name: string;
};

export function MyClanListClans({clans, selectedClanId}){

    const { width } = useWindowDimensions();
    const isPhone = width < 600;

    return (
        <View style={styles.clansWrap}>
            {clans.map((clan) => {
                const isActive = clan.id === selectedClanId;

                return (
                    <MyClan clan={clan} isPhone={isPhone} isActive={isActive} />
                );
            })}
        </View>
    )
}