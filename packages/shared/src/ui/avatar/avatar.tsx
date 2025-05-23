import { forwardRef, ElementType, ReactNode, JSX } from "react";
import clsx from "clsx";
import styles from "./styles/avatar.module.scss";
import { PolymorphicRef, BaseAvatarType } from "./model/avatar-types";
import { AvatarRootGenericProps, AvatarProps } from "./model/avatar-props";

const AvatarBase = forwardRef(
    <C extends ElementType = "div">(
        { as, ownerState, className, ...props }: AvatarRootGenericProps<C>,
        ref: PolymorphicRef<C>
    ) => {
        const { src, alt, fallback, onError, onClick, children } = ownerState;
        const Component = as || "div";

        return (
            <Component
                ref={ref}
                className={className}
                {...props}
                onClick={onClick}
                style={{ position: "relative" }}
            >
                {src ? (
                    <img src={src} alt={alt} onError={onError} className={styles.image} />
                ) : (
                    fallback ?? null
                )}
                {children}
            </Component>
        );
    }
);

function AvatarInner<C extends ElementType = "div">(
    {
        component,
        variant = "circle",
        size = "medium",
        src,
        alt,
        fallback,
        className,
        onError,
        onClick,
        children,
        ...restProps
    }: AvatarProps<C> & { children?: ReactNode },
    ref?: PolymorphicRef<C>
): JSX.Element {
    const Component = component || "div";

    const classes = clsx(
        styles.avatar,
        styles[variant],
        styles[size],
        className
    );

    const ownerState: BaseAvatarType = {
        src,
        alt,
        fallback,
        variant,
        size,
        onError,
        onClick,
        children,
    };

    return (
        <AvatarBase
            as={Component}
            ownerState={ownerState}
            className={classes}
            ref={ref}
            {...restProps}
        />
    );
}

const Avatar = forwardRef(AvatarInner) as <
    C extends ElementType = "div"
>(
    props: AvatarProps<C> & { children?: ReactNode; ref?: PolymorphicRef<C> }
) => JSX.Element;

export { Avatar, AvatarBase };
