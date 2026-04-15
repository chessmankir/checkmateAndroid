import React from "react";
import {Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";

export function ProfileSectionCard({
                         title,
                         subtitle,
                         children,
                     }: {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}) {
    return (
        <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{title}</Text>
                {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
            </View>
            {children}
        </View>
    );
}