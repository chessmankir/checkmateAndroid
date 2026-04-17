import {styles} from "@/src/StyleSheets/cards";
import {Pressable, Text, View} from "react-native";
import React from "react";
import {Album} from "@/src/components/Cards/Album";
import {AlbumType} from "@/src/types/AlbumType";

export function Albums({albums, selectedAlbum, setSelectedAlbum}) {
    return (
        <View style={styles.stickyWrap}>
        <Text style={styles.sectionTitle}>Альбомы</Text>
            <View style={styles.albumRow}>
        {albums.map((album) => {
                console.log("Albums", album?.id);
                const isActive = album?.id == selectedAlbum;
                return (
                   <Album key={album?.id} album={album} setSelectedAlbum={setSelectedAlbum} isActive={isActive} />
            );
            })}
        </View>
        </View>
    )
}