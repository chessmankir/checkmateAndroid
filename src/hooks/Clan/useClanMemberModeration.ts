import {useState} from "react";
import {BASE_URL} from "@/src/config/api";
import {fetch} from "expo/fetch";

export function useClanMemberModeration(member){
    /*console.log(member);*/
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMakeLeader = () => {
        setMenuOpen(false);
        console.log("Назначить лидером");

        (async() => {
            const result = setModerator(member);
            if(result){

            }
        })();
    };
    return {menuOpen, setMenuOpen, handleMakeLeader};
}

const setModerator = async (member) => {
    const backend = BASE_URL + "/api/set/leader";
    const response = await fetch(backend, {
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
    console.log(data.ok);
}