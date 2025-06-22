import { TestType } from "./test-types";

export const isTestType = (value: unknown): value is TestType => {
    return (
        value === "unit" ||
        value === "integration" ||
        value === "e2e" ||
        value === "snapshot"
    );
};
