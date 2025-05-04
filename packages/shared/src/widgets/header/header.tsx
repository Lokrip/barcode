import { FC } from "react";
import { Layouts } from "./_ui/layouts";
import { Logo } from "./_ui/logo";
import { NavigationLinks } from "./_ui/navigation-links";
import { NAV_LINKS } from "../../shared/config/navigation-links";

export const Header: FC = () => {
  return (
    <Layouts
        logo={<Logo />}
        nav={<NavigationLinks
            navLinks={NAV_LINKS}
        />}
    />
  );
};
