import React, {useEffect, useMemo, useState} from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {styles} from "@/src/StyleSheets/message";
import {useMessages} from "@/src/hooks/Messages/useMessages";
import {MessageHeader} from "@/src/components/Message/MessageHeader";
import {MessageSend} from "@/src/components/Message/MessageSend";
import {awaitExpression} from "@babel/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Message = {
    id: string;
    text: string;
    time: string;
    isMine: boolean;
};

export default function ChatDetailsScreen() {
    const { text, setText, onHandleMessage, messages, setMessages, conversation} = useMessages();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    // Загружаем пользователя из AsyncStorage
    useEffect(() => {
        const loadUser = async () => {
            try {
                const userData = await AsyncStorage.getItem("user");
                if (userData) {
                    const parsedUser = JSON.parse(userData);
                    setUser(parsedUser);
                } else {
                    console.log("Пользователь не найден в AsyncStorage");
                    // Можно сделать редирект на логин, если нужно
                }
            } catch (e) {
                console.log("Ошибка при чтении пользователя:", e);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

 /*   const handleSend = () => {
        const value = text.trim();
        if (!value) return;

        const newMessage: Message = {
            id: String(Date.now()),
            text: value,
            time: "сейчас",
            isMine: true,
        };

        setMessages((prev) => [...prev, newMessage]);
        setText("");
    };*/

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
            >
                <MessageHeader conversation={conversation} />

                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.messagesContent}
                    renderItem={({ item }) => (
                        <View
                            style={[
                                styles.messageRow,
                                user.id == item.sender_id ? styles.messageRowMine : styles.messageRowOther,
                            ]}
                        >
                            <View
                                style={[
                                    styles.messageBubble,
                                    item.isMine ? styles.messageBubbleMine : styles.messageBubbleOther,
                                ]}
                            >
                                <Text style={styles.messageText}>{item.body}</Text>
                                <Text style={styles.messageTime}>{item.time}</Text>
                            </View>
                        </View>
                    )}
                />

                <MessageSend text={text} setText={setText} handleSend={onHandleMessage} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
