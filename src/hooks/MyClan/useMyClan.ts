import {useEffect, useState} from "react";
import {MemberType} from "@/src/types/MemberType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useMyClan(){
    const [myClans, setMyClans] = useState([]);
    const [selectedClanId, setSelectedClanId] = useState<number>(1);
    const [searchData, setSearchData] = useState<string>("");
    const [clanMembers, setClanMembers] = useState<MemberType[]>([]);


    const handleSearch = (search) => {
        setSearchData(search);
        const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
        const backend = `${BASE_URL}/api/android/clanmember`;
        (async ()=> {
            try {
                const userText = await AsyncStorage.getItem("user");
                if(userText == null) return;
                const user = JSON.parse(userText);
                const response = await fetch(backend, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        search: searchData,
                        clan_id: user.clan_id
                    })
                });
                const data = await response.json();
                if(data.ok){
                    setClanMembers(data.members);
                }
            }
            catch (e){
                console.error(e);
            }
        })();
    }

    useEffect(() => {
        (async () => {
            const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
            const backend = `${BASE_URL}/api/android/myclan`;
            try {
                const userText = await AsyncStorage.getItem("user");
                if(userText == null) return;
                const user = JSON.parse(userText);
                const response = await fetch(backend, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        clan_id: user.clan_id
                    })
                });
                const data = await response.json();
                if(data.ok){
                    setMyClans(data.clans);
                }
            }
            catch (e){
                console.error(e);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
            const backend = `${BASE_URL}/api/android/clanmember`;
            try {
                const userText = await AsyncStorage.getItem("user");
                if(userText == null) return;
                const user = JSON.parse(userText);
                const response = await fetch(backend, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        clan_id: user.clan_id,
                        number: selectedClanId,
                        search: searchData
                    })
                });
                const data = await response.json();
                if(data.ok){
                    setClanMembers(data.members);
                }
            }
            catch (e){
                console.error(e);
            }
        })();
    }, [selectedClanId]);

    return {myClans, selectedClanId, setSelectedClanId, searchData, handleSearch, clanMembers};
}