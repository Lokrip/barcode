import { forwardRef, Fragment } from "react";
import { ListContainerProps, ListProps } from "./model/list-props";
import styles from "./style/list.module.scss";
import { correctClass } from "../../utils";

export const ListContainer = forwardRef<HTMLUListElement, ListContainerProps>(
    ({ children, className, direction = "column" }, ref) => {
        const classNameValid = correctClass(styles.list, className || "");

        const style_classes = [classNameValid];
        style_classes.push(direction === "row" ? styles.row : styles.column);

        return (
            <ul ref={ref} className={style_classes.join(" ").trim()}>
                {children}
            </ul>
        );
    }
);

ListContainer.displayName = "ListContainer";

function ListInner<T extends { id: number }>(
    { items, mapItems, className, direction }: ListProps<T>,
    ref: React.Ref<HTMLUListElement>
) {
    return (
        <ListContainer direction={direction} ref={ref} className={className}>
            {items?.map((item, index) => (
                <Fragment key={item.id}>{mapItems(item, index)}</Fragment>
            ))}
        </ListContainer>
    );
}

export const List = forwardRef(ListInner) as <T extends { id: number }>(
    props: ListProps<T> & { ref?: React.Ref<HTMLUListElement> }
) => ReturnType<typeof ListInner>;
