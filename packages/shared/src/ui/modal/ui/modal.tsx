import {ModalProps} from "../model/types.ts";

export function ModalRoot(props: ModalProps) {

}

export function Modal({
    className,
    overlayClassName,
    closeOnOverlayClick,
    onClose,
    disableBackdropClick,
    disableEscClose,
    open,
    as
}: ModalProps) {

    return (
        <div className={className}>

        </div>
    )
}
