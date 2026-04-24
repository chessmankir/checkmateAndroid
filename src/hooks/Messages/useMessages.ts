import {useEffect, useState} from "react";
import {useLocalSearchParams} from "expo-router";
import {BASE_URL} from "@/src/config/api";
import {fetch} from "expo/fetch";
import {ChatItemType} from "@/src/types/ChatItemType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getSocket} from "@/src/libs/socket";
import {MessageType} from "@/src/types/MessageType";
import {useChatStore} from "@/src/store/useChatStore";

export function useMessages() {
    const [text,setText] = useState<string>("");
    const {id} = useLocalSearchParams();
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [conversation, setConversation] = useState();
    const markChatAsRead = useChatStore((state) => state.markChatAsRead);

    const onHandleMessage = (message: string) => {
        const backend = BASE_URL + `/api/conversations/android/${id}/send/messages`;
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
                    userid: user.id,
                    message: message
                })
            });
            const data = await response.json();
            if(data.ok){
                setText('');
            }
        })();
    }

    const markAsRead = async (conversationId) => {
        const userData = await AsyncStorage.getItem("user");
        if(!userData) return;
        const user = JSON.parse(userData);

        const backend = BASE_URL + `/api/android/conversations/${conversationId}/read`;
        const response = await fetch(backend, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userid: user.id,
            })
        });
    }

    useEffect(() => {
        const handleNewMessage = async (newMessage: MessageType) => {
            const isActiveChat =
                Number(id) === Number(newMessage.conversation_id);

            if (isActiveChat) {
                setMessages((prev) => {
                    const exists = prev.some((msg) => msg.id === newMessage.id);
                    if (exists) return prev;

                    return [...prev, newMessage];
                });

               await markAsRead(newMessage.conversation_id);
               markChatAsRead(Number(id));
            }
        };

        getSocket().on("message:new", handleNewMessage);

        return () => {
            getSocket().off("message:new", handleNewMessage);
        };
    }, [id]);

    useEffect(() => {
        const backend = BASE_URL + `/api/conversations/android/${id}/messages`;
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
            if(data.ok){
                const updatedMessages = data.messages.map((message: MessageType) => ({
                    ...message,
                    time: new Date(message.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                }));

                setMessages(updatedMessages);
                markAsRead(id);
            }
        })();
    }, [id]);

    useEffect(() => {
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
            if(data.ok){
                setConversation(data.data);
            }
        })();
    }, []);
    
    return { text, setText, messages, onHandleMessage, conversation};
}