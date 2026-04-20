import React, { useMemo, useState } from "react";
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

type Message = {
    id: string;
    text: string;
    time: string;
    isMine: boolean;
};

type ChatUser = {
    id: string;
    name: string;
    lastSeen: string;
};

const fakeUsers: ChatUser[] = [
    { id: "1", name: "CM×Funtik×", lastSeen: "была 5 мин назад" },
    { id: "2", name: "Vetrel", lastSeen: "был сегодня в 22:15" },
    { id: "3", name: "TatiZavr", lastSeen: "была недавно" },
    { id: "4", name: "AnTOnY", lastSeen: "был вчера" },
];

const fakeMessagesMap: Record<string, Message[]> = {
    "1": [
        { id: "1", text: "нихао", time: "23:22", isMine: false },
        { id: "2", text: "о, работает", time: "23:23", isMine: false },
        { id: "3", text: "дратути", time: "23:36", isMine: false },
        { id: "4", text: "Здорово, вроде работает", time: "01:23", isMine: true },
        {
            id: "5",
            text: "Я просто базу поменял на другую",
            time: "01:23",
            isMine: true,
        },
    ],
    "2": [
        { id: "1", text: "Ты сегодня играешь?", time: "21:50", isMine: false },
        { id: "2", text: "Да, после 10 буду", time: "21:55", isMine: true },
    ],
    "3": [
        { id: "1", text: "Сделай обложку без текста", time: "20:40", isMine: false },
        { id: "2", text: "Ок, сейчас сделаю", time: "20:41", isMine: true },
    ],
    "4": [
        { id: "1", text: "Надо обсудить турнир", time: "Вчера", isMine: false },
    ],
};

export default function ChatDetailsScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { text, setText, onHandleMessage} = useMessages();

    const user = useMemo(
        () => fakeUsers.find((item) => item.id === id) ?? fakeUsers[0],
        [id]
    );

    const [messages, setMessages] = useState<Message[]>(
        fakeMessagesMap[id as string] ?? []
    );

    const handleSend = () => {
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
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
            >
                <MessageHeader user={user} />)

                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.messagesContent}
                    renderItem={({ item }) => (
                        <View
                            style={[
                                styles.messageRow,
                                item.isMine ? styles.messageRowMine : styles.messageRowOther,
                            ]}
                        >
                            <View
                                style={[
                                    styles.messageBubble,
                                    item.isMine ? styles.messageBubbleMine : styles.messageBubbleOther,
                                ]}
                            >
                                <Text style={styles.messageText}>{item.text}</Text>
                                <Text style={styles.messageTime}>{item.time}</Text>
                            </View>
                        </View>
                    )}
                />

              {/*  <MessageSend text={text} setText={setText} handleSend={handleSend} />*/}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
