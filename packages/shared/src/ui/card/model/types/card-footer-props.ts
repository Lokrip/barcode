import type { GenericProps } from "../../../../types/props";
import type { CardSlots } from "./card-types";
import type { ClassNameType, WithRef } from "../../../../types/react";

export type CardFooterProps = CardSlots &
    ClassNameType &
    WithRef<HTMLDivElement>;

export interface CardFooterRootGenericProps
    extends ClassNameType,
        GenericProps<CardSlots>,
        WithRef<HTMLDivElement> {}
