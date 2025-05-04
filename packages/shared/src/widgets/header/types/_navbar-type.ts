import { PropsWithChildren } from "react";
import { ClassNameType } from "../../../shared/types/react";

export interface NavbarBaseProps extends PropsWithChildren, ClassNameType {
    //Будет Дополняться
}

export interface NavbarLogoProps extends NavbarBaseProps {
    CurrentLogo?: React.ComponentType | null;
}

export interface NavbarNavigationPannerProps extends PropsWithChildren, ClassNameType {
}

export interface NavbarSeachProps extends NavbarBaseProps {
    isCloseSearch?: boolean;
}

export interface NavbarSignInProps extends NavbarBaseProps {
    isCloseSignIn?: boolean;
}

export interface NavbarProps extends NavbarBaseProps, NavbarLogoProps, NavbarSeachProps, NavbarSignInProps {}
