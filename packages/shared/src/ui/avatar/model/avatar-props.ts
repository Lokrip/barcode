import {ComponentPropsWithRef, ElementType} from "react";
import { BaseAvatarType } from "./avatar-types";

export type AvatarRootGenericProps<C extends ElementType> = {
    as?: C;
    ownerState: BaseAvatarType;
    className?: string;
};

export type AvatarProps<C extends ElementType = "div"> = BaseAvatarType & {
    component?: C;
} & Omit<ComponentPropsWithRef<C>, keyof BaseAvatarType | "ref" | "className">;
