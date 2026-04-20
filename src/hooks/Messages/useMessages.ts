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
        console.log(id);
        const backend = BASE_URL + `/api/conversations/android/${id}/messages`;
        (async() => {
            const response = await fetch(backend, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return;
            const data = await response.json();
            console.log('messages');
            console.log(data);
        })();
    }, []);

    useEffect(() => {
        console.log(id);
        const backend = BASE_URL + `/api/android/conversations${id}`;
        (async() => {
            const userData = await AsyncStorage.getItem("user");
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
            return;
            const data = await response.json();
            console.log('converations');
            console.log(data);
        })();
    }, []);


    return { text, setText, onHandleMessage};
}