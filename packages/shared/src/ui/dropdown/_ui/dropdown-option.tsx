import { useDropdownContext } from "../dropdown-context";
import clsx from "clsx";
import styles from "../styles/dropdown.module.scss";
import type { DropdownOptionProps } from "../model/dropdown-props";

export const DropdownOption = ({
                                   value,
                                   children,
                                   className,
                               }: DropdownOptionProps) => {
    const { onSelect, selectedValue } = useDropdownContext();

    const isActive = selectedValue === value;

    return (
        <div
            className={clsx(styles.option, className, { [styles.active]: isActive })}
            onClick={() => onSelect(value)}
            role="option"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(value);
                }
            }}
            aria-selected={isActive}
        >
            {children}
        </div>
    );
};
