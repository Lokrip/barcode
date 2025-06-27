import { ButtonProps } from "./model/button-props";
import clsx from "clsx";
import styles from "./styles/button.module.scss";

export const Button = ({
   as: Component = "button",
   variant = "contained",
   size = "medium",
   color = "primary",
   className = "",
   disabled = false,
   onClick,
   fullWidth = false,
   startIcon,
   endIcon,
   loading = false,
   iconOnly = false,
   children,
   type,
   href,
   ref,
   ...restProps
}: ButtonProps) => {
    const isButton = Component === "button";
    const isAnchor = Component === "a";

    const classes = clsx(
        styles.btn,
        styles[variant],
        styles[size],
        styles[color],
        {
            [styles.fullWidth]: fullWidth,
            [styles.loading]: loading,
            [styles.disabled]: disabled,
            [styles.iconOnly]: iconOnly,
        },
        className
    );

    return (
        <Component
            data-testid="button-root"
            ref={ref}
            type={isButton ? type || "button" : undefined}
            className={classes}
            disabled={isButton ? disabled || loading : undefined}
            {...(isAnchor ? { href } : {})}
            onClick={!disabled && !loading ? onClick : undefined}
            aria-busy={loading ? "true" : undefined}
            aria-label={iconOnly && typeof children === "string" ? children : undefined}
            role={!isButton ? "button" : undefined}
            tabIndex={!isButton ? (disabled || loading ? -1 : 0) : undefined}
            {...restProps}
        >
            {iconOnly ? (
                children
            ) : (
                <>
                    {startIcon && !loading && <span className={styles.icon}>{startIcon}</span>}
                    <span className={styles.label}>{children}</span>
                    {endIcon && !loading && <span className={styles.icon}>{endIcon}</span>}
                </>
            )}
        </Component>
    );
};
