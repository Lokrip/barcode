import { PropsWithChildren, ReactNode } from "react";
import { ClassNameType, WithRef } from "../../../../types/react";
import { CardContentElements, CardContentRef } from "./card-content-types";

export type CardContentProps = WithRef<CardContentRef> &
    ClassNameType & PropsWithChildren & {
        children?: ReactNode,
        component?: CardContentElements;
    };
