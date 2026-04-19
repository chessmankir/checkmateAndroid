import { useEffect, useState } from "react";
import {BASE_URL} from "@/src/config/api";

export function useMemberProfile(pubgId?: string) {
    const [member, setMember] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMember = async () => {
            if (!pubgId) return;
            try {
                const response = await fetch(
                    `${BASE_URL}/api/members?pubg_id=${pubgId}`,
                    { credentials: "include" }
                );
                const data = await response.json();
                if (data.ok) {
                    setMember(Array.isArray(data.data) ? data.data[0] : data.data);
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        loadMember();
    }, [pubgId]);

    return { member, loading };
}