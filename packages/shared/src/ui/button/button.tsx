import { ElementType } from "react";
import { ButtonProps } from "./model/button-props";
import clsx from "clsx";
import styles from "./styles/button.module.scss";

export const Button = <C extends ElementType = "button">({
    as,
    variant = "contained",
    size = "medium",
    type,
    className = "",
    disabled = false,
    onClick,
    fullWidth = false,
    startIcon,
    endIcon,
    loading = false,
    children,
    color = "primary",
    ref,
    ...restProps
}: ButtonProps<C>) => {
    const Component = as || "button";
    const isButton = Component === "button";

    const classes = clsx(
        styles.btn,
        styles[variant],
        styles[size],
        styles[color],
        {
            [styles.fullWidth]: fullWidth,
            [styles.loading]: loading,
            [styles.disabled]: disabled,
        },
        className
    );

    return (
        <Component
            ref={ref}
            type={isButton ? type || "button" : undefined}
            className={classes}
            disabled={isButton ? disabled || loading : undefined}
            onClick={onClick}
            aria-busy={loading}
            role={!isButton ? "button" : undefined}
            tabIndex={!isButton ? 0 : undefined}
            {...restProps}
        >
            {startIcon && !loading && <span className={styles.icon}>{startIcon}</span>}
            <span className={styles.label}>{children}</span>
            {endIcon && !loading && <span className={styles.icon}>{endIcon}</span>}
        </Component>
    );
};
