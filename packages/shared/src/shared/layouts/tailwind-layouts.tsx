import { FC, Fragment, PropsWithChildren } from "react";
import "@packages/sass";

export const TailwindLayouts: FC<PropsWithChildren> = ({ children }) => {
    return <Fragment>{children}</Fragment>;
};
