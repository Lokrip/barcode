import type { ReactElement, ReactNode } from "react";
import type { BaseCardType } from "../../model/types/card-types";

export interface LayoutsProps extends BaseCardType {
    footer?: ReactElement;
    media?: ReactElement;
    content?: ReactNode;
}
