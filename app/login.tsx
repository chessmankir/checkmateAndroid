import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native";
import {useLogin} from "@/src/hooks/Login/useLogin";

export default function LoginScreen() {
    const {pubgId, setPubgId, loginHandler, loading} = useLogin();

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <View style={styles.container}>
                    <View style={styles.logoBox}>
                        <Text style={styles.logoLetter}>C</Text>
                    </View>

                    <Text style={styles.title}>Checkmate</Text>
                    <Text style={styles.subtitle}>Вход в аккаунт</Text>
                    <Text style={styles.description}>
                        Введите ваш PUBG ID для авторизации
                    </Text>

                    <View style={styles.form}>
                        <Text style={styles.label}>PUBG ID</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Введите PUBG ID"
                            placeholderTextColor="#7f8ea3"
                            value={pubgId}
                            onChangeText={(text) => setPubgId(text.replace(/[^0-9]/g, ""))}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <TouchableOpacity
                            style={[styles.button, loading && styles.buttonDisabled]}
                            onPress={loginHandler}
                            disabled={loading}
                        >
                            <Text style={styles.buttonText}>
                                {loading ? "Загрузка..." : "Войти"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#0b1220",
    },
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: "center",
        backgroundColor: "#0b1220",
    },
    logoBox: {
        width: 72,
        height: 72,
        borderRadius: 20,
        backgroundColor: "#2563eb",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 18,
    },
    logoLetter: {
        color: "#fff",
        fontSize: 34,
        fontWeight: "800",
    },
    title: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "800",
        textAlign: "center",
    },
    subtitle: {
        color: "#cbd5e1",
        fontSize: 16,
        textAlign: "center",
        marginTop: 6,
    },
    description: {
        color: "#94a3b8",
        fontSize: 14,
        textAlign: "center",
        marginTop: 12,
        lineHeight: 20,
        paddingHorizontal: 8,
    },
    form: {
        marginTop: 32,
        backgroundColor: "#111827",
        borderRadius: 20,
        padding: 18,
        borderWidth: 1,
        borderColor: "#1f2937",
    },
    label: {
        color: "#e2e8f0",
        fontSize: 14,
        marginBottom: 10,
        fontWeight: "600",
    },
    input: {
        height: 54,
        borderRadius: 14,
        backgroundColor: "#0f172a",
        borderWidth: 1,
        borderColor: "#334155",
        paddingHorizontal: 16,
        color: "#fff",
        fontSize: 16,
    },
    button: {
        marginTop: 16,
        height: 52,
        borderRadius: 14,
        backgroundColor: "#2563eb",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
});