import {styles} from "@/src/StyleSheets/clanMembers";
import {Text, View} from "react-native";
import React from "react";



export function MyClanActivity({member}){
    const getFormatDate = (ts) =>{
        if (!ts)return "-";
        const date = new Date(ts);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() +1).padStart(2, "0");
        const year = String(date.getFullYear());
        return `${day}.${month}.${year}`;
    }

    return (
        <View style={styles.memberActivityBox}>
            <View style={styles.activityItem}>
                <Text style={styles.activityLabel}>За неделю</Text>
                <Text style={styles.activityValue}>{member?.activity.week} сообщений</Text>
            </View>

            <View style={styles.activityItem}>
                <Text style={styles.activityLabel}>За месяц</Text>
                <Text style={styles.activityValue}>{member?.activity.month} сообщений</Text>
            </View>
            <View style={styles.activityItem}>
                <Text style={styles.activityLabel}>Всего</Text>
                <Text style={styles.activityValue}>{member?.activity.total} сообщений</Text>
            </View>

            <View style={styles.activityItem}>
                <Text style={styles.activityLabel}>Последнее сообщение</Text>
                <Text style={styles.activityValue}>{getFormatDate(member?.activity.last_message_at)}</Text>
            </View>
        </View>
    )
}