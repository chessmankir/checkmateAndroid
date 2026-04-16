import {useEffect, useState} from "react";
import {MemberType} from "@/src/types/MemberType";

export function useMyClan(){
    const [myClans, setMyClans] = useState([]);
    const [selectedClanId, setSelectedClanId] = useState<number>(1);
    const [searchData, setSearchData] = useState<string>("");
    const [clanMembers, setClanMembers] = useState<MemberType[]>([]);

    const handleSearch = (search) => {
        setSearchData(search);
        console.log(search);
        const backend = "http://192.168.0.30:4000/api/android/myclan";
        (async ()=> {
            try {
                const response = await fetch(backend, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        search: searchData
                    })
                });
                const data = await response.json();
                console.log(data);
                if(data.ok){
                    setMyClans(data.clans);
                }
            }
            catch (e){
                console.error(e);
            }
        })();
    }

    useEffect(() => {
        (async () => {
            const backend = "http://192.168.0.30:4000/api/android/myclan";
            try {
                const response = await fetch(backend, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        clan_id: 1
                    })
                });
                const data = await response.json();
                console.log(data);
                if(data.ok){
                    setMyClans(data.clans);
                }
            }
            catch (e){
                console.error(e);
            }
        })();
    }, [selectedClanId]);

    useEffect(() => {
        (async () => {
            const backend = "http://192.168.0.30:4000/api/android/clanmember";
            try {
                const response = await fetch(backend, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        clan_id: 1,
                        number: selectedClanId,
                        search: searchData
                    })
                });
                const data = await response.json();
                console.log(data);
                if(data.ok){
                    setClanMembers(data.members);
                }
            }
            catch (e){
                console.error(e);
            }
        })();
    }, []);

    return {myClans, selectedClanId, setSelectedClanId, searchData, handleSearch, clanMembers};
}