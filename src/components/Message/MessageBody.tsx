import {styles} from "@/src/StyleSheets/message";
import {Text, View} from "react-native";
import React from "react";

export function MessageBody({user, item}){
    return (
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
    )
}