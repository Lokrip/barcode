import { ElementType } from "react";
import { BaseAvatarType } from "./avatar-types";
import { ClassNameType } from "../../../types/react.ts";

export type AvatarRootGenericProps<C extends ElementType> = {
    as?: C;
    ownerState: BaseAvatarType;
    className?: string;
};

export interface AvatarProps
    extends ClassNameType,
        BaseAvatarType {
    component?: ElementType;
}
