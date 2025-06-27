'use client'

import { useId, useState } from "react";
import styles from "./styles/input.module.scss";
import clsx from "clsx";
import { InputProps } from "./model/input-props";

const OpenEyeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
);
const ClosedEyeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a20.25 20.25 0 0 1 4.54-5.94" /><path d="M1 1l22 22" /><path d="M9.88 9.88a3 3 0 0 0 4.24 4.24" /></svg>
);


export const Input = ({
    as: Component = "input",
    variant = "outlined",
    size = "medium",
    type = "text",
    color = "primary",
    className = "",
    onChange,
    startIcon,
    endIcon,
    fullWidth = false,
    autoWidth = true,
    autoHeight = false,
    error,
    helperText,
    label,
    loading = false,
    ref,
    eyeWatch = false,
    ...rest
}: InputProps) => {
    const isInput = Component === "input";
    const id = useId();
    const hasError = Boolean(error);
    const helperTextId = hasError || helperText ? `${id}-helper-text` : undefined;

    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === "password" && eyeWatch ? (showPassword ? "text" : "password") : type;

    const inputClasses = clsx(
        styles.input,
        styles[variant],
        styles[size],
        styles[color],
        {
            [styles.withStartIcon]: !!startIcon,
            [styles.withEndIcon]: !!endIcon || (eyeWatch && type === "password"),
            [styles.errorInput]: hasError,
            [styles.loading]: loading,
            [styles.fullWidth]: fullWidth,
            [styles.autoWidth]: autoWidth,
            [styles.autoHeight]: autoHeight,
        },
        className
    );

    const wrapperClasses = clsx(styles.inputWrapper, {
        [styles.fullWidth]: fullWidth,
        [styles.autoWidth]: autoWidth,
    });

    return (
        <span className={wrapperClasses}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}

            <span className={styles.inputContainer}>
                {startIcon && (
                    <span className={clsx(styles.iconWrapper, styles.startIcon)}>
                        {startIcon}
                    </span>
                )}

                {isInput ? (
                    <input
                        id={id}
                        ref={ref}
                        type={inputType}
                        className={inputClasses}
                        onChange={onChange}
                        disabled={loading}
                        aria-invalid={hasError}
                        aria-describedby={helperTextId}
                        {...rest}
                    />
                ) : (
                    <Component
                        id={id}
                        ref={ref}
                        className={inputClasses}
                        onChange={onChange}
                        disabled={loading}
                        aria-invalid={hasError}
                        aria-describedby={helperTextId}
                        {...rest}
                    />
                )}

                {loading && (
                    <span
                        className={styles.loadingSpinner}
                        role="status"
                        aria-label="Loading"
                    />
                )}

                {eyeWatch && type === "password" ? (
                    <span
                        className={styles.eyeWatchIcon}
                        onClick={() => setShowPassword(!showPassword)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                setShowPassword(!showPassword);
                            }
                        }}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                    {showPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
                    </span>) : (
                        !eyeWatch && endIcon && (
                            <span className={clsx(styles.iconWrapper, styles.endIcon)}>
                        {endIcon}
                    </span>
                    )
                )}
            </span>

            {(hasError || helperText) && (
                <span
                    id={helperTextId}
                    className={clsx(styles.helperText, {
                        [styles.error]: hasError,
                    })}
                >
                    {hasError ? error : helperText}
                </span>
            )}
        </span>
    );
};
