import {useAuthStore} from "@/src/store/authStore";
import {useEffect, useState} from "react";
import {router} from "expo-router";
import {Alert} from "react-native";
import {BASE_URL} from "@/src/config/api";
import {registerPushToken} from "@/src/libs/registerPushToken";

export function  useLogin(){
    const setUser = useAuthStore((state) => state.setUser);
    const [pubgId, setPubgId] = useState("");
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        // registerPushToken();
    }, []);

    const loginHandler = async () => {
        if(!pubgId.trim()){
            Alert.alert("Ошибка", "Введите Pubg Id");
        }
        const backend = `${BASE_URL}/api/android/login`;
        try {
            setLoading(true);
            const response = await fetch(backend, {
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    pubgId: pubgId
                })
            });
            const data = await response.json();
            if (!response.ok || !data.ok) {
                setLoading(false);
                Alert.alert("Ошибка", data.message || "Не удалось войти");
                return;
            }
            if(data.ok){
                setLoading(false);
                setUser(data.data);
                router.replace("/(tabs)/players");
            }
        }
        catch (e){
            setLoading(false);
            console.log(e);
        }
    }
    return {pubgId, setPubgId, loginHandler, loading};
}