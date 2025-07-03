import { FC } from "react";
import { NavigationLinksProps } from "../types/navbar-type";
import Link from "next/link";
import { Item, List } from "@packages/shared";
import { NavigationLinksType } from "@packages/shared/types/nav-links";

export const NavigationLinks: FC<NavigationLinksProps> = ({ navLinks }) => {
    if (!navLinks) {
        return <div className="tooltip">Navigation list. Not found</div>;
    }

    return (
        <List<NavigationLinksType>
            direction="row"
            items={navLinks}
            mapItems={(item) => {
                return (
                    <Item>
                        <Link href={item.href}>{item.label}</Link>
                    </Item>
                );
            }}
        />
    );
};
