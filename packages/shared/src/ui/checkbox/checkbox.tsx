import {ElementType, forwardRef, JSX} from "react";
import clsx from "clsx";
import styles from "./styles/checkbox.module.scss";
import { CheckboxProps } from "./model/checkbox-props";
import { PolymorphicRef } from "./model/checkbox-types";

export const CheckboxBase = <C extends ElementType = "input">(
    {
        as,
        checked = false,
        indeterminate = false,
        disabled = false,
        onChange,
        icon,
        checkedIcon,
        indeterminateIcon,
        label,
        className,
        ...rest
    }: CheckboxProps<C>,
    ref: PolymorphicRef<C>
) => {
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
                type={isInput ? "checkbox" : undefined}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                aria-checked={indeterminate ? "mixed" : checked}
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

export const Checkbox = forwardRef(CheckboxBase as any) as unknown as <
    C extends ElementType = "input"
>(
    props: CheckboxProps<C> & { ref?: PolymorphicRef<C> }
) => JSX.Element;
