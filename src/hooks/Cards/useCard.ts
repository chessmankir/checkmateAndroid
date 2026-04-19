import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CardType} from "@/src/types/CardType";

export function useCard() {
    const [albums, setAlbums] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState<number>(1);
    const [cards, setCards] = useState<CardType[]>([]);

    const addCard = (card_id) => {
        const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
        const backend = `${BASE_URL}/api/android/add/card`;

        (async () => {
            try {
                const dataUser = await AsyncStorage.getItem("user");
                const user = JSON.parse(dataUser);

                const response = await fetch(backend, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userid: user.id,
                        card_id: card_id
                    })

                });
                const data = await response.json();
                if (data.ok) {
                    const newCards = cards.map((card) => {
                        if (card.id != card_id) {
                            return card;
                        } else {
                            return {
                                ...card, count: card.count + 1
                            }
                        }
                    });
                    setCards(newCards);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }

    const removeCard = (card_id) => {
        const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
        const backend = `${BASE_URL}/api/android/remove/card`;

        (async () => {
            try {
                const dataUser = await AsyncStorage.getItem("user");
                const user = JSON.parse(dataUser);

                const response = await fetch(backend, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userid: user.id,
                        card_id: card_id
                    })

                });
                const data = await response.json();
                if (data.ok) {
                    const newCards = cards.map((card) => {
                        if (card.id != card_id) {
                            return card;
                        } else {
                            if (card.count > 0) {
                                return {
                                    ...card, count: card.count - 1
                                }
                            }
                        }
                    });
                    setCards(newCards);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }

    useEffect(() => {
        const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
        const backend = `${BASE_URL}/api/albums`;

        (async () => {
            try {
                const response = await fetch(backend);
                const data = await response.json();
                if (data.ok) {
                    setAlbums(data.data);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    useEffect(() => {
        const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
        const backend = `${BASE_URL}/api/android/cards/${selectedAlbum}`;
        (async () => {
            try {
                const dataUser = await AsyncStorage.getItem("user");
                const user = JSON.parse(dataUser);
                const response = await fetch(backend, {
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
                if (data.ok) {
                    setCards(data.data);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, [selectedAlbum]);

    return {albums, selectedAlbum, setSelectedAlbum, cards, addCard, removeCard};
}