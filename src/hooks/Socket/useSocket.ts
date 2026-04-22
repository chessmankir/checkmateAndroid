import {getSocket} from "@/src/libs/socket";
import {useEffect} from "react";

type Props = {
    userId?: number
}

export function useSocket({userId}: Props) {
    useEffect(() => {
        if(!userId) return;

        const socket = getSocket();

        if(!socket.connected) socket.connect();

        socket.on("connect", ()=> {
            socket.emit("join",  userId)
        });

        socket.on("disconnect", ()=> {
            console.log("disconnected");
        })

        return ()=> {
            socket.off("connect");
            socket.off("disconnect");
        }

    }, [userId]);
}