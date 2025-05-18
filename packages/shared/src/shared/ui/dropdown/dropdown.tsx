import { FC } from "react";
import { DropdownProps } from "./dropdown-type";
import styles from "./styles/dropdown.module.scss";
import clsx from "clsx";

// <Dropdown
//   value={selected}
//   onChange={setSelected}
//   options={[
//     { label: "Один", value: "1" },
//   ]}
//   placeholder="123"
//   fullWidth
// />

export const Dropdown: FC<DropdownProps> = ({
    options,
    value,
    onChange,
    className = "",
    placeholder = "",
    disabled = false,
    fullWidth = false,
}) => {
    const classes = clsx(
        styles.dropdown,
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        className
    );

    return (
        <select
            className={classes}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
        >
            {placeholder && (
                <option value="" disabled hidden>
                    {placeholder}
                </option>
            )}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
