import {useAuthStore} from "@/src/store/authStore";
import {useState} from "react";
import {router} from "expo-router";
import {Alert} from "react-native";
import {BASE_URL} from "@/src/config/api";

export function  useLogin(){
    const setUser = useAuthStore((state) => state.setUser);
    const [pubgId, setPubgId] = useState("");

    const loginHandler = async () => {
        if(!pubgId.trim()){
            Alert.alert("Ошибка", "Введите Pubg Id");
        }
        const backend = `${BASE_URL}/api/android/login`;
        try {

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
                Alert.alert("Ошибка", data.message || "Не удалось войти");
                return;
            }
            if(data.ok){
                setUser(data.data);
                router.replace("/(tabs)/players");
            }
        }
        catch (e){
            console.log(e);
        }
    }
    return {pubgId, setPubgId, loginHandler};
}