import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#0B1020",
    },

    listContent: {
        paddingHorizontal: 12,
        paddingBottom: 20,
        paddingTop: 10,
    },

    topHeader: {
        marginBottom: 10,
    },

    screenTitle: {
        color: "#FFFFFF",
        fontSize: 26,
        fontWeight: "800",
    },

    stickyWrap: {
        backgroundColor: "#0B1020",
        paddingBottom: 10,
        paddingTop: 2,
        marginBottom: 8,
        zIndex: 20,
    },

    sectionTitle: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 8,
    },

    albumRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },

    albumChip: {
        backgroundColor: "#151C31",
        borderWidth: 1,
        borderColor: "#263252",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
    },

    albumChipActive: {
        backgroundColor: "#2457FF",
        borderColor: "#2457FF",
    },

    albumChipText: {
        color: "#DCE5FF",
        fontSize: 12,
        fontWeight: "600",
    },

    albumChipTextActive: {
        color: "#FFFFFF",
    },

    columnWrapper: {
        justifyContent: "space-between",
        marginBottom: 12,
    },

    cardBox: {
        marginBottom: 12,
    },

    imageWrap: {
        borderRadius: 14,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#25314F",
        backgroundColor: "#11182D",
    },

    image: {
        width: "100%",
        aspectRatio: 0.7,
        resizeMode: "cover",
        backgroundColor: "#11182D",
    },

    imageFallback: {
        width: "100%",
        aspectRatio: 0.7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1A2238",
    },

    imageFallbackText: {
        color: "#AAB6D3",
        fontSize: 12,
    },

    metaBox: {
        marginTop: 6,
        paddingHorizontal: 2,
    },

    cardTitle: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 15,
        minHeight: 30,
        marginBottom: 6,
    },

    counterRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#11182D",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#25314F",
        paddingHorizontal: 6,
        paddingVertical: 4,
        gap: 6,
    },

    counterBtn: {
        width: 24,
        height: 24,
        borderRadius: 7,
        backgroundColor: "#2457FF",
        alignItems: "center",
        justifyContent: "center",
    },

    counterBtnText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "800",
        lineHeight: 16,
    },

    countText: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "700",
        minWidth: 18,
        textAlign: "center",
    },

    emptyBox: {
        paddingTop: 40,
        alignItems: "center",
    },

    emptyText: {
        color: "#AAB6D3",
        fontSize: 14,
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },

    modalCard: {
        width: "100%",
        maxWidth: 420,
        backgroundColor: "#11182D",
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: "#25314F",
    },

    modalClose: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 5,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(255,255,255,0.08)",
        alignItems: "center",
        justifyContent: "center",
    },

    modalCloseText: {
        color: "#fff",
        fontSize: 24,
        lineHeight: 24,
    },

    modalImageWrap: {
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "#1A2238",
    },

    modalImage: {
        width: "100%",
        aspectRatio: 0.72,
        resizeMode: "cover",
    },

    modalTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "800",
        marginTop: 14,
        marginBottom: 14,
        textAlign: "center",
    },

    modalActions: {
        flexDirection: "row",
        justifyContent: "center",
    },

    modalButton: {
        minWidth: 140,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 12,
        backgroundColor: "#2457FF",
        alignItems: "center",
    },

    modalButtonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "700",
    },
    countBadge: {
        position: "absolute",
        top: 6,
        right: 6,
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: 8,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    countBadgeText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
    },
});