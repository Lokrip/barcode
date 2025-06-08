import { FC } from "react";
import { LayoutsProps } from "../_model/types/_layouts-props";
import { Card } from "../ui/card";

export const Layouts: FC<LayoutsProps> = ({
    footer,
    media,
    content,
    width,
    height,
    fixedSize,
    variant,
}) => {
    return (
        <Card
            width={width}
            height={height}
            fixedSize={fixedSize}
            variant={variant}
        >
            {media}
            {content}
            {footer}
        </Card>
    );
};
