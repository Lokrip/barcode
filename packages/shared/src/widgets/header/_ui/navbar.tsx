import { FC } from "react";
import { NavbarLogoProps, NavbarNavigationPannerProps, NavbarProps } from "../types/_navbar-type";
import { attachSubComponents, correctClass } from "../../../shared/utils/utils";

import styles from "../styles/navbar.module.scss"

const Logo: FC<NavbarLogoProps> = ({children, className, CurrentLogo}) => {
    const classNameCorrect = correctClass(styles.search, className ?? "");

    return (
        <div className={classNameCorrect}>
            {CurrentLogo ? (
                <CurrentLogo />
            ) : (
                <>{children}</>
            )}
        </div>
    )
}

Logo.displayName = "Logo"

const NavigationPannel: FC<NavbarNavigationPannerProps> = ({className, children}) => {
    const classNameCorrect = correctClass(styles.navigation_panel, className ?? "");

    if (!children || (Array.isArray(children) && children.length === 0)) {
        return (<span className={"falid"}>Navigation links are missing</span>)
    }

    return (
        <nav className={classNameCorrect}>
            {children}
        </nav>
    )
}


export const NavbarMain: FC<NavbarProps> = ({children, className}) => {
    const classNameCorrect = correctClass(styles.navbar, className ?? "");

    return (
        <div className={classNameCorrect}>
            {children}
        </div>
  );
};


export const Navbar = attachSubComponents(
    "Navbar",
    NavbarMain,
    {
        "Logo": Logo,
        "NavigationPannel": NavigationPannel
    }
)
