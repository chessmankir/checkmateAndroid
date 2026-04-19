import {useEffect, useState} from "react";
import {MemberType} from "@/src/types/MemberType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";
import {fetch} from "expo/fetch";
import {BASE_URL} from "@/src/config/api";

export function useProfile(){
    const initialProfile = {
        id: 1,
        nickname: "",
        pubg_id: "",
        name: "",
        age: 1,
        city: "",
        status: "",
        modes: [],
    }

    const [profile, setProfile] = useState<MemberType>(initialProfile);

    const updateField = <K extends keyof MemberType>(key: K, value: MemberType[K]) => {
        setProfile((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    useEffect(() => {
        const loadUser = (async() => {
            const userData = await AsyncStorage.getItem('user');
        /*    AsyncStorage.removeItem("user");*/
            if(userData == null ) return null;
            const user = JSON.parse(userData);
            setProfile(user);
        });
        loadUser();
    }, []);

    const handleSave = () => {
        updateProfile();
        Alert.alert("Профиль успешно обновлен");
    }

    const updateProfile = async () => {
        const backend = `${BASE_URL}/api/update/member`;
        try {
            const response = await fetch(backend, {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nickname: profile.nickname,
                    age: profile.age,
                    city: profile.city,
                    name: profile.name,
                    pubgId: profile.pubg_id,
                    id: profile.id,
                    availableMicro: false,
                    modes: profile.modes
                })
            });
            const data = await response.json();
            AsyncStorage.setItem("user", JSON.stringify(profile));
          //  console.log(data);
        }
        catch (e){
            console.error(e);
        }
    }

    const onToggleMode = (mode) => {
        setProfile((prev) => {
            const exists = prev.modes.includes(mode);

            if (exists) {
                return {
                    ...prev,
                    modes: prev.modes.filter((item) => item !== mode),
                };
            }

            return {
                ...prev,
                modes: [...prev.modes, mode],
            };
        });
    }

    return {profile, updateField, handleSave, onToggleMode};
}