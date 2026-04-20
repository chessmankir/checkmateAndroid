import {useEffect, useState} from "react";
import {ChatItemType} from "@/src/types/ChatItemType";
import {BASE_URL} from "@/src/config/api";
import {fetch} from "expo/fetch";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useChats() {
    const [chats, setChats] = useState<ChatItemType[]>([]);
    const [search, setSearch] = useState<string>("");

    const onSearch = (value: string) => {
        setSearch(value);
    }

    useEffect(() => {
        const backend = BASE_URL + "/api/android/conversations";
        (async() => {
            const userData = await AsyncStorage.getItem("user");
            if(!userData) return;
            const user = JSON.parse(userData);
            try {
                const data = await fetch(backend, {
                    credentials: "include",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userid: user.id
                    })
                });
                const response = await data.json();
                if(response.ok) {
                    setChats(response.conversations)
                }
            }
            catch (e){
                console.log(e);
            }
        })();
    }, []);

    return {chats, search, onSearch};
}