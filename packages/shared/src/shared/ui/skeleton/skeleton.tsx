"use client";

import { ElementType, forwardRef } from "react";
import {
    BaseSkeletonType,
    PolymorphicRef,
    SkeletonProps,
    SkeletonRootGenericProps,
} from "./skeleton-type";
import styles from "./styles/skeleton.module.scss";
import { correctClass } from "../../utils/utils";
import clsx from "clsx";

export const SkeletonRoot = forwardRef(
    <C extends ElementType = "span">(
        { as, ownerState, className, ...rest }: SkeletonRootGenericProps<C>,
        ref: PolymorphicRef<C>
    ) => {
        const {
            width,
            height,
            animation = "pulse",
            variant = "rounded",
        } = ownerState || "";

        const classNameValid = correctClass(
            clsx(
                styles.skeleton,
                styles[variant],
                styles[animation],
                width && height && styles.fitContent
            ),
            className!
        );

        const Component: ElementType = as || "span";

        return (
            <Component
                ref={ref}
                className={classNameValid}
                style={{ width, height }}
                {...rest}
            />
        );
    }
);

export const Skeleton = forwardRef<HTMLElement, SkeletonProps>(
    (
        {
            component = "span",
            animation = "pulse",
            variant = "rounded",
            width,
            height,
            className,
            ...props
        },
        ref
    ) => {
        const ownerState: BaseSkeletonType = {
            ...props,
            animation,
            component,
            variant,
            width,
            height,
        };

        return (
            <SkeletonRoot
                as={component}
                className={className}
                ownerState={ownerState}
                ref={ref}
            />
        );
    }
);
