import {styles} from "@/src/StyleSheets/profile";
import {ProfileHeaderBlock} from "@/src/hooks/Profile/ProfileHeaderBlock";
import {View} from "react-native";
import {ProfileText} from "@/src/hooks/Profile/ProfileText";
import React from "react";

export function ProfileActivityBlock({ member }) {
    const activity = member?.activity ?? {};

    const getFormatDate = (ts?: string | null) => {
        if (!ts) return "-";

        const date = new Date(ts);

        if (Number.isNaN(date.getTime())) return "-";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear());

        return `${day}.${month}.${year}`;
    };

    return (
        <View style={styles.sectionCard}>
            <ProfileHeaderBlock
                mainLabel="Активность"
                adddionalLabel="Сообщения человека"
            />

            <View style={styles.simpleList}>
                <ProfileText label="За неделю" valueText={String(activity.week ?? 0)} />
                <ProfileText label="За месяц" valueText={String(activity.month ?? 0)} />
                <ProfileText label="Всего" valueText={String(activity.total ?? 0)} />
                <ProfileText
                    label="Последнее сообщение"
                    valueText={getFormatDate(activity.last_message_at)}
                />
            </View>
        </View>
    );
}