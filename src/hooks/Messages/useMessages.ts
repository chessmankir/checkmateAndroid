import {useEffect, useState} from "react";
import {useLocalSearchParams} from "expo-router";
import {Message} from "postcss";
import {BASE_URL} from "@/src/config/api";
import {fetch} from "expo/fetch";
import {ChatItemType} from "@/src/types/ChatItemType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useMessages() {
    const [text,setText] = useState<string>("");
    const {id} = useLocalSearchParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [conversation, setConversation] = useState();

    const onHandleMessage = (message: string) => {
        console.log(message);
    }

    useEffect(() => {
        const backend = BASE_URL + `/api/conversations/android/${id}/messages`;
        (async() => {
            const response = await fetch(backend, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userid: 34
                })
            });
            const data = await response.json();
            if(data.ok){
                const updatedMessages = data.messages.map((message: Message) => ({
                    ...message,
                    time: new Date(message.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                }));

                setMessages(updatedMessages);
            }
        })();
    }, []);

    useEffect(() => {
        console.log(id);
        const backend = BASE_URL + `/api/android/conversations/${id}`;
        (async() => {
            const userData = await AsyncStorage.getItem("user");
            if(!userData) return;
            const user = JSON.parse(userData);

            const response = await fetch(backend, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userid: user.id
                })
            });
            const data = await response.json();
            console.log('converations');
            console.log(data);
            if(data.ok){
                setConversation(data.data);
            }
        })();
    }, []);


    return { text, setText, messages, onHandleMessage, conversation};
}