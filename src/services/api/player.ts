import { apiFetch } from "./client";
import type { MemberType } from "../../types/MemberType";

type PlayersResponse = {
    ok: boolean;
    data: MemberType[];
};

export async function getPlayers(limit = 10) {
    try {
        console.log('getPlayers');
        const data = await apiFetch<PlayersResponse>(`/api/members?limit=${limit}`);
        console.log(data);
        if (!data.ok) {
            throw new Error("Не удалось загрузить игроков");
        }

        return data.data;
    }
    catch{
        return [];
    }
}