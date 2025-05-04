import { forwardRef, Fragment, PropsWithChildren } from "react";
import { ClassNameType } from "../../types/react";
import { correctClass } from "../../utils/utils";
import { ListProps } from "./list-type";

const ListContainer = forwardRef<HTMLUListElement, PropsWithChildren<ClassNameType>>(
    ({ children, className }, ref) => {
        const classNameValid = correctClass("container-list", className || "");

        return (
            <ul ref={ref} className={classNameValid}>
                {children}
            </ul>
        );
    }
);

ListContainer.displayName = "ListContainer";

export const List = forwardRef(<T extends {id: number},>(
    { items, mapItems, className }: ListProps<T>,
    ref: React.Ref<HTMLUListElement>
) => {
        return (
            <ListContainer ref={ref} className={className}>
                {items?.map((item: T, index: number) => (
                    <Fragment key={item.id}>
                        {mapItems(item, index)}
                    </Fragment>
                ))}
            </ListContainer>
        );
    }
);

List.displayName = "List";
