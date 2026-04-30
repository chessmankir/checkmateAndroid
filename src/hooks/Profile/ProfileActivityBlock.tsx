import {styles} from "@/src/StyleSheets/profile";
import {ProfileHeaderBlock} from "@/src/hooks/Profile/ProfileHeaderBlock";
import {View} from "react-native";
import {ProfileText} from "@/src/hooks/Profile/ProfileText";
import React from "react";

export function ProfileActivityBlock({member}){
    const getFormatDate = (ts) =>{
        if (!ts)return "-";

        const date = new Date(ts);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() +1).padStart(2, "0");
        const year = String(date.getFullYear());
        return `${day}.${month}.${year}`;

    }
    return (
        <View style={styles.sectionCard}>
            <ProfileHeaderBlock mainLabel={"Активность"} adddionalLabel={"Сообщения человека "} />
            <View style={styles.simpleList}>
                <ProfileText label={"За неделю"} valueText={member?.activity.week || ""} />
                <ProfileText label={"За месяц"} valueText={member?.activity.month || ""} />
                <ProfileText label={"Всего"} valueText={member?.activity.total || ""} />
                <ProfileText label={"Поселднее сообщение"} valueText={getFormatDate(member?.activity.last_message_at)} />
            </View>
        </View>
    )
}