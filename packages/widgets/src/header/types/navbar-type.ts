import { NavigationLinksType } from "@packages/shared/types/nav-links";

export interface NavigationLinksProps<NavLinks = NavigationLinksType[]> {
    navLinks?: NavLinks;
}
