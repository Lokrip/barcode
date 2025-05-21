import { ElementType, forwardRef, JSX } from "react";
import { ButtonProps, PolymorphicRef } from "./model/button-props";
import clsx from "clsx";
import styles from "./styles/button.module.scss";

const ButtonBase = <C extends ElementType = "button">(
    {
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
        loadingText,
        children,
        ...restProps
    }: ButtonProps<C>,
    ref: PolymorphicRef<C>
) => {
    const Component = as || "button";
    const isButton = Component === "button";

    const classes = clsx(
        styles.btn,
        styles[variant],
        styles[size],
        {
            [styles.fullWidth]: fullWidth,
            [styles.loading]: loading,
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
            {startIcon && !loading && (
                <span className={styles.icon}>{startIcon}</span>
            )}
            {loading ? loadingText || "Loading..." : children}
            {endIcon && !loading && (
                <span className={styles.icon}>{endIcon}</span>
            )}
        </Component>
    );
};

export const Button = forwardRef(ButtonBase as any) as unknown as <
    C extends ElementType = "button"
>(
    props: ButtonProps<C> & { ref?: PolymorphicRef<C> }
) => JSX.Element;
