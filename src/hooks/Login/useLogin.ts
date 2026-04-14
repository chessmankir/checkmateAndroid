import {useAuthStore} from "@/src/store/authStore";
import {useState} from "react";
import {router} from "expo-router";
import {Alert} from "react-native";

export function  useLogin(){
    const setUser = useAuthStore((state) => state.setUser);
    const [pubgId, setPubgId] = useState("");

    const loginHandler = async () => {
        if(!pubgId.trim()){
            Alert.alert("Ошибка", "Введите Pubg Id");
        }
        const backend = "http://192.168.0.30:4000/api/android/login";
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
            console.log(data);
            if (!response.ok || !data.ok) {
                Alert.alert("Ошибка", data.message || "Не удалось войти");
                return;
            }
            if(data.ok){
                console.log('ok');
                //setUser(data.data);
                //router.replace("/(tabs)/players");
            }
        }
        catch (e){
            console.log(e);
        }
    }
    return {pubgId, setPubgId, loginHandler};
}