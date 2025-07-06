import { ElementType, ReactNode } from "react";

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    as?: ElementType;
    className?: string;
    overlayClassName?: string;
    disableBackdropClick?: boolean;
    disableEscClose?: boolean;
    closeOnOverlayClick?: boolean;
}
