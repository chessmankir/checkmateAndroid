export interface MemberType {
    id: number,
    name?: string,
    nickname?: string,
    age?: number,
    pubg_id?: string,
    city?: string,
    role?: string,
    is_online?: boolean;
    status?: string;
    status_game?: string;
    modes: string[];
    clan_id: number;
    clan?: string,
    actor_id?: string,

    clan_name?: string;
    months_in_clan?: number;
}

