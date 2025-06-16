"use client";
import { useState, ChangeEvent, MouseEvent, KeyboardEvent } from "react";

type EventType = ChangeEvent | MouseEvent | KeyboardEvent;

export function useSwitch({
    checked: controlledChecked,
    defaultChecked,
    disabled = false,
    onChange,
}: {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
    const [internalChecked, setInternalChecked] = useState(defaultChecked || false);
    const isControlled = controlledChecked !== undefined;
    const isChecked = isControlled ? controlledChecked : internalChecked;

    const callOnChange = (nextChecked: boolean, originalEvent: EventType) => {
        if (!onChange) return;

        const syntheticEvent = {
            ...originalEvent,
            target: { checked: nextChecked },
            currentTarget: { checked: nextChecked },
        } as unknown as ChangeEvent<HTMLInputElement>;

        onChange(syntheticEvent);
    };

    const toggle = (event: ChangeEvent | MouseEvent) => {
        if (disabled) return;
        const next = !isChecked;
        if (!isControlled) setInternalChecked(next);
        callOnChange(next, event);
    };

    const keyToggle = (event: KeyboardEvent) => {
        if ((event.key === " " || event.key === "Enter") && !disabled) {
            event.preventDefault();
            const next = !isChecked;
            if (!isControlled) setInternalChecked(next);
            callOnChange(next, event);
        }
    };

    return {
        isChecked,
        disabled,
        toggle,
        keyToggle,
    };
}
