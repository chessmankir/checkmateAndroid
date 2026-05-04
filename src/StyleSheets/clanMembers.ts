import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    screen: {
        paddingBottom: 24,
    },

    headerBlock: {
        marginBottom: 14,
    },

    title: {
        color: "#F7FAFF",
        fontSize: 24,
        fontWeight: "800",
        marginBottom: 4,
    },

    titlePhone: {
        fontSize: 22,
    },

    subtitle: {
        color: "#98A4BD",
        fontSize: 13,
        lineHeight: 18,
    },

    clansWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginBottom: 16,
        marginTop: 12,
    },

    clanChip: {
        minHeight: 48,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "rgba(120, 138, 255, 0.22)",
        backgroundColor: "#151C30",
        paddingHorizontal: 14,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },

    clanChipPhone: {
        width: "48%",
    },

    clanChipTablet: {
        minWidth: 150,
        maxWidth: "48%",
    },

    clanChipActive: {
        backgroundColor: "#1F63FF",
        borderColor: "rgba(126, 170, 255, 0.75)",
    },

    clanChipText: {
        flex: 1,
        color: "#E8EEFF",
        fontSize: 14,
        fontWeight: "700",
    },

    clanChipTextActive: {
        color: "#FFFFFF",
    },

    countBadge: {
        minWidth: 26,
        height: 24,
        borderRadius: 999,
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.08)",
    },

    countBadgeActive: {
        backgroundColor: "rgba(255,255,255,0.18)",
    },

    countBadgeText: {
        color: "#C9D6F4",
        fontSize: 12,
        fontWeight: "800",
    },

    countBadgeTextActive: {
        color: "#FFFFFF",
    },

    searchCard: {
        backgroundColor: "#131A2C",
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "rgba(115, 142, 255, 0.16)",
        padding: 14,
        marginBottom: 16,
    },

    searchInput: {
        height: 50,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "rgba(134, 154, 255, 0.24)",
        backgroundColor: "#1A2136",
        paddingHorizontal: 15,
        color: "#FFFFFF",
        fontSize: 14,
    },

    searchInputPhone: {
        height: 48,
        fontSize: 14,
    },

    totalText: {
        marginTop: 10,
        color: "#C8D4EF",
        fontSize: 13,
        fontWeight: "700",
        textAlign: "right",
    },

    listContent: {
        paddingBottom: 140
    },

    separator: {
        height: 10,
    },

   /* memberRow: {
        minHeight: 82,
        backgroundColor: "#131A2C",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "rgba(115, 142, 255, 0.18)",
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },*/
    memberRow: {
        minHeight: 62,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },

    memberRowLeft: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        minWidth: 0,
    },

    memberRowInfo: {
        flex: 1,
        minWidth: 0,
    },

    avatarCircle: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: "#235BFF",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },

    avatarText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "800",
    },

    nameRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    memberRowName: {
        color: "#F8FBFF",
        fontSize: 15,
        fontWeight: "800",
        flexShrink: 1,
    },

    memberRowNameSmall: {
        fontSize: 14,
    },

    memberRowNick: {
        color: "#8FA0C3",
        fontSize: 12,
        marginTop: 1,
    },

    memberRowMeta: {
        color: "#B8C5E0",
        fontSize: 11,
        marginTop: 4,
    },

    onlineDot: {
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: "#35D07F",
    },

    miniProfileButton: {
        minWidth: 84,
        height: 34,
        paddingHorizontal: 12,
        borderRadius: 11,
        backgroundColor: "#1F63FF",
        alignItems: "center",
        justifyContent: "center",
    },

    miniProfileButtonText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "700",
    },

    emptyBox: {
        paddingVertical: 32,
        alignItems: "center",
    },

    emptyText: {
        color: "#98A2B3",
        fontSize: 14,
    },
    clanDropdownWrap: {
        width: "100%",
        position: "relative",
        zIndex: 20,
    },

    clanSelectedBox: {
        minHeight: 52,
        borderRadius: 16,
        paddingHorizontal: 14,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#151a2e",
        borderWidth: 1,
        borderColor: "#2a335c",
        marginBottom: 12
    },

    clanSelectedLeft: {
        flex: 1,
        paddingRight: 12,
    },

    clanSelectedRight: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    clanArrow: {
        color: "#cdd6f4",
        fontSize: 12,
        fontWeight: "700",
    },

    clanDropdownList: {
        marginTop: 8,
        borderRadius: 16,
        backgroundColor: "#11162a",
        borderWidth: 1,
        borderColor: "#2a335c",
        overflow: "hidden",
    },

    clanDropdownItem: {
        minHeight: 50,
        paddingHorizontal: 14,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#202846",
    },

    clanDropdownItemActive: {
        backgroundColor: "#1b2442",
    },
    memberActions: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    memberMenuButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.06)",
    },

    memberCard: {
        backgroundColor: "#131A2C",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "rgba(115, 142, 255, 0.18)",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    memberRowOpen: {
        paddingBottom: 18,
    },

    memberActivityBox: {
        width: "100%",
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: "rgba(255,255,255,0.08)",
        gap: 10,
    },

    activityItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    activityLabel: {
        color: "#94a3b8",
        fontSize: 13,
    },

    activityValue: {
        color: "#e5e7eb",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "right",
    },

    memberActivityText: {
        color: "#94a3b8",
        fontSize: 13,
    },

    memberModalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.35)",
        justifyContent: "center",
        alignItems: "center",
    },

    memberModalBox: {
        width: 230,
        backgroundColor: "#111827",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.12)",
        overflow: "hidden",
    },

    memberDropdown: {
        width: "100%",
    },

    memberDropdownItem: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.06)",
    },

    memberDropdownText: {
        color: "#e5e7eb",
        fontSize: 14,
        fontWeight: "600",
    },

    memberDropdownBanText: {
        color: "#f87171",
        fontSize: 14,
        fontWeight: "700",
    },

    searchInputWrap: {
        position: "relative",
        justifyContent: "center",
    },

    searchInputWithClear: {
        paddingRight: 42,
    },

    clearSearchButton: {
        position: "absolute",
        right: 12,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
});