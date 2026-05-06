import {useEffect, useState} from "react";
import {MemberType} from "@/src/types/MemberType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {BASE_URL} from "@/src/config/api";
import {useAuthStore} from "@/src/store/authStore";

export function useMyClan(){
    const [myClans, setMyClans] = useState([]);
    const [selectedClanId, setSelectedClanId] = useState<number>(1);
    const [searchData, setSearchData] = useState<string>("");
    const [clanMembers, setClanMembers] = useState<MemberType[]>([]);
    const user = useAuthStore((state) => state.user);

    const handleSearch = (search) => {
        console.log(BASE_URL);
        setSearchData(search);
        if(search.trim().length > 0){
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
                            search: search,
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
        else{
            setClanMembersByClanId(user.clan_id, selectedClanId);
        }
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
                    actor_id: member.actor_id
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

    const setClanMembersByClanId = async (clanId, selectedClanId) => {
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
    }

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
                        actor_id: member.actor_id,
                        clan_id: member.clan_id,
                        number: member.clan,
                    }),
                });
                const data = await response.json();
                if (data.ok) {
                    setClanMembers((prev) =>
                        prev.map((item) =>
                            item.id === member.id
                                ? { ...item, isModerator: true }
                                : item
                        )
                    );
                }
            } catch (e) {
                console.error("makeLeader error:", e);
            }
        })();
    }

    const removeModerator = (member) => {
        (async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/moderation/remove`, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        actor_id: member.actor_id,
                        clan_id: member.clan_id,
                        number: member.clan,
                    }),
                });

                const data = await response.json();

                if (data.ok) {
                    setClanMembers((prev) =>
                        prev.map((item) =>
                            item.id === member.id
                                ? { ...item, isModerator: false }
                                : item
                        )
                    );
                }
            } catch (e) {
                console.error("removeModerator error:", e);
            }
        })();
    };

    const banMember = (member) => {
        (async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/ban/user`, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        actor_id: member.actor_id,
                        id: member.id
                    }),
                });

                const data = await response.json();

                if (data.ok) {
                    setClanMembers((prev) =>
                        prev.filter((m) => m.id !== member.id)
                    );
                }
            } catch (e) {
                console.error("removeModerator error:", e);
            }
        })();
    }

    const actions = {
        handleMakeLeader,
        makeModerator,
        removeModerator,
        banMember,
    };

    return {myClans, selectedClanId, setSelectedClanId, searchData, handleSearch, clanMembers, actions};
}