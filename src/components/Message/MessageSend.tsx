import {styles} from "@/src/StyleSheets/message";
import {Pressable, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export function MessageSend({text, setText, handleSend}){
    return (
        <View style={styles.inputBar}>
            <TextInput
                style={styles.input}
                placeholder="Написать сообщение..."
                placeholderTextColor="#94a3b8"
                value={text}
                onChangeText={setText}
            />

            <Pressable style={styles.sendBtn} onPress={handleSend}>
                <Ionicons name="send" size={18} color="#fff" />
            </Pressable>
        </View>
    )
}