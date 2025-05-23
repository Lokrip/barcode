import {
    Children,
    isValidElement,
    cloneElement,
    ElementType,
    forwardRef,
    Ref,
    JSX,
} from "react";
import clsx from "clsx";
import styles from "../styles/avatar.module.scss";
import { AvatarGroupOwnProps } from "../model/avatar-props";
import { Avatar } from "../avatar";

const AvatarGroupInner = (
    { component, children, max, spacing = -24, className, ...rest }: AvatarGroupOwnProps<ElementType>,
    ref: Ref<any>
): JSX.Element => {
    const Component = component || "div";
    const validChildren = Children.toArray(children).filter(isValidElement);
    const total = validChildren.length;

    const displayCount = max && total > max ? max : total;
    const displayChildren = validChildren.slice(0, displayCount);
    const hiddenCount = total - displayCount;

    return (
        <Component
            ref={ref}
            className={clsx(styles.group, className)}
            {...rest}
            style={{ display: "flex", alignItems: "center" }}
        >
            {displayChildren.map((child, index) =>
                cloneElement(child as any, {
                    style: {
                        marginLeft: index === 0 ? 0 : spacing,
                        zIndex: total - index,
                        ...((child as any).props.style || {}),
                    },
                })
            )}

            {hiddenCount > 0 && (
                <Avatar
                    style={{
                        marginLeft: spacing,
                        zIndex: 0,
                        backgroundColor: "#ccc",
                        color: "#000",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        userSelect: "none",
                    }}
                    variant="circle"
                    size="medium"
                    fallback={`+${hiddenCount}`}
                />
            )}
        </Component>
    );
};

export const AvatarGroup = forwardRef(AvatarGroupInner) as <
    C extends ElementType = "div"
>(
    props: AvatarGroupOwnProps<C> & { ref?: Ref<any> }
) => JSX.Element;
