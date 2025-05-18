import {ReactNode} from "react";

export interface DropdownProps {
    value?: string;
    onChange: (value: string) => void;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    children?: React.ReactNode;
}

export interface DropdownOptionProps {
    value: string;
    children: ReactNode;
    disabled?: boolean;
    hidden?: boolean;
}
