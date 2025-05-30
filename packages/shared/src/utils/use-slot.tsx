"use client";

import React, { PropsWithChildren } from "react";

import type {
    SlotName,
    SlotChildrenProps,
    SlotsMapWithDefault,
    SlotComponent,
} from "./use-slot.d";

const flattenChildren = (
    children: React.ReactNode
): React.ReactElement<SlotChildrenProps>[] => {
    const result: React.ReactElement<SlotChildrenProps>[] = [];

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;

        const element = child as React.ReactElement<
            SlotChildrenProps & PropsWithChildren
        >;

        if (
            child.type === React.Fragment ||
            (typeof element.props.children === "object" &&
                element.props.children)
        ) {
            result.push(...flattenChildren(element.props.children));
        } else {
            result.push(element);
        }
    });

    return result;
};

/**
 * Typed `useSlot` hook for organizing named slots.
 * Uses `props.slot` to determine the slot assignment of an element.
 *
 * @param children React elements
 * @returns a `Slot` component that allows selecting elements by slot name
 */
const useSlot = (children: React.ReactNode) => {
    const childArray = flattenChildren(children);

    const slots = childArray.reduce<SlotsMapWithDefault>(
        (result, child) => {
            if (!React.isValidElement(child)) {
                return result;
            }

            const slotName = child.props?.slot as SlotName | undefined;

            if (slotName) {
                result[slotName] = child;
            } else {
                result.default.push(child);
            }

            return result;
        },
        { default: [] }
    );

    const Slot: SlotComponent = ({ name, children: fallback }) => {
        if (!name) {
            return <>{slots.default.length ? slots.default : fallback}</>;
        }

        return <>{slots[name] || fallback || null}</>;
    };

    return Slot;
};

export default useSlot;
