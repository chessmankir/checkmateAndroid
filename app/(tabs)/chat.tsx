import React, { useMemo, useState } from "react";
import {
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import {styles} from "@/src/StyleSheets/chat";
import {ChatHeader} from "@/src/components/Chat/ChatHeader";
import {ChatSearch} from "@/src/components/Chat/ChatSearch";
import {ChatItemType} from "@/src/types/ChatItemType";
import {useChats} from "@/src/hooks/Chat/useChats";
import {ChatItem} from "@/src/components/Chat/ChatItem";

export default function ChatListScreen() {
    const {chats, search, onSearch} = useChats();
    console.log("chats");
    console.log(chats);
    return (
        <SafeAreaView style={styles.container}>
            <ChatHeader />
            <ChatSearch search={search} onSearch={onSearch} />
            <FlatList
                data={chats}
                keyExtractor={(item) => item.conversation_id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <ChatItem chat={item} />
                )}
                ListEmptyComponent={
                    <View style={styles.emptyWrap}>
                        <Text style={styles.emptyText}>Ничего не найдено</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}

