import { ElementType, KeyboardEvent } from "react";
import clsx from "clsx";
import styles from "./styles/checkbox.module.scss";
import { CheckboxProps } from "./model/checkbox-props";

export const Checkbox = <C extends ElementType = "input">({
    as,
    checked = false,
    indeterminate = false,
    disabled = false,
    onChange,
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

    const handleKeyDown = (event: KeyboardEvent) => {
        if ((event.key === " " || event.key === "Enter") && !disabled) {
            event.preventDefault();
            if (onChange) {
                const syntheticEvent = {
                    ...event,
                    target: { checked: !checked },
                    currentTarget: { checked: !checked },
                };
                onChange(syntheticEvent);
            }
        }
    };

    return (
        <label className={classes}>
            <Component
                ref={ref}
                type={isInput ? "checkbox" : undefined}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                aria-checked={indeterminate ? "mixed" : checked}
                {...(isInput
                    ? {}
                    : { role: "checkbox", tabIndex: disabled ? -1 : 0, onKeyDown: handleKeyDown })}
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
