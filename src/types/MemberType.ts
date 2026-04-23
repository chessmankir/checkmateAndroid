import {ProfileStatus} from "@/src/types/ProfileStatusType";
import {GameMode} from "@/src/types/GameModeType";
import {PlayerMode} from "@/src/types/PlayerMode";

export interface MemberType {
    id: number,
    name?: string,
    nickname?: string,
    age?: number,
    pubg_id?: string,
    city?: string,
    role?: string,
    online?: boolean
    status?: string;
    modes: string[];
    clan_id: number;

    clan_name?: string;
    months_in_clan?: number;
}

