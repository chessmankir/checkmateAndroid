import {ProfileStatus} from "@/src/types/ProfileStatusType";
import {GameMode} from "@/src/types/GameModeType";

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
}


