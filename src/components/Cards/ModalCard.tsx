import {Image, Modal, Pressable, Text, View} from "react-native";
import React from "react";
import {styles} from "@/src/StyleSheets/cards";

const BASE_URL = "http://192.168.0.30:4000";

function getCardImageSource(imageSrc?: string) {
    if (!imageSrc) return null;

    if (imageSrc.startsWith("http://") || imageSrc.startsWith("https://")) {
        return { uri: imageSrc };
    }

    if (imageSrc.startsWith("/")) {
        return { uri: `${BASE_URL}${imageSrc}` };
    }

    return { uri: `${BASE_URL}/${imageSrc}` };
}

export function ModalCard({selectedCard, modalVisible,  closeCardModal, handleFind}){
    const modalImageSource = true;
    const imageSrc = getCardImageSource(selectedCard?.imageSrc);
    return (
        <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
            onRequestClose={closeCardModal}
        >
            <Pressable style={styles.modalOverlay} onPress={closeCardModal}>
                <Pressable style={styles.modalCard} onPress={() => {}}>
                    <Pressable
                        style={styles.modalClose}
                        onPress={closeCardModal}
                    >
                        <Text style={styles.modalCloseText}>×</Text>
                    </Pressable>

                    <View style={styles.modalImageWrap}>
                        {modalImageSource ? (
                            <Image
                                source={imageSrc}
                                style={styles.modalImage}
                            />
                        ) : (
                            <View style={styles.imageFallback}>
                                <Text style={styles.imageFallbackText}>Нет фото</Text>
                            </View>
                        )}
                    </View>

                    <Text style={styles.modalTitle}>
                        {selectedCard?.name}
                    </Text>

                    <View style={styles.modalActions}>
                        <Pressable
                            style={styles.modalButton}
                            onPress={handleFind}
                        >
                            <Text style={styles.modalButtonText}>Найти</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    )
}