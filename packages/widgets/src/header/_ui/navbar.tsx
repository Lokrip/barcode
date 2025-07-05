import { FC, PropsWithChildren } from "react";
import {
    NavbarLogoProps,
    NavbarNavigationPannerProps,
    NavbarProps,
} from "../types/_navbar-type";

import styles from "../styles/navbar.module.scss";
import {
    attachSubComponents,
    ClassNameType,
    correctClass,
} from "@packages/shared";
import clsx from "clsx";

const Logo: FC<NavbarLogoProps> = ({ children, className, CurrentLogo }) => {
    const classNameCorrect = correctClass(styles.search, className ?? "");

    return (
        <div className={classNameCorrect}>
            {CurrentLogo ? <CurrentLogo /> : <>{children}</>}
        </div>
    );
};

const NavbarSearch: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.navbar__search}>{children}</div>;
};

const NavigationPannel: FC<NavbarNavigationPannerProps> = ({
    className,
    children,
}) => {
    const classNameCorrect = correctClass(
        styles.navigation_panel,
        className ?? ""
    );

    if (!children || (Array.isArray(children) && children.length === 0)) {
        return <span className={"falid"}>Navigation links are missing</span>;
    }

    return <nav className={classNameCorrect}>{children}</nav>;
};

export const NavbarMain: FC<NavbarProps> = ({ children, className }) => {
    const classNameCorrect = correctClass(styles.navbar, className ?? "");

    return <div className={classNameCorrect}>{children}</div>;
};

export const ActionsContainer: FC<PropsWithChildren<ClassNameType>> = ({
    children,
    className,
}) => {
    return (
        <div className={clsx(styles.actions__container, className)}>
            {children}
        </div>
    );
};

export const Navbar = attachSubComponents("Navbar", NavbarMain, {
    Logo: Logo,
    NavigationPannel: NavigationPannel,
    NavbarSearch: NavbarSearch,
    Actions: ActionsContainer,
});
