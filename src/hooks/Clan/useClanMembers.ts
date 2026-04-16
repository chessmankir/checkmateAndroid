import { useMemo, useState } from "react";
import type { MemberType } from "@/src/types/MemberType";

type ClanType = {
    id: number;
    name: string;
};

const mockClans: ClanType[] = [
    { id: 1, name: "Checkmate" },
    { id: 2, name: "Checkmate2" },
    { id: 3, name: "Checkmate Black" },
    { id: 4, name: "Checkmate White" },
    { id: 5, name: "Checkmate Olds" },
    { id: 6, name: "Checkmate Tdm" },
];

const mockMembers: MemberType[] = [
    {
        id: 1,
        name: "Николай",
        nickname: "netu161",
        age: 25,
        pubg_id: 5664455873,
        city: "Волгодонск",
        role: "Участник",
        mode: "classic",
        online: true,
        clan_id: 1,
        clan_name: "Checkmate",
        months_in_clan: 8,
    },
    {
        id: 2,
        name: "Соня",
        nickname: "KRAPIVA",
        age: 29,
        pubg_id: 51250489342,
        city: "Иркутск",
        role: "Участник",
        mode: "classic",
        online: false,
        clan_id: 1,
        clan_name: "Checkmate",
        months_in_clan: 8,
    },
    {
        id: 3,
        name: "Гриша",
        nickname: "evilDIZZY",
        age: 27,
        pubg_id: 51407864687,
        city: "Краснодар",
        role: "Участник",
        mode: "metro",
        online: true,
        clan_id: 1,
        clan_name: "Checkmate",
        months_in_clan: 8,
    },
    {
        id: 4,
        name: "Сергей",
        nickname: "S'PSIX1",
        age: 20,
        pubg_id: 51504910599,
        city: "Орёл",
        role: "Участник",
        mode: "tdm",
        online: false,
        clan_id: 2,
        clan_name: "Checkmate2",
        months_in_clan: 8,
    },
    {
        id: 5,
        name: "Лёха",
        nickname: "гоуст",
        age: 25,
        pubg_id: 51816419978,
        city: "Екатеринбург",
        role: "Участник",
        mode: "ultimate",
        online: true,
        clan_id: 3,
        clan_name: "Checkmate Black",
        months_in_clan: 6,
    },
    {
        id: 6,
        name: "Диана",
        nickname: "foxfire",
        age: 20,
        pubg_id: 52071673382,
        city: "Челябинск",
        role: "Офицер",
        mode: "classic",
        online: true,
        clan_id: 4,
        clan_name: "Checkmate White",
        months_in_clan: 5,
    },
    {
        id: 7,
        name: "Артём",
        nickname: "RageX",
        age: 24,
        pubg_id: 52123456789,
        city: "Москва",
        role: "Участник",
        mode: "classic",
        online: false,
        clan_id: 5,
        clan_name: "Checkmate Olds",
        months_in_clan: 12,
    },
    {
        id: 8,
        name: "Илья",
        nickname: "spr1nt",
        age: 22,
        pubg_id: 52345678901,
        city: "Казань",
        role: "Участник",
        mode: "tdm",
        online: true,
        clan_id: 6,
        clan_name: "Checkmate Tdm",
        months_in_clan: 4,
    },
];

export function useClanMembers() {
    const [search, setSearch] = useState("");
    const [selectedClanId, setSelectedClanId] = useState<number>(mockClans[0].id);

    const clansWithCount = useMemo(() => {
        return mockClans.map((clan) => ({
            ...clan,
            count: mockMembers.filter((member) => member.clan_id === clan.id).length,
        }));
    }, []);

    const filteredMembers = useMemo(() => {
        const query = search.trim().toLowerCase();

        return mockMembers.filter((member) => {
            const inClan = member.clan_id === selectedClanId;

            const matchesSearch =
                !query ||
                member.name.toLowerCase().includes(query) ||
                member.nickname.toLowerCase().includes(query) ||
                String(member.pubg_id).includes(query);

            return inClan && matchesSearch;
        });
    }, [search, selectedClanId]);

    return {
        search,
        setSearch,
        selectedClanId,
        setSelectedClanId,
        clansWithCount,
        members: filteredMembers,
        totalShown: filteredMembers.length,
    };
}