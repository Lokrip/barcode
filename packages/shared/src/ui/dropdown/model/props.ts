import { GroupBase, OptionsOrGroups } from "react-select";
import { OptionType } from "./types";

export interface DropdownProps {
    id: string;
    options: OptionsOrGroups<OptionType, GroupBase<OptionType>>;
    name?: string;
}
