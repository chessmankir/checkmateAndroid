import {styles} from "@/src/StyleSheets/profile";
import {Ionicons} from "@expo/vector-icons";
import {Pressable, Text, View} from "react-native";

export function ProfileMainButton({handleSave, handleLogout}){
    return (
        <View style={styles.buttonsWrap}>
            <Pressable style={styles.saveButton} onPress={() => handleSave}>
                <Ionicons name="save-outline" size={18} color="#08111f" />
                <Text style={styles.saveButtonText}>Сохранить</Text>
            </Pressable>
            <Pressable style={styles.logoutButton} onPress={()=> handleLogout}>
                <Ionicons name="log-out-outline" size={18} color="#fff" />
                <Text style={styles.logoutButtonText}>Выйти</Text>
            </Pressable>
        </View>
    )
}