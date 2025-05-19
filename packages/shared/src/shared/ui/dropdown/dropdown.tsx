'use client'

import { FC, ChangeEvent } from 'react';
import { DropdownProps } from './model/dropdown-props.ts';
import styles from './styles/dropdown.module.scss';
import clsx from 'clsx';

// <Dropdown value={" 1 "} onChange={onChange} fullWidth disabled>
//     <DropdownOption value="1" >Первый</DropdownOption>
//     <DropdownOption value="2" disabled>Второй (недоступен)</DropdownOption>
//     <DropdownOption value="3" hidden>третий</DropdownOption>
// </Dropdown>

export const Dropdown: FC<DropdownProps> = ({
    value,
    onChange,
    children,
    className = '',
    placeholder,
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
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
            disabled={disabled}
        >
            {placeholder && (
                <option value="" disabled hidden>
                    {placeholder}
                </option>
            )}
            {children}
        </select>
    );
};
