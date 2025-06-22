export const TEST_TYPES = [
    "unit",
    "integration",
    "e2e",
    "snapshot",
    "all",
] as const;

export type TestType = (typeof TEST_TYPES)[number];
