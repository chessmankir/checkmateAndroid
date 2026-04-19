import {Pressable, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {ProfileInfoField} from "@/src/components/Profie/ProfileInfoField";
import {ProfileSectionCard} from "@/src/components/Profie/ProfileSectionCard";
import {ProfileMainBlock} from "@/src/components/Profie/ProfileMainBlock";
import {ProfileStatusBlock} from "@/src/components/Profie/ProfileStatusBlock";
import {ProfileModeBlock} from "@/src/components/Profie/ProfileModeBlock";
import {ProfileMainButton} from "@/src/components/Profie/ProfileMainButton";

export function ProfileMainInfo({profileForm, statuses, availableModes, updateField , handleSave, onToggleMode}){
    return (
        <View style={styles.contentBlock}>
            <ProfileMainBlock profileForm={ profileForm}  updateField={updateField}/>
            <ProfileStatusBlock statuses={statuses} profileForm={profileForm} updateField={updateField} />
            <ProfileModeBlock onToggleMode={onToggleMode} profileForm={profileForm} availableModes={availableModes} />
            <ProfileMainButton handleSave={handleSave}/>
        </View>
    )
}