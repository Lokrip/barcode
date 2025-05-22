'use client';

import { createContext, useContext } from "react";

export interface DropdownContextValue {
    onSelect: (value: string) => void;
    selectedValue: string | null; // Добавляем selectedValue
}

export const DropdownContext = createContext<DropdownContextValue | null>(null);

export const useDropdownContext = () => {
    const ctx = useContext(DropdownContext);
    if (!ctx) throw new Error("DropdownOption must be used within Dropdown");
    return ctx;
};
