import { NavigationLinksType } from "../../../shared/types/nav-links";

export interface NavigationLinksProps<NavLinks = NavigationLinksType[]> {
    navLinks?: NavLinks;
}
