import {useEffect, useState} from "react";
import {useLocalSearchParams} from "expo-router";
import {Message} from "postcss";
import {BASE_URL} from "@/src/config/api";
import {fetch} from "expo/fetch";
import {ChatItemType} from "@/src/types/ChatItemType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getSocket} from "@/src/libs/socket";

export function useMessages() {
    const [text,setText] = useState<string>("");
    const {id} = useLocalSearchParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [conversation, setConversation] = useState();
    const onHandleMessage = (message: string) => {
        console.log("send");
        console.log(message);
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

    useEffect(() => {
        const handleNewMessage = async (newMessage: Message) => {
            console.log("handleNewMessage:", newMessage);

            const isActiveChat =
                Number(id) === Number(newMessage.conversation_id);

            if (isActiveChat) {
                setMessages((prev) => {
                    const exists = prev.some((msg) => msg.id === newMessage.id);
                    if (exists) return prev;

                    return [...prev, newMessage];
                });

                // 🔥 сразу помечаем как прочитанное
               /* try {
                    const url = import.meta.env.VITE_API_URL;
                    await fetch(
                        `${url}/api/conversations/${newMessage.conversation_id}/read`,
                        {
                            method: "PUT",
                            credentials: "include",
                        }
                    );
                } catch (e) {
                    console.log("read error:", e);
                }*/
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