import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CardType} from "@/src/types/CardType";

export function useCard(){
    const [albums, setAlbums]= useState([]);
    const [selectedAlbum, setSelectedAlbum]=useState<number>(1);
    const [cards, setCards]=useState<CardType[]>([]);

    useEffect(() => {
        const backend = "http://192.168.0.30:4000/api/albums";

        (async () =>{
            try {
                const response = await fetch(backend);
                const data = await response.json();
                if(data.ok){
                    setAlbums(data.data);
                }
            }
            catch(err){
                console.log(err);
            }
        })();
    }, []);

    useEffect(() => {
        const backend = `http://192.168.0.30:4000/api/android/cards/${selectedAlbum}`;
        (async () =>{
            try {
                const dataUser = await AsyncStorage.getItem("user");
                const user = JSON.parse(dataUser);
                const response = await fetch(backend,{
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userid: user.id,
                    })

                });
                const data = await response.json();
                if(data.ok){
                    setCards(data.data);
                }
            }
            catch(err){
                console.log(err);
            }
        })();
    }, [selectedAlbum]);

    return {albums, selectedAlbum, setSelectedAlbum, cards};
}