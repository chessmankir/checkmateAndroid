import {io, Socket} from "socket.io-client";
import {BASE_URL} from "@/src/config/api";

let socket: Socket | null = null;

export function getSocket(){
    if (!socket){
        socket = io(BASE_URL, {
            transports: ["websocket"],
            autoConnect: false,
            withCredentials: true,
        })
    }

    return socket;
}