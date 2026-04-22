import {BASE_URL} from "@/src/config/api";

export function getCardImageSource(imageSrc?: string) {
    if (!imageSrc) return null;

    if (imageSrc.startsWith("http://") || imageSrc.startsWith("https://")) {
        console.log('1');
        return { uri: imageSrc };
    }

    if (imageSrc.startsWith("/")) {
        console.log('2');
        return { uri: `${BASE_URL}/backend-assets${imageSrc}`};
    }
    console.log(`${BASE_URL}/backend-assets${imageSrc}`);
    return { uri: `${BASE_URL}/backend-assets${imageSrc}` };
}