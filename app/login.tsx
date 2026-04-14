import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native";
import {useLogin} from "@/src/hooks/Login/useLogin";
import {styles} from "@/src/StyleSheets/login";

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