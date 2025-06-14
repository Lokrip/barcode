'use client'

import React, { ElementType, forwardRef, useState } from "react";
import clsx from "clsx";
import styles from "./styles/switch.module.scss";
import { correctClass } from "../../utils";
import { SwitchProps, SwitchBaseGenericProps } from "./model/switch-props";
import { BaseSwitchType, PolymorphicRef } from "./model/switch-types";

export const SwitchBase = forwardRef(
    <C extends ElementType = "div">(
        { as, ownerState, className, ...rest }: SwitchBaseGenericProps<C>,
        ref: PolymorphicRef<C>
    ) => {
        const {
            checked,
            defaultChecked,
            disabled = false,
            size = "medium",
            color = "primary",
            onChange,
        } = ownerState || {};

        const [internalChecked, setInternalChecked] = useState(defaultChecked || false);
        const isControlled = checked !== undefined;
        const isChecked = isControlled ? checked : internalChecked;

        const Component: ElementType = as || "div";
        const isInput = Component === "input";

        const handleToggle = (e: React.ChangeEvent | React.MouseEvent) => {
            if (disabled) return;
            const next = !isChecked;

            if (!isControlled) setInternalChecked(next);

            if (isInput && "target" in e && e.target instanceof HTMLInputElement) {
                onChange?.(e as React.ChangeEvent<HTMLInputElement>);
            } else {
                const syntheticEvent = {
                    ...e,
                    target: { checked: next },
                } as unknown as React.ChangeEvent<HTMLInputElement>;
                onChange?.(syntheticEvent);
            }
        };

        const classNameValid = correctClass(
            clsx(
                styles.switch,
                styles[size],
                styles[color],
                isChecked && styles.checked,
                disabled && styles.disabled
            ),
            className!
        );

        return (
            <Component
                ref={ref}
                className={classNameValid}
                onClick={!isInput ? handleToggle : undefined}
                onChange={isInput ? handleToggle : undefined}
                {...(isInput && {
                    checked: isChecked,
                    disabled,
                })}
                {...rest}
            />
        );
    }
);

export const Switch = forwardRef<HTMLElement, SwitchProps>(
    (
        {
            component = "div",
            size = "medium",
            color = "primary",
            checked,
            defaultChecked,
            disabled,
            className,
            onChange,
            ...props
        },
        ref
    ) => {
        const ownerState: BaseSwitchType = {
            ...props,
            component,
            size,
            color,
            checked,
            defaultChecked,
            disabled,
            onChange,
        };

        return (
            <SwitchBase
                as={component}
                className={className}
                ownerState={ownerState}
                ref={ref}
            />
        );
    }
);
