import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#0b1220",
    },

    screen: {
        flex: 1,
        backgroundColor: "#0b1220",
    },

    scrollContent: {
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 36,
    },

    heroCard: {
        backgroundColor: "#111827",
        borderRadius: 28,
        padding: 18,
        borderWidth: 1,
        borderColor: "#1f2937",
        marginBottom: 16,
    },

    heroTop: {
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: "#1d4ed8",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 14,
    },

    avatarText: {
        color: "#eff6ff",
        fontSize: 26,
        fontWeight: "800",
    },

    heroInfo: {
        flex: 1,
    },

    brand: {
        color: "#60a5fa",
        fontSize: 13,
        fontWeight: "700",
        marginBottom: 4,
    },

    heroTitle: {
        color: "#f8fafc",
        fontSize: 24,
        fontWeight: "800",
    },

    heroSubtitle: {
        color: "#94a3b8",
        fontSize: 13,
        lineHeight: 18,
        marginTop: 6,
    },

    heroStatusBadge: {
        alignSelf: "flex-start",
        marginTop: 16,
        backgroundColor: "#60a5fa",
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    heroStatusText: {
        color: "#08111f",
        fontSize: 12,
        fontWeight: "800",
    },

    statsRow: {
        flexDirection: "row",
        gap: 10,
        marginTop: 18,
    },

    statCard: {
        flex: 1,
        backgroundColor: "#0b1220",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#223049",
        paddingVertical: 14,
        paddingHorizontal: 12,
        alignItems: "center",
    },

    statIcon: {
        marginBottom: 8,
    },

    statValue: {
        color: "#f8fafc",
        fontSize: 16,
        fontWeight: "800",
    },

    statLabel: {
        color: "#94a3b8",
        fontSize: 12,
        marginTop: 4,
        textAlign: "center",
    },

    topTabsWrap: {
        backgroundColor: "#0b1220",
        paddingBottom: 12,
        zIndex: 10,
    },

    topTabsRow: {
        gap: 10,
        paddingRight: 4,
    },

    topTab: {
        height: 42,
        borderRadius: 999,
        paddingHorizontal: 16,
        backgroundColor: "#111827",
        borderWidth: 1,
        borderColor: "#1f2937",
        justifyContent: "center",
        alignItems: "center",
    },

    topTabActive: {
        backgroundColor: "#60a5fa",
        borderColor: "#60a5fa",
    },

    topTabText: {
        color: "#cbd5e1",
        fontSize: 13,
        fontWeight: "700",
    },

    topTabTextActive: {
        color: "#08111f",
    },

    contentBlock: {
        gap: 14,
    },

    sectionCard: {
        backgroundColor: "#111827",
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#1f2937",
        padding: 16,
        marginBottom: 18,
    },

    sectionHeader: {
        marginBottom: 14,
    },

    sectionTitle: {
        color: "#f8fafc",
        fontSize: 18,
        fontWeight: "800",
    },

    sectionSubtitle: {
        color: "#94a3b8",
        fontSize: 13,
        marginTop: 4,
        lineHeight: 18,
    },

    fieldsGrid: {
        gap: 12,
    },

    fieldCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#0b1220",
        borderWidth: 1,
        borderColor: "#1f2937",
        borderRadius: 18,
        padding: 12,
    },

    fieldIcon: {
        width: 40,
        height: 40,
        borderRadius: 14,
        backgroundColor: "#111827",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    fieldContent: {
        flex: 1,
    },

    fieldLabel: {
        color: "#94a3b8",
        fontSize: 12,
        marginBottom: 4,
    },

    fieldInput: {
        color: "#f8fafc",
        fontSize: 15,
        fontWeight: "600",
        paddingVertical: 0,
    },

    statusWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },

    statusChip: {
        backgroundColor: "#0b1220",
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "#223049",
        paddingHorizontal: 14,
        paddingVertical: 10,
    },

    statusChipActive: {
        backgroundColor: "#60a5fa",
        borderColor: "#60a5fa",
    },

    statusChipText: {
        color: "#cbd5e1",
        fontSize: 13,
        fontWeight: "700",
    },

    statusChipTextActive: {
        color: "#08111f",
    },

    chipsWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },

    modeChip: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: "#0b1220",
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "#223049",
        paddingHorizontal: 14,
        paddingVertical: 10,
    },

    modeChipActive: {
        backgroundColor: "#60a5fa",
        borderColor: "#60a5fa",
    },

    modeChipText: {
        color: "#cbd5e1",
        fontSize: 13,
        fontWeight: "700",
    },

    modeChipTextActive: {
        color: "#08111f",
    },

    summaryRow: {
        flexDirection: "row",
        gap: 10,
        marginTop: 2,
        marginBottom: 10,
    },

    summaryBox: {
        flex: 1,
        backgroundColor: "#0b1220",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#1f2937",
        paddingVertical: 18,
        paddingHorizontal: 10,
        alignItems: "center",
    },

    summaryBoxLarge: {
        flex: 1,
        backgroundColor: "#0b1220",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#1f2937",
        paddingVertical: 22,
        paddingHorizontal: 12,
        alignItems: "center",
    },

    summaryValue: {
        color: "#f8fafc",
        fontSize: 22,
        fontWeight: "800",
    },

    summaryLabel: {
        color: "#94a3b8",
        fontSize: 12,
        marginTop: 6,
        textAlign: "center",
    },

    saveButton: {
        height: 54,
        borderRadius: 18,
        backgroundColor: "#60a5fa",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
        marginTop: 4,
    },

    saveButtonText: {
        color: "#08111f",
        fontSize: 15,
        fontWeight: "800",
    },

    simpleList: {
        gap: 12,
    },

    simpleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0b1220",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#1f2937",
        paddingVertical: 14,
        paddingHorizontal: 14,
    },

    simpleKey: {
        color: "#94a3b8",
        fontSize: 14,
    },

    simpleValue: {
        color: "#f8fafc",
        fontSize: 14,
        fontWeight: "700",
    },

    descriptionBox: {
        marginTop: 14,
        backgroundColor: "#0b1220",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#1f2937",
        padding: 14,
    },

    descriptionLabel: {
        color: "#94a3b8",
        fontSize: 12,
        marginBottom: 6,
    },

    descriptionText: {
        color: "#e2e8f0",
        fontSize: 14,
        lineHeight: 20,
    },
    messageButton: {
        marginTop: 4,
        backgroundColor: "#2563eb",
        borderRadius: 18,
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },
    messageButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "700",
    },
    logoutButton: {
        backgroundColor: "#ff3b30",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 6,
    },
    logoutButtonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 14,
    },
    buttonsWrap: {
        marginTop: 20,
        gap: 12
    },

    simpleRight: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    copyIcon: {
        padding: 4,
        borderRadius: 6,
    },
    clanBadge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999,
        backgroundColor: "rgba(143, 176, 255, 0.12)",
        borderWidth: 1,
        borderColor: "rgba(143, 176, 255, 0.28)",
        maxWidth: "65%",
    },
    clanBadgeText: {
        color: "#dbe7ff",
        fontSize: 14,
        fontWeight: "700",
    },
});