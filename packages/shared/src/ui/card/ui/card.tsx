import { forwardRef } from "react";
import { CardProps, CardRootGenericProps } from "../model/types/card-props";
import { correctClass } from "../../../utils";
import clsx from "clsx";

import styles from "../styles/card.module.scss";

export const CardRoot = forwardRef<HTMLDivElement, CardRootGenericProps>(
    ({ ownerState, className, children }, ref) => {
        const {
            width,
            height,
            variant = "outlined",
            fixedSize,
        } = ownerState || "";

        const classNameValid = correctClass(
            clsx(styles.card, styles[variant], fixedSize && styles.fixedSize),
            className ?? ""
        );

        const cardStyle = { width, height };

        return (
            <div className={classNameValid} ref={ref} style={cardStyle}>
                {children}
            </div>
        );
    }
);

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
    const { children, ...other } = props;

    const ownerState = { ...props };

    return (
        <CardRoot
            ownerState={ownerState}
            children={children}
            ref={ref}
            {...other}
        />
    );
});
