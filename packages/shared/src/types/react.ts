import { Ref } from "react";

export interface ClassNameType {
    className?: string;
}

export interface WithRef<T> {
    ref?: Ref<T>;
}
