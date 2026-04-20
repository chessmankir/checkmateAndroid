import {useRouter, useSegments} from "expo-router";
import {useAuthStore} from "@/src/store/authStore";
import {useEffect} from "react";
import {useSocket} from "@/src/hooks/Socket/useSocket";

export function usePreLogin(){
    const router = useRouter();
    const segments = useSegments();
    const {isAuth, isLoading, restoreAuth, user} = useAuthStore();

    useEffect(() => {
        restoreAuth();
    },[]);

    useEffect(() => {
        if (isLoading) return;

        const inTabsGroup = segments[0] === "(tabs)";

        if (!isAuth && inTabsGroup) {
            router.replace('/login');
        }

        if(isAuth && !inTabsGroup){
            router.replace('/(tabs)/players');
        }
    }, []);
}