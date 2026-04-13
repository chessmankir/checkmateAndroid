import { useEffect, useState } from "react";
import type { MemberType } from "@/src/types/MemberType";
import { getPlayers } from "@/src/services/api/players";

export function usePlayers() {
    const [members, setMembers] = useState<MemberType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;

        (async () => {
            try {
                setLoading(true);
                setError(null);

                const players = await getPlayers(10);

                if (mounted) {
                    setMembers(players);
                }
            } catch (err) {
                if (mounted) {
                    setError(err instanceof Error ? err.message : "Неизвестная ошибка");
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        })();

        return () => {
            mounted = false;
        };
    }, []);

    return { members, loading, error };
}