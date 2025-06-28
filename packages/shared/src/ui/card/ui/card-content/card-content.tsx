"use client";

import { forwardRef } from "react";

import styles from "./card-content.module.scss";
import { CardContentProps } from "../../model/types/card-content-props";
import clsx from "clsx";
import useSlot from "../../../../utils/use-slot";

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    (props, ref) => {
        const {
            children,
            component: Component = "div",
            className,
            ...other
        } = props;

        const classes = clsx(styles.content, className);

        const Slot = useSlot(children, { withStyles: true, styles });

        return (
            <Component
                data-testid="card-content"
                className={classes}
                ref={ref}
                {...other}
            >
                <Slot name="title" />
                <Slot name="description" />
            </Component>
        );
    }
);
