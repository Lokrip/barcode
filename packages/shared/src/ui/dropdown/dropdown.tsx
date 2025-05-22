'use client';

import React, {
    ElementType,
    forwardRef,
    JSX,
    useState,
    useEffect,
    useRef,
} from "react";
import styles from "./styles/dropdown.module.scss";
import clsx from "clsx";
import { UseDropdownContext } from "./model/useDropdownContext.ts";
import type { DropdownProps } from "./model/dropdown-props";
import type { PolymorphicRef } from "./model/dropdown-types";

function DropdownBase(
    {
        as,
        label = "Select...",
        onSelect,
        children,
        disabled = false,
        fullWidth = false,
        value = null as string | null,
        className,
        ...rest
    }: DropdownProps<ElementType>,
    ref: PolymorphicRef<ElementType>
): JSX.Element {
    const [selectedValue, setSelectedValue] = useState<string | null>(value);
    const [open, setOpen] = useState(false);
    const Component = as || "div";
    const dropdownRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    const toggle = () => {
        if (!disabled) setOpen((v) => !v);
    };

    const handleSelect = (val: string) => {
        setSelectedValue(val);
        onSelect?.(val);
        setOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <UseDropdownContext.Provider value={{onSelect: handleSelect, selectedValue}}>
            <Component
                ref={(node: HTMLElement | null) => {
                    dropdownRef.current = node;
                    if (typeof ref === "function") ref(node);
                    else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
                }}
                className={clsx(
                    styles.dropdown,
                    disabled && styles.disabled,
                    fullWidth && styles.fullWidth,
                    className
                )}
                {...rest}
            >
                <button
                    className={styles.trigger}
                    onClick={toggle}
                    disabled={disabled}
                    aria-expanded={open}
                >
                    {selectedValue || label}
                </button>
                {open && <div className={styles.menu}>{children}</div>}
            </Component>
        </UseDropdownContext.Provider>
    );
}

const _Dropdown = forwardRef(DropdownBase);

export function Dropdown<C extends ElementType = "div">(
    props: DropdownProps<C> & { ref?: PolymorphicRef<C> }
) {
    return <_Dropdown {...(props as DropdownProps<ElementType>)} />;
}
