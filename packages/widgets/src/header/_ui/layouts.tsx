import { FC } from "react";
import styles from "../styles/header.module.scss";
import { Navbar } from "./navbar";
import { HeaderProps } from "../types/_header-type";
import { Container } from "@packages/shared";

export const Layouts: FC<HeaderProps> = ({ logo, nav, search }) => {
    return (
        <header className={styles.header}>
            <Container>
                <Navbar>
                    <Navbar.Logo>{logo}</Navbar.Logo>
                    <Navbar.NavigationPannel>{nav}</Navbar.NavigationPannel>
                    <Navbar.NavbarSearch>{search}</Navbar.NavbarSearch>
                </Navbar>
            </Container>
        </header>
    );
};
