import {styles} from "@/src/StyleSheets/profile";
import {Ionicons} from "@expo/vector-icons";
import {Pressable, Text} from "react-native";

export function ProfileMainButton({handleSave}){
    return (
        <Pressable style={styles.saveButton} onPress={handleSave}>
            <Ionicons name="save-outline" size={18} color="#08111f" />
            <Text style={styles.saveButtonText}>Сохранить</Text>
        </Pressable>
    )
}