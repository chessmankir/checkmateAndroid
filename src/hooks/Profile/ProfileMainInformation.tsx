import {Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";
import {ProfileHeaderBlock} from "@/src/hooks/Profile/ProfileHeaderBlock";
import {ProfileText} from "@/src/hooks/Profile/ProfileText";
import {ProfilePubgIdText} from "@/src/hooks/Profile/ProfilePubgIdText";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export function ProfileMainInformation({member, pubg_id}){
    return (
        <View style={styles.sectionCard}>

            <ProfileHeaderBlock mainLabel={"Основная информация"} adddionalLabel={"Данные участника"} />

            <View style={styles.simpleList}>
                <ProfileText label={"Ник"} valueText={member.nickname || "—"} />
                <ProfilePubgIdText pubg_id={pubg_id} />
                <ProfileText label={"Имя"} valueText={member.name || "—"} />
                <ProfileText label={"Возраст"} valueText={member.age ? `${member.age}` : "—"} />
                <ProfileText label={"Город"} valueText={member.city || "—"} />

                {/*<View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>Статус</Text>
                            <Text style={styles.simpleValue}>{member.status_game || "—"}</Text>
                        </View>*/}

                <View style={styles.simpleRow}>
                    <Text style={styles.simpleKey}>Режимы</Text>
                    <Text style={styles.simpleValue}>
                        {member.modes?.length ? member.modes.join(", ") : "—"}
                    </Text>
                </View>
                {/*<View style={styles.simpleRow}>
                            <Text style={styles.simpleKey}>Клан</Text>
                            <Text style={styles.simpleValue}>{member.clan_name || "Без клана"}</Text>
                        </View>*/}
                <View style={styles.simpleRow}>
                    <Text style={styles.simpleKey}>Клан</Text>

                    <View style={styles.clanBadge}>
                        <Ionicons name="shield-checkmark-outline" size={15} color="#8fb0ff" />
                        <Text style={styles.clanBadgeText}>
                            {member.subclan_name !== null ? member.subclan_name  : member.clan_name}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}