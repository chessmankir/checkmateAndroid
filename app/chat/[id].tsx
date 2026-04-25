import React, { useEffect, useRef, useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    View,
} from "react-native";
import { styles } from "@/src/StyleSheets/message";
import { useMessages } from "@/src/hooks/Messages/useMessages";
import { MessageHeader } from "@/src/components/Message/MessageHeader";
import { MessageSend } from "@/src/components/Message/MessageSend";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChatDetailsScreen() {
    const { text, setText, onHandleMessage, messages, conversation, user, flatListRef } = useMessages();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 20}
            >
                <MessageHeader conversation={conversation} />

                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={(item) => String(item.id)}
                    style={{ flex: 1 }}
                    contentContainerStyle={styles.messagesContent}
                    keyboardShouldPersistTaps="handled"
                    onContentSizeChange={() =>
                        flatListRef.current?.scrollToEnd({ animated: true })
                    }
                    renderItem={({ item }) => (
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