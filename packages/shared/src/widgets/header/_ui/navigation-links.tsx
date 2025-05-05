import { FC } from "react";
import { NavigationLinksProps } from "../types/navbar-type";
import { List } from "../../../shared/ui/list";
import { NavigationLinksType } from "../../../shared/types/nav-links";
import { Item } from "../../../shared/ui/item/item";
import Link from "next/link";

export const NavigationLinks: FC<NavigationLinksProps> = ({ navLinks }) => {
    if (!navLinks) {
        return (
            <div className="tooltip">
                Navigation list. Not found
            </div>
        )
    }

    return (
        <List<NavigationLinksType>
            direction="row"
            items={navLinks}
            mapItems={item => {
                return (
                    <Item>
                        <Link href={item.href}>
                            {item.label}
                        </Link>
                    </Item>
                )
            }}
        />
    );
};
