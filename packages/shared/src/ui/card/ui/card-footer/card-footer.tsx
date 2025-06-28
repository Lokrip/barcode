"use client";

import { FC } from "react";

import styles from "./card-footer.module.scss";
import {
    CardFooterProps,
    CardFooterRootGenericProps,
} from "../../model/types/card-footer-props";
import { correctClass } from "../../../../utils";
import clsx from "clsx";
import { CardAvatar } from "../card-avatar";
import { CardActions } from "../card-actions";
import useSlot from "../../../../utils/use-slot";

export const CardFooterRoot: FC<CardFooterRootGenericProps> = ({
    ownerState,
    className,
    ref,
}) => {
    const { actions, avatar } = ownerState || "";

    const slotAvatar = "avatar";
    const slotActions = "actions";

    const Slot = useSlot(
        <>
            <CardAvatar slot={slotAvatar} avatar={avatar} />
            <CardActions slot={slotActions} actions={actions} />
        </>
    );

    const classNameValid = correctClass(
        clsx(styles.footer, "flex-between"),
        className ?? ""
    );

    return (
        <div
            data-testid="card-footer-root"
            className={classNameValid}
            ref={ref}
        >
            <Slot name={slotAvatar} />
            <Slot name={slotActions} />
        </div>
    );
};

export const CardFooter = (props: CardFooterProps) => {
    const { className, ref, ...other } = props;

    const ownerState = { ...props };

    return (
        <CardFooterRoot
            className={className}
            ownerState={ownerState}
            ref={ref}
            {...other}
        />
    );
};
