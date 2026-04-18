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

    const [card, setCard] = useState<CardType | null>(null);
    const [members, setMembers] = useState<DuplicateMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!cardid) return;

        (async () => {
            try {
                setLoading(true);

                const backend = "http://192.168.0.30:4000/api";

                const [cardRes, membersRes] = await Promise.all([
                    fetch(`${backend}/card?card_id=${cardid}`, {
                        credentials: "include",
                    }),
                    fetch(`${backend}/get/usercard?cardid=${cardid}`, {
                        credentials: "include",
                    }),
                ]);

                const cardData = await cardRes.json();
                const membersData = await membersRes.json();

                if (cardData?.ok) {
                    console.log('cardData');
                    setCard(cardData.card ?? null);
                }

                if (membersData?.ok) {
                    console.log('members');
                    setMembers(membersData.members ?? []);
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