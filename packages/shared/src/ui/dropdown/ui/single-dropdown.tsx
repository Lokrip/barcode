"use client";

import Select from "react-select";
import { singleSelectStyles } from "../model/styles";
import { DropdownProps } from "../model/props";

export function SingleDropdown({ name, id, options }: DropdownProps) {
    return (
        <Select
            name={name}
            instanceId={id}
            styles={singleSelectStyles}
            defaultValue={options[0]}
            options={options}
            isMulti={false}
        />
    );
}
