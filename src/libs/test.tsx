import React, {useEffect, useRef, useState} from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    View,
} from "react-native";
import {styles} from "@/src/StyleSheets/message";
import {useMessages} from "@/src/hooks/Messages/useMessages";
import {MessageHeader} from "@/src/components/Message/MessageHeader";
import {MessageSend} from "@/src/components/Message/MessageSend";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChatDetailsScreen() {
    const {text, setText, onHandleMessage, messages, conversation} = useMessages();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const userData = await AsyncStorage.getItem("user");
                if (userData) {
                    const parsedUser = JSON.parse(userData);
                    setUser(parsedUser);
                }
            } catch (e) {
                console.log("Ошибка при чтении пользователя:", e);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    useEffect(() => {
        if (!messages.length) return;

        const timer = setTimeout(() => {
            flatListRef.current?.scrollToEnd({animated: true});
        }, 100);

        return () => clearTimeout(timer);
    }, [messages]);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
            >
                <MessageHeader conversation={conversation}/>

                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={(item) => String(item.id)}
                    contentContainerStyle={styles.messagesContent}
                    onContentSizeChange={() =>
                        flatListRef.current?.scrollToEnd({animated: true})
                    }
                    renderItem={({item}) => (
                        <View
                            style={[
                                styles.messageRow,
                                user?.id == item.sender_id
                                    ? styles.messageRowMine
                                    : styles.messageRowOther,
                            ]}
                        >
                            <View
                                style={[
                                    styles.messageBubble,
                                    user?.id == item.sender_id
                                        ? styles.messageBubbleMine
                                        : styles.messageBubbleOther,
                                ]}
                            >
                                <Text style={styles.messageText}>{item.body}</Text>
                                <Text style={styles.messageTime}>{item.time}</Text>
                            </View>
                        </View>
                    )}
                />

                <MessageSend
                    text={text}
                    setText={setText}
                    handleSend={() => onHandleMessage(text)}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}