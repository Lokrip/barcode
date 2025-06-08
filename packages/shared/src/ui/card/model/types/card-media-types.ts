import type { MediaElements } from "../../../../types/html-elements";
import { KeyedRecord } from "../../../../types/mapped";
import type { Size } from "../../../../types/props";

export type CardMediaVariants = "image" | "video" | "audio";

export type CardMediaRef =
    | HTMLImageElement
    | HTMLVideoElement
    | HTMLAudioElement
    | HTMLDivElement;

export interface BaseCardMediaType
    extends Size,
        Partial<KeyedRecord<MediaElements, string>> {
    type: CardMediaVariants;
    alt: string;
}
