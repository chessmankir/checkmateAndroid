import { useEffect, useState } from "react";
import {BASE_URL} from "@/src/config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";

export function useMemberProfile(pubgId?: string) {
    const [member, setMember] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMember = async () => {
            if (!pubgId) return;
            try {
                const response = await fetch(
                    `${BASE_URL}/api/members?pubg_id=${pubgId}`,
                    { credentials: "include" }
                );
                const data = await response.json();
                if (data.ok) {
                    setMember(Array.isArray(data.data) ? data.data[0] : data.data);
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        loadMember();
    }, [pubgId]);

    const onPressMessage = () => {
        createConversation();
    }

    const createConversation = async () => {
        const backend = BASE_URL + "/api/android/conversation";
        const userData = await AsyncStorage.getItem('user');
        if(userData == null ) return null;
        const user = JSON.parse(userData);
        try{
            const response = await fetch(backend, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    member_id: member.id,
                    userid: user.id,
                })
            });
            const data = await response.json();
            if(data.ok){
                router.replace("/(tabs)/chat");
            }
        }
        catch (e){
            console.error(e);
        }
    }

    return { member, loading, onPressMessage};
}