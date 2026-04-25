import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import {appendQueryAndHash} from "expo-router/build/fork/getPathFromState-forks";
import Constants from "expo-constants/src/Constants";
import {BASE_URL} from "@/src/config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function registerPushToken(){
    if (!Device.isDevice) return;

    const {status: existingStatus} = await Notifications.getPermissionsAsync();
    let finalStatus =  existingStatus;

    if(existingStatus !== "granted" ){
        const {status} = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }

    if( finalStatus !== "granted") return;

    const projectId = Constants.expoConfig?.extra?.eas?.projectId ||
        Constants.expoConfig?.projectId;

    const tokenData = await Notifications.getExpoPushTokenAsync({
        projectId
    });

    const userData = await AsyncStorage.getItem("user");
    if (!userData) return;

    const user = JSON.parse(userData);

    await fetch(`${BASE_URL}/api/android/push-token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userid: user.id,
            token: tokenData.data,
        }),
    });
}