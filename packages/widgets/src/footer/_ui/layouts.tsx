import { FC } from "react";
import clsx from "clsx";
import styles from "@packages/shared/src/ui/button/styles/button.module.scss";
import { FooterProps } from "../types/footer-props";
import { Container } from "@packages/shared";

export const Layouts: FC<FooterProps> = ({
    rows,
    cols,
    className
}) => {
    const classes = clsx(
        styles.footer,
        className
    );
    return (
        <footer className={classes}>
            <Container>
            </Container>
        </footer>
    )
}
