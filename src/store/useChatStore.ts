import {create} from "zustand";
import {ChatItemType} from "@/src/types/ChatItemType";
import {MessageType} from "@/src/types/MessageType";

type UseChatStore = {
    chats: ChatItemType;
    setChats: (chats: ChatItemType) => void;
    markChatAsRead: (conversationId: number) => void;
    updateLastMessage: (message: MessageType) => void;
}

export const useChatStore  = create<UseChatStore>((set) => ({
    chats: [],

    setChats: (chats: ChatItemType[]) => set({chats}),

    markChatAsRead: (conversationId: number) => set((state) =>({
        chats: state.chats.map((chat) => {
            if (Number(chat.conversation_id) === Number(conversationId))  {
                return {...chat, unread_count: 0}
            }
            else return  chat
        })
    })),

    updateLastMessage: (message: MessageType) =>
        set((state) => {

            return {
                chats: state.chats.map((chat) => {
                    if (Number(chat.conversation_id) !== Number(message.conversation_id)) {
                        return chat;
                    }

                    return {
                        ...chat,
                        last_message: message.body,
                        unread_count: Number(chat.unread_count ?? 0) + 1,
                    };
                })
            };
        })
})) ;