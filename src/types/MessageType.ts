export type MessageType = {
    id: number;
    conversation_id: number;
    sender_id: number;
    body: string;
    created_at: string;
    read_at?: string | null;
    time?: string;
};