import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "@/src/StyleSheets/cards";

type AlbumType = {
    id: number;
    name: string;
};

type Props = {
    albums: AlbumType[];
    selectedAlbum: number;
    setSelectedAlbum: (id: number) => void;
};

export function Albums({
                           albums,
                           selectedAlbum,
                           setSelectedAlbum,
                       }: Props) {
    return (
        <View style={styles.stickyWrap}>
            <Text style={styles.sectionTitle}>Альбомы</Text>

            <View style={styles.albumRow}>
                {albums.map((album) => {
                    const isActive = album.id == selectedAlbum;

                    return (
                        <Pressable
                            key={album.id}
                            onPress={() => setSelectedAlbum(album.id)}
                            style={[
                                styles.albumChip,
                                isActive && styles.albumChipActive,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.albumChipText,
                                    isActive && styles.albumChipTextActive,
                                ]}
                            >
                                {album.name}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}