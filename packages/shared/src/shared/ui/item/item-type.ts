import { DOMAttributes, PropsWithChildren } from "react";
import { ClassNameType } from "../../types/react";

export interface ItemProps extends PropsWithChildren, ClassNameType, DOMAttributes<HTMLElement> {}
