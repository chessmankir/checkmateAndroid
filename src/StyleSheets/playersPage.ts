import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#020b22",
    },

    container: {
        flex: 1,
        backgroundColor: "#020b22",
        paddingHorizontal: 16,
        paddingTop: 8,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
    },

    headerTitle: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "800",
    },

    filterIconButton: {
        width: 46,
        height: 46,
        borderRadius: 14,
        backgroundColor: "#101932",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    redDot: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: "#ff4d67",
    },

    searchBox: {
        height: 56,
        borderRadius: 18,
        backgroundColor: "#0d1530",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.05)",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
        gap: 10,
        marginBottom: 8,
    },

    searchInput: {
        flex: 1,
        color: "#fff",
        fontSize: 15,
    },

    appliedFiltersWrap: {
        marginBottom: 8,
    },

    appliedFiltersRow: {
        gap: 10,
        paddingVertical: 6,
        paddingRight: 8,
    },

    appliedChip: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 16,
        backgroundColor: "#f3e2fb",
    },

    appliedChipText: {
        color: "#b04cff",
        fontSize: 14,
        fontWeight: "700",
    },

    listContent: {
        paddingTop: 4,
        paddingBottom: 28,
        gap: 10
    },

    playerCard: {
        backgroundColor: "#151a2e",
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginBottom: 8,
    },

    playerTop: {
        flexDirection: "row",
        alignItems: "flex-start",
    },

    playerLeft: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        minWidth: 0,
    },

    avatarCircle: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: "#243257",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },

    avatarText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "800",
    },

    playerInfo: {
        flex: 1,
        marginLeft: 10,
        minWidth: 0,
    },

    nameRow: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 6,
    },

    playerName: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        flexShrink: 1,
    },

    onlineDot: {
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: "#2dd36f",
        flexShrink: 0,
    },

    modeInline: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        backgroundColor: "rgba(77,163,255,0.15)",
    },

    modeInlineText: {
        color: "#4da3ff",
        fontSize: 11,
        fontWeight: "700",
    },

    playerNick: {
        marginTop: 3,
        color: "#a7b3d5",
        fontSize: 13,
        fontWeight: "600",
    },

    playerMeta: {
        marginTop: 4,
        color: "#c0cae6",
        fontSize: 12,
    },

    profileButton: {
        marginTop: 8,
        alignSelf: "flex-start",
    },

    profileButtonText: {
        color: "#4da3ff",
        fontSize: 13,
        fontWeight: "700",
    },

    emptyBox: {
        borderRadius: 22,
        backgroundColor: "#0b1431",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.04)",
        paddingVertical: 36,
        paddingHorizontal: 20,
        alignItems: "center",
        marginTop: 8,
    },

    emptyTitle: {
        marginTop: 10,
        color: "#fff",
        fontSize: 17,
        fontWeight: "800",
    },

    emptyText: {
        marginTop: 6,
        color: "#98a2c7",
        fontSize: 13,
        textAlign: "center",
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.45)",
        justifyContent: "flex-end",
    },

    modalSheet: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 20,
        maxHeight: "85%",
    },

    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
    },

    modalTitle: {
        fontSize: 28,
        fontWeight: "800",
        color: "#161616",
    },

    modalContent: {
        paddingBottom: 12,
        gap: 20,
    },

    filterBlock: {
        gap: 12,
    },

    filterBlockTitle: {
        fontSize: 22,
        fontWeight: "800",
        color: "#161616",
    },

    chipsWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },

    selectChip: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: "#f2f2f6",
    },

    selectChipActive: {
        backgroundColor: "#f4e4fd",
    },

    selectChipText: {
        color: "#222",
        fontSize: 15,
        fontWeight: "600",
    },

    selectChipTextActive: {
        color: "#bb4dff",
        fontWeight: "700",
    },

    statusList: {
        gap: 10,
    },

    statusRow: {
        minHeight: 52,
        borderRadius: 16,
        backgroundColor: "#f5f5f7",
        paddingHorizontal: 14,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    statusRowActive: {
        backgroundColor: "#f3e4fd",
    },

    statusRowText: {
        flex: 1,
        color: "#222",
        fontSize: 15,
        fontWeight: "600",
    },

    statusRowTextActive: {
        color: "#b44fff",
        fontWeight: "700",
    },

    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: "#b7b7c9",
        alignItems: "center",
        justifyContent: "center",
    },

    radioOuterActive: {
        borderColor: "#b44fff",
    },

    radioInner: {
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: "#b44fff",
    },

    modalButtons: {
        flexDirection: "row",
        gap: 12,
        marginTop: 10,
    },

    resetModalButton: {
        flex: 1,
        height: 54,
        borderRadius: 18,
        backgroundColor: "#efeff3",
        alignItems: "center",
        justifyContent: "center",
    },

    resetModalButtonText: {
        color: "#222",
        fontSize: 16,
        fontWeight: "700",
    },

    applyModalButton: {
        flex: 1,
        height: 54,
        borderRadius: 18,
        backgroundColor: "#b734ff",
        alignItems: "center",
        justifyContent: "center",
    },

    applyModalButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "800",
    },
    inputWrap: {
        flex: 1,
        position: "relative",
        justifyContent: "center",
    },

    searchInputWithClear: {
        paddingRight: 36,
    },

    clearButton: {
        position: "absolute",
        right: 8,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
});