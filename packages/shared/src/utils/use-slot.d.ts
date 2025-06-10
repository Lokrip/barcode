import React from "react";
import { ClassNameType } from "../types/react";

export type SlotName = string;

export type SlotChildrenProps = { slot?: unknown } & ClassNameType;
export type SlotProps = {
    name?: SlotName;
    children?: React.ReactNode;
};

export type SlotComponent = React.FC<SlotProps>;

export type SlotsMap = Record<SlotName, unknown>;
export type SlotsMapWithDefault = {
    default: React.ReactElement[];
} & SlotsMap;

export type SlotReturn = React.FC<SlotProps>;
