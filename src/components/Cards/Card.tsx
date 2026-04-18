import {styles} from "@/src/StyleSheets/cards";
import {Image, Pressable, Text, View} from "react-native";
import React from "react";
import {CardType} from "@/src/types/CardType";


type Props = {
    card: CardType;
    cardWidth: number;
};

export  function Card({card, cardWidth} : Props){
    const imageUrl = `http://192.168.0.30:4000${card.imageSrc}`;
    return (
        <View style={[styles.cardBox, { width: cardWidth }]}>
            <View style={styles.imageWrap}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
               {/* <Image source={{ uri: card.imageSrc }} style={styles.image} />*/}
            </View>

            <View style={styles.metaBox}>
               {/* <Text style={styles.cardTitle} numberOfLines={2}>*/}

                <Text style={{ color: "white" }} numberOfLines={2}>
                    {card.name}
                </Text>

                <View style={styles.counterRow}>
                    <Pressable
                       /* onPress={() => decreaseCount(item.id)}
                        style={[
                            styles.counterBtn,
                            count === 0 && styles.counterBtnDisabled,
                        ]}*/
                    >
                        <Text style={styles.counterBtnText}>-</Text>
                    </Pressable>

                   {/* <Text style={styles.countText}>{count}</Text>*/}
                     <Text style={styles.countText}>0</Text>
                    <Pressable
                      /*  onPress={() => increaseCount(item.id)}
                        style={styles.counterBtn}*/
                    >
                        <Text style={styles.counterBtnText}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}