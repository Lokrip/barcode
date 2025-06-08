import { CardContentElements } from "./types/card-content-types";

export function isCardContentElement(tag: string): tag is CardContentElements {
    return ["div", "section", "article", "p", "span"].includes(tag);
}
