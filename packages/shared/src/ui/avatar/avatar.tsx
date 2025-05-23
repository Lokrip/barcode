import {forwardRef} from "react";
import {AvatarProps, AvatarRootGenericProps} from "./model/avatar-props";
import clsx from "clsx";
import styles from "./styles/avatar.module.scss";
import {BaseAvatarType, PolymorphicRef} from "./model/avatar-types";
import {ElementType} from "react";

export const AvatarBase = forwardRef(
    <C extends ElementType = "div">(
        {as, ownerState, className, ...props}: AvatarRootGenericProps<C>,
        ref: PolymorphicRef<C>
    ) => {
        const {
            variant = "circle",
            size = "medium",
            src,
            alt,
            fallback,
            onError,
            onClick,
            children,
        } = ownerState;

        const Component = as || "div";

        const classes = clsx(
            styles.avatar,
            styles[variant],
            styles[size],
            className
        );

        return (
            <Component ref={ref} className={classes} {...props} onClick={onClick}>
                {src ? (
                    <img
                        src={src}
                        alt={alt}
                        onError={onError}
                        className={styles.image}
                    />
                ) : (
                    fallback ?? children
                )}
            </Component>
        );
    }
);

export const Avatar = forwardRef<HTMLElement, AvatarProps>(
    (
        {
            component = "div",
            variant = "circle",
            size = "medium",
            src,
            alt,
            fallback,
            className,
            onError,
            children,
            onClick,
            ...props
        },
        ref
    ) => {
        const ownerState: BaseAvatarType = {
            variant,
            size,
            src,
            alt,
            fallback,
            onError,
            onClick,
            children,
        };

        return (
            <AvatarBase
                as={component}
                ownerState={ownerState}
                className={className}
                ref={ref}
                {...props}
            />
        );
    }
);
