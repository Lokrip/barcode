import { FC, memo } from "react";
import { ContainerProps } from "./container-type";
import { correctClass } from "../../utils/utils";

import styles from "./styles/container.module.scss"

export const Container: FC<ContainerProps> = memo(({maxWidth, className, children}) => {
    const computedMaxWidth = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;
    const styleCorrect = correctClass(styles.container, className ?? "")

    return (
        <div style={{maxWidth: computedMaxWidth}} className={styleCorrect}>
            {children}
        </div>
    );
});
