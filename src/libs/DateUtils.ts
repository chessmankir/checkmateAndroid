export function formatLastSeen(dateString?: string | null) {
    if (!dateString) return "был давно";

    const date = new Date(dateString);

    // ❗ если дата невалидная или 1970
    if (isNaN(date.getTime()) || date.getTime() === 0) {
        return "был давно";
    }

    const diffMin = Math.floor((Date.now() - date.getTime()) / 60000);

    if (diffMin < 1) return "был только что";
    if (diffMin < 60) return `был ${diffMin} мин назад`;

    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return `был ${diffHours} ч назад`;

    return `был ${date.toLocaleDateString("ru-RU")}`;
}