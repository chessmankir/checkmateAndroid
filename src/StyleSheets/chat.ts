import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0b1120",
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 8,
    },
    title: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "700",
    },
    searchWrap: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 12,
        backgroundColor: "#172036",
        borderWidth: 1,
        borderColor: "#243041",
        borderRadius: 14,
        paddingHorizontal: 12,
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    searchInput: {
        flex: 1,
        color: "#fff",
        fontSize: 15,
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 20,
        gap: 10,
    },
    chatCard: {
        backgroundColor: "#121a2b",
        borderWidth: 1,
        borderColor: "#202b3d",
        borderRadius: 18,
        padding: 12,
        flexDirection: "row",
        gap: 12,
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: "#2563eb",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
    },
    chatInfo: {
        flex: 1,
        justifyContent: "center",
    },
    chatTopRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    chatName: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        flex: 1,
        marginRight: 10,
    },
    chatTime: {
        color: "#94a3b8",
        fontSize: 12,
    },
    chatLastSeen: {
        color: "#7c8aa5",
        fontSize: 12,
        marginTop: 3,
    },
    chatBottomRow: {
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    chatMessage: {
        flex: 1,
        color: "#cbd5e1",
        fontSize: 14,
    },
    unreadBadge: {
        minWidth: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: "#3b82f6",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 6,
    },
    unreadText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
    },
    emptyWrap: {
        paddingTop: 40,
        alignItems: "center",
    },
    emptyText: {
        color: "#94a3b8",
        fontSize: 15,
    },
});