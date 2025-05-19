import { FC } from "react";
import { ItemProps } from "./model/item-type.ts";
import { correctClass } from "../../utils/utils";

export const ItemContainer: FC<ItemProps> = ({ children, className, ...props }) => {
    const classCorrect = correctClass('item', className!);

    return (
        <li {...props} className={classCorrect}>
            {children}
        </li>
    )
}

export const Item: FC<ItemProps> = ({ children, className, ...props }) => {
    return (
        <ItemContainer {...props} className={className}>
            {children}
        </ItemContainer>
    )
}
