export const API_BASE_URL = "http://10.0.2.2:4000";

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...init,
        headers: {
            "Content-Type": "application/json",
            ...(init?.headers ?? {}),
        },
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    return response.json() as Promise<T>;
}