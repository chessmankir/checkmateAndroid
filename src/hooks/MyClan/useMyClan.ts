import {useEffect, useState} from "react";
import {MemberType} from "@/src/types/MemberType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {BASE_URL} from "@/src/config/api";

export function useMyClan(){
    const [myClans, setMyClans] = useState([]);
    const [selectedClanId, setSelectedClanId] = useState<number>(1);
    const [searchData, setSearchData] = useState<string>("");
    const [clanMembers, setClanMembers] = useState<MemberType[]>([]);

    const handleSearch = (search) => {
        setSearchData(search);
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

    const handleMakeLeader = async (member: MemberType) => {
        try {
            const response = await fetch(`${BASE_URL}/api/set/leader`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userid: member.id,
                    clan_id: member.clan_id,
                    number: member.clan,
                }),
            });

            const data = await response.json();

            if (data.ok) {
                setClanMembers((prev) =>
                    prev.map((item) => ({
                        ...item,
                        isLeader: item.id === member.id,
                    }))
                );
            }
        } catch (e) {
            console.error("makeLeader error:", e);
        }
    };



    useEffect(() => {
        (async () => {
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

    const makeModerator = (member) => {
        console.log("makeModerator");
        return;
        (async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/moderation/set`, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userid: member.id,
                        clan_id: member.clan_id,
                        number: member.clan,
                    }),
                });

                const data = await response.json();
                console.log(data);
                if (data.ok) {
                    setClanMembers((prev) =>
                        prev.map((item) => ({
                            ...item,
                            isModerator: item.id === member.id,
                        }))
                    );
                }
            } catch (e) {
                console.error("makeLeader error:", e);
            }
        })();
    }

    const removeModerator = (member) => {
        console.log("makeModerator");
        (async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/moderation/set`, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userid: member.id,
                        clan_id: member.clan_id,
                        number: member.clan,
                    }),
                });

                const data = await response.json();

                if (data.ok) {
                    setClanMembers((prev) =>
                        prev.map((item) => ({
                            ...item,
                            isLeader: item.id === member.id,
                        }))
                    );
                }
            } catch (e) {
                console.error("makeLeader error:", e);
            }
        })();
    }

    const banMember = () => {
        console.log("banMember");
    }

    const actions = {
        handleMakeLeader,
        makeModerator,
        removeModerator,
        banMember,
    };

    return {myClans, selectedClanId, setSelectedClanId, searchData, handleSearch, clanMembers, actions};
}