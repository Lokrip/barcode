'use client';

import { createContext, useContext } from "react";
import {DropdownContextValue} from "./dropdown-types.ts";

export const UseDropdownContext = createContext<DropdownContextValue | null>(null);

export const useDropdownContext = () => {
    const ctx = useContext(UseDropdownContext);
    if (!ctx) throw new Error("DropdownOption must be used within Dropdown");
    return ctx;
};
