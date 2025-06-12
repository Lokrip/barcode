import { GroupBase, StylesConfig } from "react-select";
import { OptionType } from "./types";

export const singleSelectStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
        ...provided,
        borderRadius: "8px",
        boxShadow: "none",
        textAlign: "left",
    }),
    option: (provided) => ({
        ...provided,
    }),
};

export const multiSelectStyles: StylesConfig<
    OptionType | GroupBase<OptionType>,
    true,
    GroupBase<OptionType>
> = {
    control: (provided) => ({
        ...provided,
        borderRadius: "8px",
        boxShadow: "none",
        textAlign: "left",
        minHeight: "auto",
    }),
    option: (provided) => ({
        ...provided,
        padding: "10px",
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: "#e0e0e0",
        borderRadius: "4px",
        padding: "2px 6px",
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: "#333",
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        cursor: "pointer",
        ":hover": {
            backgroundColor: "#ccc",
            color: "#000",
        },
    }),
};
