import { FC } from "react";
import styles from "../styles/header.module.scss";
import { Navbar } from "./navbar";
import { HeaderProps } from "../types/_header-type";
import { Container } from "@packages/shared";
import clsx from "clsx";

export const Layouts: FC<HeaderProps> = ({ logo, nav, search, actions }) => {
    const classesNavbar = clsx(styles.navbar__layout);

    return (
        <header className={styles.header}>
            <Container>
                <Navbar className={classesNavbar}>
                    <Navbar.Logo>{logo}</Navbar.Logo>
                    {search && (
                        <Navbar.NavbarSearch>{search}</Navbar.NavbarSearch>
                    )}

                    <Navbar.NavigationPannel>{nav}</Navbar.NavigationPannel>

                    {actions && <Navbar.Actions>{actions}</Navbar.Actions>}
                </Navbar>
            </Container>
        </header>
    );
};
