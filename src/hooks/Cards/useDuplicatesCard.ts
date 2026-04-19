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

                const backend = process.env.EXPO_PUBLIC_API_URL;
                const [cardRes, membersRes] = await Promise.all([
                    fetch(`${backend}/api/card?card_id=${cardid}`, {
                        credentials: "include",
                    }),
                    fetch(`${backend}/api/get/usercard?card_id=${cardid}`, {
                        credentials: "include",
                    }),
                ]);
                const cardData = await cardRes.json();
                const membersData = await membersRes.json();
                if (cardData?.ok) {
                    setCard(cardData.data ?? null);
                }

                if (membersData?.ok) {
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