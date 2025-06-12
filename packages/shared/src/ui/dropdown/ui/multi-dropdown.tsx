"use client";

import Select from "react-select";
import { DropdownProps } from "../model/props";
import { multiSelectStyles } from "../model/styles";

export function MultiDropdown({ id, name, options }: DropdownProps) {
    return (
        <Select
            name={name}
            instanceId={id}
            defaultValue={[options[0], options[1]]}
            options={options}
            styles={multiSelectStyles}
            isMulti={true}
        />
    );
}
