import {ProfileSectionCard} from "@/src/components/Profie/ProfileSectionCard";
import {View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";
import {ProfileInfoField} from "@/src/components/Profie/ProfileInfoField";
import React from "react";

export function ProfileMainBlock({profileForm, updateField}){
    return (
        <ProfileSectionCard
            title="Основная информация"
            subtitle="Эти поля уже редактируются"
        >
            <View style={styles.fieldsGrid}>
                <ProfileInfoField
                    label="Ник"
                    value={profileForm.nickname}
                    icon="person-outline"
                    onChangeText={(text) => updateField("nickname", text)}
                    placeholder="Введите ник"
                />

                <ProfileInfoField
                    label="PUBG ID"
                    value={profileForm.pubg_id}
                    icon="game-controller-outline"
                       onChangeText={(text) =>
                           updateField("pubg_id", text.replace(/[^0-9]/g, ""))
                       }
                    keyboardType="numeric"
                    placeholder="Введите PUBG ID"
                />

                <ProfileInfoField
                    label="Имя"
                    value={profileForm.name}
                    icon="id-card-outline"
                     onChangeText={(text) => updateField("name", text)}
                    placeholder="Введите имя"
                />

                <ProfileInfoField
                    label="Возраст"
                    value={String(profileForm.age ?? "")}
                    icon="calendar-outline"
                    onChangeText={(text) =>
                        updateField("age", text.replace(/[^0-9]/g, ""))
                    }
                    /*keyboardType="numeric"*/
                    placeholder="Введите возраст"
                />

                <ProfileInfoField
                    label="Город"
                    value={profileForm.city}
                    icon="location-outline"
                     onChangeText={(text) => updateField("city", text)}
                    placeholder="Введите город"
                />
            </View>
        </ProfileSectionCard>
    )
}