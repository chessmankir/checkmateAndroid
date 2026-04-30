import React from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    View,
} from "react-native";
import { styles } from "@/src/StyleSheets/message";
import { useMessages } from "@/src/hooks/Messages/useMessages";
import { MessageHeader } from "@/src/components/Message/MessageHeader";
import { MessageSend } from "@/src/components/Message/MessageSend";
import { MessageBody } from "@/src/components/Message/MessageBody";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatDetailsScreen() {
    const {
        text,
        setText,
        onHandleMessage,
        messages,
        conversation,
        user,
        flatListRef,
    } = useMessages();

    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
            >
                <MessageHeader conversation={conversation} />

                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={(item) => String(item.id)}
                    style={styles.messagesList}
                    contentContainerStyle={styles.messagesContent}
                    keyboardShouldPersistTaps="handled"
                    onContentSizeChange={() =>
                        flatListRef.current?.scrollToEnd({ animated: true })
                    }
                    renderItem={({ item }) => (
                        <MessageBody user={user} item={item} />
                    )}
                />

                <View
                    style={[
                        styles.sendWrap,
                        { paddingBottom: Math.max(insets.bottom, 10) },
                    ]}
                >
                    <MessageSend
                        text={text}
                        setText={setText}
                        handleSend={() => onHandleMessage(text)}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}