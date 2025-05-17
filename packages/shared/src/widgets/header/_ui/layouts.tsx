import { FC } from "react";
import styles from "../styles/header.module.scss"
import { Container } from "../../../shared/ui/container/container";
import { Navbar } from "./navbar";
import { HeaderProps } from "../types/_header-type";
import { Button } from "../../../shared/ui/button";

export const Layouts: FC<HeaderProps> = ({
    logo,
    nav
}) => {
    return (
        <header className={styles.header}>
            <Container>
                <Navbar>
                    <Navbar.Logo>
                        {logo}
                        <Button>
                            asdasd
                        </Button>
                    </Navbar.Logo>

                    <Navbar.NavigationPannel>
                        {nav}
                    </Navbar.NavigationPannel>
                </Navbar>
            </Container>
        </header>
    );
};
