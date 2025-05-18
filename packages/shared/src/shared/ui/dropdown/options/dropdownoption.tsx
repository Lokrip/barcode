import { FC } from 'react';
import { DropdownOptionProps } from '../dropdown-type.ts';

export const DropdownOption: FC<DropdownOptionProps> = ({
    value,
    children,
    disabled = false,
    hidden = false,
}) => (
    <option value={value} disabled={disabled} hidden={hidden}>
        {children}
    </option>
);
