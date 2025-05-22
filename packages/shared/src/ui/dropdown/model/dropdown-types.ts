import { ElementType, ComponentPropsWithRef } from "react";

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];
