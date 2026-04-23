import React, { useMemo, useState } from "react";
import {
    ScrollView, View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from "@/src/StyleSheets/profile";
import {ProfileMainInfo} from "@/src/components/Profie/ProfileMainInfo";
import {ProfileHeader} from "@/src/components/Profie/ProfileHeader";
import {ProfileTabs} from "@/src/components/Profie/ProfileTabs";
import {useProfile} from "@/src/hooks/Profile/useProfile";
import {ProfileClanTab} from "@/src/components/CLanMember/ProfileClanTab";

const topTabs = ["Профиль", "Клан"] as const;
type TopTab = (typeof topTabs)[number];

const availableModes = ["classic", "metro", "tdm", "ultimate"] as const;

const statuses = [
    { key: "all", label: "Просто играю" },
    { key: "as", label: "Продвижение АС" },
    { key: "asm", label: "Продвижение АС-мастер" },
    { key: "asd", label: "Продвижение АС-доминатор" },
    { key: "zavic", label: "Беру завика" },
    { key: "legend", label: "Беру легенду" },
] as const;


export default function ProfileScreen() {
    const [activeTab, setActiveTab] = useState<TopTab>("Профиль");
    const {profile,updateField, handleSave, onToggleMode, handleLogout} = useProfile();

    return (
        <SafeAreaView style={styles.safeArea} edges={["top"]}>
               <ProfileHeader profileForm={profile} />
                <ProfileTabs topTabs={topTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === "Профиль" ? (
                    <View>
                        <ProfileMainInfo
                            profileForm={profile}
                            updateField={updateField}
                            handleSave={handleSave}
                            onToggleMode={onToggleMode}
                            availableModes={availableModes}
                            statuses={statuses}
                            handleLogout={handleLogout}
                        />
                    </View>
                ) : (
                    <ProfileClanTab />
                    /*<View></View>*/
                )}

           {/* </ScrollView>*/}
        </SafeAreaView>
    );
}