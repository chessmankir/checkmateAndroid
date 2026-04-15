import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { MemberType } from "@/src/types/MemberType";
import { styles } from "@/src/StyleSheets/PlayerCard.styles";
import {PlayerTop} from "@/src/components/players/PlayerTop";
import {PlayerBottom} from "@/src/components/players/PlayerBottom";

type Props = {
    member: MemberType;
   /* onProfilePress?: (member: MemberType) => void;
    onMessagePress?: (member: MemberType) => void;*/
};

export function PlayerCard({
                               member,

                           }: Props) {
    return (
        <View style={styles.card}>
                <PlayerTop member={member} />
                <PlayerBottom member={member} />
        </View>
    );
}