import {useEffect, useMemo, useState} from "react";
import type {MemberType} from "@/src/types/MemberType";
import {BASE_URL} from "@/src/config/api";
import {stat} from "node:fs";

export function useMember(){
    const [members, setMembers] = useState<MemberType[]>([]);
    const [mode, setMode] = useState<string>("");
    const [draftMode, setDraftMode] = useState<string>("");
    const [status, setStatus] = useState<string>("all");
    const [draftStatus, setDraftStatus] = useState<string>("all");
    const [search, setSearch] = useState("");
    const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);
    const query = useMemo(()=> {
        const sp = new URLSearchParams();
        if(status !== "all"){
            sp.set("status", status);
        }
        if(mode){
            sp.set("modes", mode);
        }
        sp.set("limit", "20");
        return sp.toString();

    },[mode, status, search]);

    const onSearch = (value) => {
        setSearch(value);
        (async ()=> {
            const backend = `${BASE_URL}/api/members?search=${search}&limit=20`;
            try {
                const response = await fetch(backend);
                const data = await response.json();
                if(data.ok){
                    setMembers(data.data);
                }
            }
            catch(error){
                console.log(error);
            }
        })();
    }

    useEffect(() => {
        (async () => {
            const backend = `${BASE_URL}/api/members?${query}`;
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
    }, [query]);

    const openFilters = () => {
        setDraftMode(mode);
        setDraftStatus(status);
        setFilterModalVisible(true);
    };

    const applyFilters = () => {
        setMode(draftMode);
        setStatus(draftStatus);
        setFilterModalVisible(false);
    }

    return {members,mode,  setDraftMode, status, setDraftStatus, draftMode, search, onSearch,
        setMode, setStatus,
        draftStatus, openFilters, filterModalVisible, setFilterModalVisible, applyFilters};
}