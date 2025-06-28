import {
    ChangeEvent,
    ElementType,
    KeyboardEvent
} from "react";
import clsx from "clsx";
import styles from "./styles/checkbox.module.scss";
import { CheckboxProps } from "./model/checkbox-props";

export const Checkbox = <C extends ElementType = "input">({
    as,
    checked = false,
    indeterminate = false,
    disabled = false,
    onClick,
    icon,
    checkedIcon,
    indeterminateIcon,
    label,
    className = "",
    ref,
    ...rest
}: CheckboxProps<C>) => {
    const Component = as || "input";
    const isInput = Component === "input";

    const status = indeterminate
        ? "indeterminate"
        : checked
            ? "checked"
            : "unchecked";

    const classes = clsx(
        styles.checkbox,
        styles[status],
        disabled && styles.disabled,
        className
    );

    return (
        <label className={classes}>
            <Component
                ref={ref}
                {...(isInput
                    ? {
                        type: "checkbox",
                        checked,
                        disabled,
                        onChange: (e: ChangeEvent<HTMLInputElement>) => {
                            if (disabled) return;
                            if (onClick) onClick(e);
                        },
                        readOnly: !onClick,
                        "aria-checked": indeterminate ? "mixed" : checked,
                    }
                    : {
                        role: "checkbox",
                        tabIndex: disabled ? -1 : 0,
                        "aria-checked": indeterminate ? "mixed" : checked,
                        onClick: disabled ? undefined : onClick,
                        onKeyDown: disabled
                            ? undefined
                            : (e: KeyboardEvent) => {
                                if (e.key === " " || e.key === "Enter") {
                                    e.preventDefault();
                                    onClick?.(e);
                                }
                            },
                    })}
                {...rest}
            />
            <span className={styles.icon}>
                {indeterminate
                    ? indeterminateIcon
                    : checked
                        ? checkedIcon
                        : icon}
            </span>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );

};
