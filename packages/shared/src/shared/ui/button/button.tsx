import { FC } from "react";
import { ButtonProps } from "./button-type.ts";
import styles from "./styles/button.module.scss";

// <Button
//   variant="outlined"
//   size="large"
//   fullWidth
//   startIcon={<img src="" />}
//   loading={true}
//   loadingText="Загружаем..."
// >
//   Отправить
// </Button>

export const Button: FC<ButtonProps> = ({
    variant = "contained",
    size = "medium",
    type = "button",
    className = "",
    disabled = false,
    onClick,
    fullWidth = false,
    startIcon,
    endIcon,
    loading = false,
    loadingText,
    children,
}) => {
    const classes = [
        styles.btn,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : "",
        className,
    ]
        .join(" ")
        .trim();

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {startIcon && !loading && (
                <span className={styles.icon}>{startIcon}</span>
            )}
            {loading ? loadingText || "Loading..." : children}
            {endIcon && !loading && (
                <span className={styles.icon}>{endIcon}</span>
            )}
        </button>
    );
};
