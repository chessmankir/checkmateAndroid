import { StyleSheet} from "react-native";


const stylesLogin = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#0b1220",
    },
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 16,
    },
    text: {
        color: "#cbd5e1",
        fontSize: 16,
        marginBottom: 8,
    },
    button: {
        marginTop: 20,
        height: 52,
        borderRadius: 14,
        backgroundColor: "#dc2626",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
});

export default stylesLogin;