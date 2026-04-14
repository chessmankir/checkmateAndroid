import React, { useMemo, useState } from "react";
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from "@/src/StyleSheets/profile";

const topTabs = ["Профиль", "Клан", "Карточки", "Сообщения"] as const;
type TopTab = (typeof topTabs)[number];

const availableModes = ["Classic", "Metro", "TDM", "Ultimate"] as const;
type GameMode = (typeof availableModes)[number];

const statuses = [
    "Продвижение до Аса",
    "Играю по фану",
    "Ищу тиммейтов",
    "Тренируюсь",
] as const;
type ProfileStatus = (typeof statuses)[number];

type ProfileForm = {
    nickname: string;
    pubgId: string;
    name: string;
    age: string;
    city: string;
    status: ProfileStatus;
    modes: GameMode[];
};

const initialProfile: ProfileForm = {
    nickname: "ChessmanKir",
    pubgId: "51984492416",
    name: "Кирилл",
    age: "21",
    city: "Вена",
    status: "Продвижение до Аса",
    modes: ["Classic", "Metro", "TDM"],
};

const fakeClan = {
    name: "Checkmate",
    role: "Лидер",
    members: 27,
    description: "Клан для поиска сильных тиммейтов в PUBG Mobile.",
};

const fakeCards = {
    total: 500,
    gilt: 44,
    xSuit: 13,
    upgradedWeapons: 30,
};

const fakeMessages = {
    dialogs: 12,
    unread: 3,
    lastMessage: "Привет, идёшь сегодня в классику?",
};

function SectionCard({
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

function InfoField({
                       label,
                       value,
                       icon,
                       onChangeText,
                       keyboardType = "default",
                       placeholder,
                   }: {
    label: string;
    value: string;
    icon: keyof typeof Ionicons.glyphMap;
    onChangeText: (text: string) => void;
    keyboardType?: "default" | "numeric";
    placeholder?: string;
}) {
    return (
        <View style={styles.fieldCard}>
            <View style={styles.fieldIcon}>
                <Ionicons name={icon} size={18} color="#93c5fd" />
            </View>

            <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>{label}</Text>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    placeholderTextColor="#64748b"
                    style={styles.fieldInput}
                />
            </View>
        </View>
    );
}

function StatBox({
                     label,
                     value,
                     icon,
                 }: {
    label: string;
    value: string;
    icon: keyof typeof Ionicons.glyphMap;
}) {
    return (
        <View style={styles.statCard}>
            <View style={styles.statIcon}>
                <Ionicons name={icon} size={16} color="#93c5fd" />
            </View>
            <Text style={styles.statValue}>{value}</Text>
            <Text style={styles.statLabel}>{label}</Text>
        </View>
    );
}

export default function ProfileScreen() {
    const [activeTab, setActiveTab] = useState<TopTab>("Профиль");
    const [profileForm, setProfileForm] = useState<ProfileForm>(initialProfile);

    const headerStats = useMemo(
        () => [
            {
                label: "Клан",
                value: fakeClan.name,
                icon: "people-outline" as const,
            },
            {
                label: "Карточки",
                value: String(fakeCards.total),
                icon: "albums-outline" as const,
            },
            {
                label: "Сообщения",
                value: String(fakeMessages.unread),
                icon: "chatbubble-ellipses-outline" as const,
            },
        ],
        []
    );

    const updateField = <K extends keyof ProfileForm>(key: K, value: ProfileForm[K]) => {
        setProfileForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const toggleMode = (mode: GameMode) => {
        setProfileForm((prev) => {
            const exists = prev.modes.includes(mode);

            if (exists) {
                return {
                    ...prev,
                    modes: prev.modes.filter((item) => item !== mode),
                };
            }

            return {
                ...prev,
                modes: [...prev.modes, mode],
            };
        });
    };

    const handleSave = () => {
        console.log("PROFILE SAVE:", profileForm);

        Alert.alert("Сохранено", "Фейковые данные профиля сохранены локально.");
    };

    const renderProfileTab = () => (
        <View style={styles.contentBlock}>
            <SectionCard
                title="Основная информация"
                subtitle="Эти поля уже редактируются"
            >
                <View style={styles.fieldsGrid}>
                    <InfoField
                        label="Ник"
                        value={profileForm.nickname}
                        icon="person-outline"
                        onChangeText={(text) => updateField("nickname", text)}
                        placeholder="Введите ник"
                    />

                    <InfoField
                        label="PUBG ID"
                        value={profileForm.pubgId}
                        icon="game-controller-outline"
                        onChangeText={(text) =>
                            updateField("pubgId", text.replace(/[^0-9]/g, ""))
                        }
                        keyboardType="numeric"
                        placeholder="Введите PUBG ID"
                    />

                    <InfoField
                        label="Имя"
                        value={profileForm.name}
                        icon="id-card-outline"
                        onChangeText={(text) => updateField("name", text)}
                        placeholder="Введите имя"
                    />

                    <InfoField
                        label="Возраст"
                        value={profileForm.age}
                        icon="calendar-outline"
                        onChangeText={(text) =>
                            updateField("age", text.replace(/[^0-9]/g, ""))
                        }
                        keyboardType="numeric"
                        placeholder="Введите возраст"
                    />

                    <InfoField
                        label="Город"
                        value={profileForm.city}
                        icon="location-outline"
                        onChangeText={(text) => updateField("city", text)}
                        placeholder="Введите город"
                    />
                </View>
            </SectionCard>

            <SectionCard title="Статус" subtitle="Выбери один вариант">
                <View style={styles.statusWrap}>
                    {statuses.map((statusItem) => {
                        const isActive = profileForm.status === statusItem;

                        return (
                            <Pressable
                                key={statusItem}
                                onPress={() => updateField("status", statusItem)}
                                style={[
                                    styles.statusChip,
                                    isActive && styles.statusChipActive,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.statusChipText,
                                        isActive && styles.statusChipTextActive,
                                    ]}
                                >
                                    {statusItem}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>
            </SectionCard>

            <SectionCard title="Режимы" subtitle="Можно выбрать несколько">
                <View style={styles.chipsWrap}>
                    {availableModes.map((mode) => {
                        const isActive = profileForm.modes.includes(mode);

                        return (
                            <Pressable
                                key={mode}
                                onPress={() => toggleMode(mode)}
                                style={[styles.modeChip, isActive && styles.modeChipActive]}
                            >
                                <Ionicons
                                    name={isActive ? "checkmark-circle" : "ellipse-outline"}
                                    size={16}
                                    color={isActive ? "#08111f" : "#93c5fd"}
                                />
                                <Text
                                    style={[
                                        styles.modeChipText,
                                        isActive && styles.modeChipTextActive,
                                    ]}
                                >
                                    {mode}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>
            </SectionCard>

            <SectionCard title="Кратко по профилю">
                <View style={styles.summaryRow}>
                    <View style={styles.summaryBox}>
                        <Text style={styles.summaryValue}>{fakeCards.gilt}</Text>
                        <Text style={styles.summaryLabel}>Gilt</Text>
                    </View>

                    <View style={styles.summaryBox}>
                        <Text style={styles.summaryValue}>{fakeCards.xSuit}</Text>
                        <Text style={styles.summaryLabel}>X-Suit</Text>
                    </View>

                    <View style={styles.summaryBox}>
                        <Text style={styles.summaryValue}>{fakeMessages.unread}</Text>
                        <Text style={styles.summaryLabel}>Новых</Text>
                    </View>
                </View>
            </SectionCard>

            <Pressable style={styles.saveButton} onPress={handleSave}>
                <Ionicons name="save-outline" size={18} color="#08111f" />
                <Text style={styles.saveButtonText}>Сохранить</Text>
            </Pressable>
        </View>
    );

    const renderClanTab = () => (
        <View style={styles.contentBlock}>
            <SectionCard title="Клан" subtitle="Фейковый блок для будущего API">
                <View style={styles.simpleList}>
                    <View style={styles.simpleRow}>
                        <Text style={styles.simpleKey}>Название</Text>
                        <Text style={styles.simpleValue}>{fakeClan.name}</Text>
                    </View>

                    <View style={styles.simpleRow}>
                        <Text style={styles.simpleKey}>Роль</Text>
                        <Text style={styles.simpleValue}>{fakeClan.role}</Text>
                    </View>

                    <View style={styles.simpleRow}>
                        <Text style={styles.simpleKey}>Участников</Text>
                        <Text style={styles.simpleValue}>{fakeClan.members}</Text>
                    </View>
                </View>

                <View style={styles.descriptionBox}>
                    <Text style={styles.descriptionText}>{fakeClan.description}</Text>
                </View>
            </SectionCard>
        </View>
    );

    const renderCardsTab = () => (
        <View style={styles.contentBlock}>
            <SectionCard title="Карточки" subtitle="Пока только заглушка">
                <View style={styles.summaryRow}>
                    <View style={styles.summaryBoxLarge}>
                        <Text style={styles.summaryValue}>{fakeCards.total}</Text>
                        <Text style={styles.summaryLabel}>Всего карточек</Text>
                    </View>

                    <View style={styles.summaryBoxLarge}>
                        <Text style={styles.summaryValue}>{fakeCards.gilt}</Text>
                        <Text style={styles.summaryLabel}>Топ Gilt</Text>
                    </View>
                </View>

                <View style={styles.summaryRow}>
                    <View style={styles.summaryBoxLarge}>
                        <Text style={styles.summaryValue}>{fakeCards.xSuit}</Text>
                        <Text style={styles.summaryLabel}>X-Suit</Text>
                    </View>

                    <View style={styles.summaryBoxLarge}>
                        <Text style={styles.summaryValue}>{fakeCards.upgradedWeapons}</Text>
                        <Text style={styles.summaryLabel}>Прокач. оружия</Text>
                    </View>
                </View>
            </SectionCard>
        </View>
    );

    const renderMessagesTab = () => (
        <View style={styles.contentBlock}>
            <SectionCard title="Сообщения" subtitle="Пока только фейковые данные">
                <View style={styles.simpleList}>
                    <View style={styles.simpleRow}>
                        <Text style={styles.simpleKey}>Диалогов</Text>
                        <Text style={styles.simpleValue}>{fakeMessages.dialogs}</Text>
                    </View>

                    <View style={styles.simpleRow}>
                        <Text style={styles.simpleKey}>Непрочитанных</Text>
                        <Text style={styles.simpleValue}>{fakeMessages.unread}</Text>
                    </View>
                </View>

                <View style={styles.descriptionBox}>
                    <Text style={styles.descriptionLabel}>Последнее сообщение</Text>
                    <Text style={styles.descriptionText}>{fakeMessages.lastMessage}</Text>
                </View>
            </SectionCard>
        </View>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case "Клан":
                return renderClanTab();
            case "Карточки":
                return renderCardsTab();
            case "Сообщения":
                return renderMessagesTab();
            case "Профиль":
            default:
                return renderProfileTab();
        }
    };

    return (
        <SafeAreaView style={styles.safeArea} edges={["top"]}>
            <ScrollView
                style={styles.screen}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[1]}
            >
                <View style={styles.heroCard}>
                    <View style={styles.heroTop}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>
                                {profileForm.nickname.slice(0, 2).toUpperCase()}
                            </Text>
                        </View>

                        <View style={styles.heroInfo}>
                            <Text style={styles.brand}>Checkmate</Text>
                            <Text style={styles.heroTitle}>{profileForm.nickname}</Text>
                            <Text style={styles.heroSubtitle}>
                                Мобильный профиль в современном стиле
                            </Text>
                        </View>
                    </View>

                    <View style={styles.heroStatusBadge}>
                        <Ionicons name="flash" size={14} color="#08111f" />
                        <Text style={styles.heroStatusText}>{profileForm.status}</Text>
                    </View>

                    <View style={styles.statsRow}>
                        {headerStats.map((item) => (
                            <StatBox
                                key={item.label}
                                label={item.label}
                                value={item.value}
                                icon={item.icon}
                            />
                        ))}
                    </View>
                </View>

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

                {renderTabContent()}
            </ScrollView>
        </SafeAreaView>
    );
}

