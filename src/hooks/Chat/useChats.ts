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
        console.log(backend);
        (async() => {
            const userData = await AsyncStorage.getItem("user");
            console.log(userData);
            if(!userData) return;
            const user = JSON.parse(userData);
            console.log(user.id);
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
                console.log("response");
                console.log(response);
                if(response.ok) {
                    console.log( response.conversations);
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