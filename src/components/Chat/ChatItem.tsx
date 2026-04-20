import {Pressable, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/chat";
import {router} from "expo-router";
import React from "react";

export function ChatItem({chat}){
    return (
        <Pressable
            style={styles.chatCard}
            onPress={() =>
                router.push({
                    pathname: "/chat/[id]",
                    params: { id: chat.conversation_id },
                })
            }
        >
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {chat?.nickname?.slice(0, 1).toUpperCase()}
                </Text>
            </View>

            <View style={styles.chatInfo}>
                <View style={styles.chatTopRow}>
                    <Text style={styles.chatName} numberOfLines={1}>
                        {chat.nickname}
                    </Text>
                    {/*<Text style={styles.chatTime}>{chat.time}</Text>*/}
                </View>

               {/* <Text style={styles.chatLastSeen} numberOfLines={1}>
                    {chat.lastSeen}
                </Text>*/}

                <View style={styles.chatBottomRow}>
                    <Text style={styles.chatMessage} numberOfLines={1}>
                        {chat?.last_message}
                    </Text>

                    {!!chat.unread && chat.unread > 0 && (
                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadText}>{chat.unread}</Text>
                        </View>
                    )}
                </View>
            </View>
        </Pressable>
    )
}