import {Modal, Pressable, ScrollView, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/playersPage";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {PlayerMode} from "@/src/types/PlayerMode";
import {PlayerStatus} from "@/src/types/PlayerStatus";

const MODES: { key: PlayerMode; label: string }[] = [
    { key: "classic", label: "Классика" },
    { key: "metro", label: "Metro" },
    { key: "tdm", label: "TDM" },
    { key: "ultimate", label: "Ultimate Royale" },
];

const STATUSES: { key: PlayerStatus; label: string }[] = [
    { key: "all", label: "Любой" },
    { key: "as", label: "Продвижение Ас" },
    { key: "as-master", label: "Продвижение Ас-мастер" },
    { key: "as-dominator", label: "Продвижение Ас-доминатора" },
    { key: "conqueror", label: "Беру завика" },
    { key: "legend", label: "Беру легенду" },
];


export  function PlayerFilterModal({filterModalVisible,setFilterModalVisible, draftMode,
                           setDraftMode, draftStatus, setDraftStatus,applyFilters}){
    return (
        <Modal
            animationType="slide"
            transparent
            visible={filterModalVisible}
            onRequestClose={() => setFilterModalVisible(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalSheet}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Фильтры</Text>

                        <Pressable onPress={() => setFilterModalVisible(false)}>
                            <Ionicons name="close" size={24} color="#111" />
                        </Pressable>
                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.modalContent}
                    >
                        <View style={styles.filterBlock}>
                            <Text style={styles.filterBlockTitle}>Режим</Text>

                            <View style={styles.chipsWrap}>
                                {MODES.map((mode) => {
                                    const active = draftMode === mode.key;

                                    return (
                                        <Pressable
                                            key={mode.key}
                                            style={[
                                                styles.selectChip,
                                                active && styles.selectChipActive,
                                            ]}
                                            onPress={() =>
                                                setDraftMode((prev) =>
                                                    prev === mode.key ? null : mode.key
                                                )
                                            }
                                        >
                                            <Text
                                                style={[
                                                    styles.selectChipText,
                                                    active &&
                                                    styles.selectChipTextActive,
                                                ]}
                                            >
                                                {mode.label}
                                            </Text>
                                        </Pressable>
                                    );
                                })}
                            </View>
                        </View>

                        <View style={styles.filterBlock}>
                            <Text style={styles.filterBlockTitle}>
                                Продвижение
                            </Text>

                            <View style={styles.statusList}>
                                {STATUSES.map((status) => {
                                    const active = draftStatus === status.key;

                                    return (
                                        <Pressable
                                            key={status.key}
                                            style={[
                                                styles.statusRow,
                                                active && styles.statusRowActive,
                                            ]}
                                            onPress={() =>
                                                setDraftStatus(status.key)
                                            }
                                        >
                                            <View
                                                style={[
                                                    styles.radioOuter,
                                                    active &&
                                                    styles.radioOuterActive,
                                                ]}
                                            >
                                                {active && (
                                                    <View
                                                        style={styles.radioInner}
                                                    />
                                                )}
                                            </View>

                                            <Text
                                                style={[
                                                    styles.statusRowText,
                                                    active &&
                                                    styles.statusRowTextActive,
                                                ]}
                                            >
                                                {status.label}
                                            </Text>
                                        </Pressable>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>

                    <View style={styles.modalButtons}>
                        <Pressable
                            style={styles.resetModalButton}
                            onPress={() => {
                                setDraftMode(null);
                                setDraftStatus("all");
                            }}
                        >
                            <Text style={styles.resetModalButtonText}>
                                Сбросить
                            </Text>
                        </Pressable>

                        <Pressable
                            style={styles.applyModalButton}
                            onPress={applyFilters}
                        >
                            <Text style={styles.applyModalButtonText}>
                                Применить
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}