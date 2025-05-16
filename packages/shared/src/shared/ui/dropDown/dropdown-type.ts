export interface DropdownOption {
    label: string;
    value: string;
}

export interface DropdownProps {
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    fullWidth?: boolean;
}
