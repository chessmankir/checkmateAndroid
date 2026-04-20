import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getSocket} from "@/src/libs/socket";

type UserType = {
    id: number;
    pubg_id: string;
    nickname?: string;
};

type AuthState = {
    user: UserType | null;
    isAuth: boolean;
    isLoading: boolean;
    setUser: (user: UserType | null) => Promise<void>;
    setLoading: (value: boolean) => void;
    restoreAuth: () => Promise<void>;
    logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuth: false,
    isLoading: true,

    setUser: async (user) => {
        try {
            if (user) {
                await AsyncStorage.setItem("user", JSON.stringify(user));
            } else {
                await AsyncStorage.removeItem("user");
            }

            set({
                user,
                isAuth: !!user,
            });
        } catch (error) {
            console.log("setUser error:", error);
        }
    },

    setLoading: (value) =>
        set({
            isLoading: value,
        }),

    restoreAuth: async () => {
        try {
            const rawUser = await AsyncStorage.getItem("user");

            if (!rawUser) {
                set({
                    user: null,
                    isAuth: false,
                    isLoading: false,
                });
                return;
            }

            const parsed = JSON.parse(rawUser);

            const isValidUser =
                parsed &&
                typeof parsed === "object" &&
                typeof parsed.id === "number" &&
                typeof parsed.pubg_id === "string";

            if (!isValidUser) {
                await AsyncStorage.removeItem("user");
                set({
                    user: null,
                    isAuth: false,
                    isLoading: false,
                });
                return;
            }

            set({
                user: parsed,
                isAuth: true,
                isLoading: false,
            });
        } catch (error) {
            console.log("restoreAuth error:", error);
            await AsyncStorage.removeItem("user");

            set({
                user: null,
                isAuth: false,
                isLoading: false,
            });
        }
    },

    logout: async () => {
        await AsyncStorage.removeItem("user");

        set({
            user: null,
            isAuth: false,
            isLoading: false,
        });
    },
}));