import {Pressable, Text, View} from "react-native";
import {styles} from "@/src/StyleSheets/playersPage";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export function AppliedFilterChip({label, onRemove}){
   return(
       <View style={styles.appliedChip}>
           <Text style={styles.appliedChipText}>{label}</Text>

           <Pressable onPress={onRemove} hitSlop={8}>
               <Ionicons name="close" size={16} color="#b26cff" />
           </Pressable>
       </View>
   )
}