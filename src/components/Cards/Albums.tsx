import {styles} from "@/src/StyleSheets/cards";
import {Pressable, Text, View} from "react-native";
import React from "react";

export function Albums(){
    return (
        <View style={styles.stickyWrap}>
        <Text style={styles.sectionTitle}>Альбомы</Text>

            <View style={styles.albumRow}>
        {albums.map((album) => {
                const isActive = album.id === selectedAlbumId;

                return (
                    <Pressable
                        key={album.id}
                onPress={() => setSelectedAlbumId(album.id)}
                style={[styles.albumChip, isActive && styles.albumChipActive]}
            >
                <Text
                    style={[styles.albumChipText, isActive && styles.albumChipTextActive]}
                numberOfLines={1}
                    >
                    {album.title}
                    </Text>
                    </Pressable>
            );
            })}
        </View>
        </View>
    )
}