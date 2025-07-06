import { Search as LucideSearch } from "lucide-react";
import styles from "./search.module.scss";
import { SearchProps } from "../../model/types";
import clsx from "clsx";

export function Search({ icon }: SearchProps) {

    return (
        <div id="search">
            <button
                type="button"
                aria-label="Search (Ctrl + K)"
                className={styles.button__search}
            >
                <span className={clsx(styles.button__container, "flex-start")}>
                    <LucideSearch
                        width={icon?.width ?? 20}
                        height={icon?.height ?? 20}
                    />

                    <span className={styles.button__placeholder}>Search</span>
                </span>
            </button>
        </div>
    );
}
