import type { TestType } from "./types/test-types";

export function getTestIncludePattern(testType: TestType = "unit"): string {
    switch (testType) {
        case "unit":
            return "**/*.unit.test.ts";
        case "integration":
            return "**/*.integration.test.ts";
        case "e2e":
            return "**/*.e2e.test.ts";
        case "snapshot":
            return "**/*.snapshot.test.ts";
        default:
            return "**/*.test.ts"; // fallback — все тесты
    }
}
