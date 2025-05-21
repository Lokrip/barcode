import { FC, Fragment, PropsWithChildren } from "react";
import "@packages/sass";

export const SassLayouts: FC<PropsWithChildren> = ({ children }) => {
    return <Fragment>{children}</Fragment>;
};
