import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#111827",
        borderWidth: 1,
        borderColor: "#1f2937",
        borderRadius: 22,
        padding: 16,
        marginBottom: 14,
    },
    cardTop: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 58,
        height: 58,
        borderRadius: 18,
        backgroundColor: "#1d4ed8",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 14,
    },
    avatarText: {
        color: "#eff6ff",
        fontSize: 24,
        fontWeight: "800",
    },
    cardInfo: {
        flex: 1,
    },
    nameRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    nickname: {
        color: "#f8fafc",
        fontSize: 18,
        fontWeight: "700",
    },
    statusDot: {
        width: 10,
        height: 10,
        borderRadius: 999,
    },
    statusOnline: {
        backgroundColor: "#22c55e",
    },
    statusOffline: {
        backgroundColor: "#64748b",
    },
    role: {
        color: "#93c5fd",
        fontSize: 14,
        marginTop: 4,
        fontWeight: "600",
    },
    city: {
        color: "#94a3b8",
        fontSize: 13,
        marginTop: 4,
    },
    modeBadge: {
        backgroundColor: "#0b1220",
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#223049",
        marginLeft: 10,
    },
    modeBadgeText: {
        color: "#cbd5e1",
        fontSize: 12,
        fontWeight: "700",
    },
    cardBottom: {
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#1f2937",
        paddingTop: 14,
    },
    onlineBox: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 14,
        gap: 6,
    },
    onlineText: {
        color: "#94a3b8",
        fontSize: 13,
        fontWeight: "500",
    },
    actionRow: {
        flexDirection: "row",
        gap: 10,
    },
    secondaryButton: {
        flex: 1,
        height: 44,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#334155",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0b1220",
    },
    secondaryButtonText: {
        color: "#e2e8f0",
        fontSize: 14,
        fontWeight: "700",
    },
    primaryButton: {
        flex: 1,
        height: 44,
        borderRadius: 14,
        backgroundColor: "#60a5fa",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
    },
    primaryButtonText: {
        color: "#08111f",
        fontSize: 14,
        fontWeight: "800",
    },
});