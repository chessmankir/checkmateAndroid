import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
        if (user) {
            await AsyncStorage.setItem("user", JSON.stringify(user));
        } else {
            await AsyncStorage.removeItem("user");
        }

        set({
            user,
            isAuth: !!user,
        });
    },

    setLoading: (value) =>
        set({
            isLoading: value,
        }),

    restoreAuth: async () => {
        try {
            const rawUser = await AsyncStorage.getItem("user");

            if (rawUser) {
                const user = JSON.parse(rawUser) as UserType;

                set({
                    user,
                    isAuth: true,
                    isLoading: false,
                });
                return;
            }

            set({
                user: null,
                isAuth: false,
                isLoading: false,
            });
        } catch (error) {
            console.log("restoreAuth error:", error);

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