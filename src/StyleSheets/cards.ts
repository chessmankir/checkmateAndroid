import {StyleSheet} from "react-native";

export  const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#0B1020",
    },

    listContent: {
        paddingHorizontal: 12,
        paddingBottom: 18,
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
        marginBottom: 10,
    },

    cardBox: {
        marginBottom: 0,
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
    },

    metaBox: {
        marginTop: 5,
        paddingHorizontal: 2,
    },

    cardTitle: {
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "700",
        lineHeight: 14,
        minHeight: 28,
        marginBottom: 5,
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
    },

    counterBtn: {
        width: 22,
        height: 22,
        borderRadius: 7,
        backgroundColor: "#2457FF",
        alignItems: "center",
        justifyContent: "center",
    },

    counterBtnDisabled: {
        backgroundColor: "#444C63",
    },

    counterBtnText: {
        color: "#FFFFFF",
        fontSize: 15,
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
});