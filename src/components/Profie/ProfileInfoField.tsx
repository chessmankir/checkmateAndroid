import {Ionicons} from "@expo/vector-icons";
import {Text, TextInput, View} from "react-native";
import {styles} from "@/src/StyleSheets/profile";
import React from "react";
import {MemberType} from "@/src/types/MemberType";

interface ProfileInfoFieldProps{
    label: string;
    value: string;
    icon: keyof typeof Ionicons.glyphMap;
    onChangeText: (text: string) => void;
    keyboardType?: "default" | "numeric";
    placeholder?: string;
}

const updateField = <K extends keyof MemberType>(key: K, value: MemberType[K]) => {
    setProfileForm((prev) => ({
        ...prev,
        [key]: value,
    }));
};


export function ProfileInfoField({
                       label,
                       value,
                       icon,
                       onChangeText,
                       keyboardType = "default",
                       placeholder,
                   }: ProfileInfoFieldProps) {
    return (
        <View style={styles.fieldCard}>
            <View style={styles.fieldIcon}>
                <Ionicons name={icon} size={18} color="#93c5fd" />
            </View>

            <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>{label}</Text>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    placeholderTextColor="#64748b"
                    style={styles.fieldInput}
                />
            </View>
        </View>
    );
}