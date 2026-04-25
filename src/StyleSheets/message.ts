import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0b1120",
    },
    header: {
        minHeight: 68,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#1f2937",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#111827",
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#172036",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    headerInfo: {
        flex: 1,
    },
    headerName: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },
    messagesContent: {
        paddingHorizontal: 12,
        paddingTop: 14,
        paddingBottom: 16,
    },
    messageRow: {
        marginBottom: 10,
        flexDirection: "row",
    },
    messageRowMine: {
        justifyContent: "flex-end",
    },
    messageRowOther: {
        justifyContent: "flex-start",
    },
    messageBubble: {
        maxWidth: "78%",
        borderRadius: 18,
        paddingHorizontal: 12,
        paddingTop: 10,
        paddingBottom: 8,
    },
    messageBubbleMine: {
        backgroundColor: "#22c55e",
        borderBottomRightRadius: 6,
    },
    messageBubbleOther: {
        backgroundColor: "#334155",
        borderBottomLeftRadius: 6,
    },
    messageText: {
        color: "#fff",
        fontSize: 15,
        lineHeight: 20,
    },
    messageTime: {
        color: "#e5e7eb",
        fontSize: 11,
        marginTop: 6,
        textAlign: "right",
    },
    inputBar: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 12,
        paddingTop: 10,
        paddingBottom: 14,
        borderTopWidth: 1,
        borderTopColor: "#1f2937",
        backgroundColor: "#111827",
    },
    input: {
        flex: 1,
        minHeight: 46,
        maxHeight: 100,
        backgroundColor: "#172036",
        borderWidth: 1,
        borderColor: "#243041",
        borderRadius: 14,
        paddingHorizontal: 14,
        color: "#fff",
        fontSize: 15,
    },
    sendBtn: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: "#2563eb",
        justifyContent: "center",
        alignItems: "center",
    },
    headerNameRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    onlineDot: {
        width: 8,
        height: 8,
        borderRadius: 99,
        backgroundColor: "#35ff7a",
    },

    headerStatus: {
        color: "#9aa3c7",
        fontSize: 12,
        marginTop: 2,
    },
});