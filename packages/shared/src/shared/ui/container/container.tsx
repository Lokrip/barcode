import { FC, memo } from "react";
import { ContainerProps } from "./model/container-props";
import { correctClass } from "../../utils/utils";

export const Container: FC<ContainerProps> = memo(({maxWidth, className, children}) => {
    const computedMaxWidth = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;
    const styleCorrect = correctClass("container", className ?? "")

    return (
        <div style={{maxWidth: computedMaxWidth}} className={styleCorrect}>
            {children}
        </div>
    );
});
