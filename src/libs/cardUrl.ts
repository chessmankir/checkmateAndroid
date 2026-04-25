import {BASE_URL} from "@/src/config/api";

export function getCardImageSource(imageSrc?: string) {
    if (!imageSrc) return null;

    if (imageSrc.startsWith("http://") || imageSrc.startsWith("https://")) {
        return { uri: imageSrc };
    }

    if (imageSrc.startsWith("/")) {
        return { uri: `${BASE_URL}/backend-assets${imageSrc}`};
    }
    return { uri: `${BASE_URL}/backend-assets${imageSrc}` };
}