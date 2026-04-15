import {Pressable, ScrollView, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";
import React from "react";

export function ProfileTabs({topTabs, activeTab, setActiveTab}){
    return (
        <View style={styles.topTabsWrap}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.topTabsRow}
            >
                {topTabs.map((tab) => {
                    const isActive = tab === activeTab;

                    return (
                        <Pressable
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            style={[styles.topTab, isActive && styles.topTabActive]}
                        >
                            <Text
                                style={[
                                    styles.topTabText,
                                    isActive && styles.topTabTextActive,
                                ]}
                            >
                                {tab}
                            </Text>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </View>
    )
}