import {useEffect, useState} from "react";
import type {MemberType} from "@/src/types/MemberType";

export function useMember(){
    const [members, setMembers] = useState<MemberType[]>([]);

    useEffect(() => {
        (async () => {
            const backend = "http://10.0.2.2:4000/api/members?limit=10";
            try{
                const response = await fetch(backend,{

                    credentials: "include",
                });
                console.log(response);
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