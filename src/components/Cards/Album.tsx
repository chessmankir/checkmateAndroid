import {Pressable, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/cards";
import React from "react";

export function Album({album, setSelectedAlbum, isActive}){
    return (
        <Pressable
            key={album.id}
            onPress={() => setSelectedAlbum(album.id)}
            style={[styles.albumChip, isActive && styles.albumChipActive]}
        >
            <Text
                style={[styles.albumChipText, isActive && styles.albumChipTextActive]}
                numberOfLines={1}
            >
                {album.name}
            </Text>
        </Pressable>
    )
}