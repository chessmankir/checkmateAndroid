import {CardType} from "@/src/types/CardType";
import {useState} from "react";
import {router} from "expo-router";

export function useCardModal(){
    const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openCardModal = (card: CardType) => {
        setSelectedCard(card);
        setModalVisible(true);
    };

    const closeCardModal = () => {
        setModalVisible(false);
        setSelectedCard(null);
    };

    const handleFind = () => {
        if (!selectedCard) return;
        closeCardModal();
        router.push(`/duplicates?cardid=${selectedCard.id}`);
    };

    return {selectedCard, modalVisible, openCardModal, closeCardModal, handleFind}
}

