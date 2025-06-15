import { Children, CSSProperties, ElementType, isValidElement } from "react";
import clsx from "clsx";
import styles from "../styles/avatar.module.scss";
import { Avatar } from "../avatar";
import { AvatarGroupProps } from "../model/avatar-props";

export const AvatarGroup = <C extends ElementType = "div">({
    as,
    max,
    spacing = -24,
    className = '',
    children,
    ref,
    ...restProps
}: AvatarGroupProps<C>) => {
    const Component = as || "div";
    const validChildren = Children.toArray(children).filter(isValidElement);
    const total = validChildren.length;

    const displayCount = max && total > max ? max : total;
    const displayChildren = validChildren.slice(0, displayCount);
    const hiddenCount = total - displayCount;

    const style = typeof spacing === 'number'
        ? { '--spacing': `${spacing}px` } as CSSProperties
        : undefined;

    const classes = clsx(styles.group, className);

    return (
        <Component
            ref={ref}
            className={classes}
            style={style}
            {...restProps}
        >
            {displayChildren.map((child, index) => (
                <div
                    key={index}
                    className={styles.avatarWrapper}
                    style={{ zIndex: total - index }}
                >
                    {child}
                </div>
            ))}

            {hiddenCount > 0 && (
                <div className={styles.avatarWrapper}>
                    <Avatar
                        variant="circle"
                        size="medium"
                        fallback={`+${hiddenCount}`}
                    />
                </div>
            )}
        </Component>
    );
};
