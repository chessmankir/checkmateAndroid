import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
    id?: number;
    nickname?: string;
    pubg_id?: string;
};

type AuthState = {
    isAuth: boolean;
    isLoading: boolean;
    user: User | null;
    setUser: (user: User | null) => void;
    restoreAuth: () => Promise<void>;
    login: (user: User) => Promise<void>;
    logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
    isAuth: false,
    isLoading: true,
    user: null,

    setUser: (user) =>
        set({
            user,
            isAuth: !!user,
        }),

    restoreAuth: async () => {
        try {
            const rawUser = await AsyncStorage.getItem("user");

            if (rawUser) {
                const user = JSON.parse(rawUser);
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
            set({
                user: null,
                isAuth: false,
                isLoading: false,
            });
        }
    },

    login: async (user) => {
        await AsyncStorage.setItem("user", JSON.stringify(user));

        set({
            user,
            isAuth: true,
        });
    },

    logout: async () => {
        await AsyncStorage.removeItem("user");

        set({
            user: null,
            isAuth: false,
        });
    },
}));