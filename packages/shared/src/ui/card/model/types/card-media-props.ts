import type { GenericProps } from "../../../../types/props";
import { ClassNameType, WithRef } from "../../../../types/react";
import type {
    BaseCardMediaType,
    CardMediaRef,
    CardMediaVariants,
} from "./card-media-types";

export type CardMediaProps = BaseCardMediaType &
    WithRef<CardMediaRef> &
    ClassNameType & {
        isNextImage?: boolean;
        variant?: CardMediaVariants;
    };

export interface CardMediaRootGenericProps
    extends GenericProps<BaseCardMediaType>,
        WithRef<CardMediaRef>,
        ClassNameType {}
