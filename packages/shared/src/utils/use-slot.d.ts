import React from "react";

export type SlotName = string;

export type SlotChildrenProps = { slot?: unknown };
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
