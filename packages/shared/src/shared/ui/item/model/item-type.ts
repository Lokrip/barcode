import { DOMAttributes, PropsWithChildren } from "react";
import { ClassNameType } from "../../../types/react.ts";

export interface ItemProps extends PropsWithChildren, ClassNameType, DOMAttributes<HTMLElement> {}
