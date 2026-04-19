import {useEffect, useState} from "react";
import type {MemberType} from "@/src/types/MemberType";
import {BASE_URL} from "@/src/config/api";

export function useMember(){
    const [members, setMembers] = useState<MemberType[]>([]);
    useEffect(() => {
        (async () => {
            const backend = `${BASE_URL}/api/members?limit=5`;
            try{
                const response = await fetch(backend,{
                    credentials: "include",
                });
                const data = await response.json();
                if(data.ok){
                    setMembers(data.data);
                }
            }
            catch (e){
                console.error(e);
            }
        })();
    }, []);

    return {members};
}