import {useState} from "react";

export function useModalFilters(){
    const [draftMode, setDraftMode] = useState("");
    const [draftStatus, setDraftStatus] = useState("");

    return {draftMode, setDraftMode, draftStatus, setDraftStatus}
}