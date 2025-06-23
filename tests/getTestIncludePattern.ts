import type { TestType } from "./types/test-types";

export function getTestIncludePattern(testType: TestType = "unit"): string {
    switch (testType) {
        case "unit":
            return "**/*.unit.test.{ts,tsx}";
        case "integration":
            return "**/*.integration.test.{ts,tsx}";
        case "e2e":
            return "**/*.e2e.test.{ts,tsx}";
        case "snapshot":
            return "**/*.snapshot.test.{ts,tsx}";
        default:
            return "**/*.test.{ts,tsx}"; // fallback — все тесты
    }
}
