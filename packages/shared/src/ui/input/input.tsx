import { FC } from 'react';
import styles from './styles/input.module.scss';
import { InputProps } from './model/input-props';

export const Input: FC<InputProps> = ({
    variant = 'outlined',
    size = 'medium',
    type = 'text',
    className = '',
    onChange,
    startIcon,
    endIcon,
    fullWidth = false,
    error,
    helperText,
    label,
    loading = false,
    ...props
}) => {
    const inputClasses = [
        styles.input,
        styles[variant],
        styles[size],
        startIcon ? styles.withStartIcon : '',
        endIcon ? styles.withEndIcon : '',
        error ? styles.errorInput : '',
        className,
    ]
        .join(' ')
        .trim();

    const wrapperClasses = [
        styles.inputWrapper,
        fullWidth ? styles.fullWidth : '',
    ]
        .join(' ')
        .trim();

    return (
        <div className={wrapperClasses}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputContainer}>
                {startIcon && (
                    <span className={`${styles.iconWrapper} ${styles.startIcon}`}>
                        {startIcon}
                    </span>
                )}
                <input
                    type={type}
                    className={inputClasses}
                    onChange={onChange}
                    {...props}
                />
                {endIcon && (
                    <span className={`${styles.iconWrapper} ${styles.endIcon}`}>
                        {endIcon}
                    </span>
                )}
            </div>
            {(error || helperText) && (
                <span className={`${styles.helperText} ${error ? styles.error : ''}`}>
                    {error || helperText}
                </span>
            )}
        </div>
    );
};
