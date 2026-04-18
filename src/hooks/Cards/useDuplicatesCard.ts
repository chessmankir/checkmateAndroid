// src/hooks/cards/useDuplicatesCard.ts
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { CardType } from "@/src/types/CardType";

type MissingCard = {
    id: number;
    name: string;
    imageSrc: string;
};

type DuplicateMember = {
    id: number;
    name: string;
    nickname: string;
    pubg_id: string;
    missing_cards: MissingCard[];
};

export function useDuplicatesCard() {
    const { cardid } = useLocalSearchParams<{ cardid?: string }>();
    console.log('card id');
    console.log(cardid);
    const [card, setCard] = useState<CardType | null>(null);
    const [members, setMembers] = useState<DuplicateMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!cardid) return;

        (async () => {
            try {
                setLoading(true);

                const backend = "http://192.168.0.30:4000";
                console.log(`${backend}/api/card?card_id=${cardid}`);
                console.log(`${backend}/api/get/usercard?card_id=${cardid}`);
                const [cardRes, membersRes] = await Promise.all([
                    fetch(`${backend}/api/card?card_id=${cardid}`, {
                        credentials: "include",
                    }),
                    fetch(`${backend}/api/get/usercard?card_id=${cardid}`, {
                        credentials: "include",
                    }),
                ]);
                console.log('pre');
                console.log(cardRes);
                console.log('members');
                console.log(membersRes);
                const cardData = await cardRes.json();
                const membersData = await membersRes.json();
                console.log("cardData", cardData);
                console.log("membersData", membersData);
                if (cardData?.ok) {
                    console.log('cardData');
                    setCard(cardData.data ?? null);
                }

                if (membersData?.ok) {
                    console.log('members');
                    setMembers(membersData.data ?? []);
                }
            } catch (e) {
                console.log("useDuplicatesCard error", e);
            } finally {
                setLoading(false);
            }
        })();
    }, [cardid]);

    return { card, members, loading };
}