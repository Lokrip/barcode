import { ElementType } from "react";
import clsx from "clsx";
import styles from "./styles/switch.module.scss";
import { correctClass } from "../../utils";
import { useSwitch } from "./model/useSwitch";
import { SwitchProps } from "./model/switch-props";

export const Switch = <C extends ElementType = "div">(props: SwitchProps<C>) => {
    const {
        as,
        checked,
        defaultChecked,
        disabled = false,
        size = "medium",
        color = "primary",
        onChange,
        className = "",
        ...rest
    } = props;

    const { isChecked, toggle, keyToggle } = useSwitch({
        checked,
        defaultChecked,
        disabled,
        onChange,
    });

    const Component = as || "div";
    const isInput = Component === "input";

    const classNameValid = correctClass(
        clsx(
            styles.switch,
            styles[size],
            styles[color],
            isChecked && styles.checked,
            disabled && styles.disabled
        ),
        className
    );

    return (
        <Component
            type={isInput ? 'checkbox' : undefined}  // <-- добавлено для input
            className={classNameValid}
            onClick={!isInput ? toggle : undefined}
            onChange={isInput ? toggle : undefined}
            {...(isInput
                ? { checked: isChecked, disabled }
                : { role: "switch", tabIndex: disabled ? -1 : 0, onKeyDown: keyToggle })}
            {...rest}
        />
    );
};
