import React, { useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    Text,
    View,
    useWindowDimensions,
    StyleSheet,
    Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useCard } from "@/src/hooks/Cards/useCard";
import { AlbumHeader } from "@/src/components/Cards/AlbumHeader";
import { Albums } from "@/src/components/Cards/Albums";
import { CardType } from "@/src/types/CardType";

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

export default function CardsScreen() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const { albums, selectedAlbum, setSelectedAlbum, cards } = useCard();

    const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const horizontalPadding = 12;
    const gap = 10;

    const numColumns = width < 700 ? 2 : 4;
    const cardWidth =
        (width - horizontalPadding * 2 - gap * (numColumns - 1)) / numColumns;

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

    const modalImageSource = selectedCard
        ? getCardImageSource(selectedCard.imageSrc)
        : null;

    return (
        <SafeAreaView style={styles.safe} edges={["top"]}>
            <FlatList
                data={cards}
                key={numColumns}
                keyExtractor={(item, index) => String(item?.id ?? index)}
                numColumns={numColumns}
                ListHeaderComponent={
                    <View>
                        <AlbumHeader />r
                        <Albums
                            albums={albums}
                            selectedAlbum={selectedAlbum}
                            setSelectedAlbum={setSelectedAlbum}
                        />
                    </View>
                }
                contentContainerStyle={styles.listContent}
                columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    const imageSource = getCardImageSource(item.imageSrc);

                    return (
                        <Pressable
                            onPress={() => openCardModal(item)}
                            style={[styles.cardBox, { width: cardWidth }]}
                        >
                            <View style={styles.imageWrap}>
                                {imageSource ? (
                                    <Image source={imageSource} style={styles.image} />
                                ) : (
                                    <View style={styles.imageFallback}>
                                        <Text style={styles.imageFallbackText}>Нет фото</Text>
                                    </View>
                                )}
                            </View>

                            <View style={styles.metaBox}>
                                <Text style={styles.cardTitle} numberOfLines={2}>
                                    {item.name}
                                </Text>

                                <View style={styles.counterRow}>
                                    <Pressable style={styles.counterBtn}>
                                        <Text style={styles.counterBtnText}>-</Text>
                                    </Pressable>

                                    <Text style={styles.countText}>{item.count ?? 0}</Text>

                                    <Pressable style={styles.counterBtn}>
                                        <Text style={styles.counterBtnText}>+</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Pressable>
                    );
                }}
                ListEmptyComponent={
                    <View style={styles.emptyBox}>
                        <Text style={styles.emptyText}>
                            В этом альбоме пока нет карточек
                        </Text>
                    </View>
                }
            />

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
                                    source={modalImageSource}
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#0B1020",
    },

    listContent: {
        paddingHorizontal: 12,
        paddingBottom: 20,
        paddingTop: 10,
    },

    columnWrapper: {
        justifyContent: "space-between",
        marginBottom: 12,
    },

    cardBox: {
        marginBottom: 12,
    },

    imageWrap: {
        borderRadius: 14,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#25314F",
        backgroundColor: "#11182D",
    },

    image: {
        width: "100%",
        aspectRatio: 0.7,
        resizeMode: "cover",
        backgroundColor: "#11182D",
    },

    imageFallback: {
        width: "100%",
        aspectRatio: 0.7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1A2238",
    },

    imageFallbackText: {
        color: "#AAB6D3",
        fontSize: 12,
    },

    metaBox: {
        marginTop: 6,
        paddingHorizontal: 2,
    },

    cardTitle: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 15,
        minHeight: 30,
        marginBottom: 6,
    },

    counterRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#11182D",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#25314F",
        paddingHorizontal: 6,
        paddingVertical: 4,
        gap: 6,
    },

    counterBtn: {
        width: 24,
        height: 24,
        borderRadius: 7,
        backgroundColor: "#2457FF",
        alignItems: "center",
        justifyContent: "center",
    },

    counterBtnText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "800",
        lineHeight: 16,
    },

    countText: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "700",
        minWidth: 18,
        textAlign: "center",
    },

    emptyBox: {
        paddingTop: 40,
        alignItems: "center",
    },

    emptyText: {
        color: "#AAB6D3",
        fontSize: 14,
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },

    modalCard: {
        width: "100%",
        maxWidth: 420,
        backgroundColor: "#11182D",
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: "#25314F",
    },

    modalClose: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 5,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(255,255,255,0.08)",
        alignItems: "center",
        justifyContent: "center",
    },

    modalCloseText: {
        color: "#fff",
        fontSize: 24,
        lineHeight: 24,
    },

    modalImageWrap: {
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "#1A2238",
    },

    modalImage: {
        width: "100%",
        aspectRatio: 0.72,
        resizeMode: "cover",
    },

    modalTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "800",
        marginTop: 14,
        marginBottom: 14,
        textAlign: "center",
    },

    modalActions: {
        flexDirection: "row",
        justifyContent: "center",
    },

    modalButton: {
        minWidth: 140,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 12,
        backgroundColor: "#2457FF",
        alignItems: "center",
    },

    modalButtonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "700",
    },
});