import { Children, forwardRef, isValidElement, ReactElement } from "react";

import styles from "../styles/card-content.module.scss";
import { CardContentProps } from "../model/types/card-content-props";
import clsx from "clsx";
import { hasSlotProp } from "../../../utils/slots";
import { isCardContentElement } from "../model/type-guards";

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    (props, ref) => {
        const {
            children,
            component: Component = "div",
            className,
            ...other
        } = props;

        const childrenArray = Children.toArray(children).filter(hasSlotProp);

        const classes = clsx(styles.content, className);

        if (!isCardContentElement(Component)) {
            console.warn(
                `Invalid component tag "${Component}" passed to CardContent. Using "div" instead.`
            );
        }

        return (
            <Component className={classes} ref={ref} {...other}>
                {children}
            </Component>
        );
    }
);
