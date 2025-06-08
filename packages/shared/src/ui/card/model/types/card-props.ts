import type { PropsWithChildren } from "react";
import type { ClassNameType } from "../../../../types/react";
import type { GenericProps } from "../../../../types/props";
import type { BaseCardType } from "./card-types";

export interface CardProps
    extends PropsWithChildren<ClassNameType>,
        BaseCardType {}

export interface CardRootGenericProps
    extends PropsWithChildren<ClassNameType>,
        GenericProps<BaseCardType> {}
