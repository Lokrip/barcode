import { defineConfig } from "vitest/config";
import { TestType } from "./tests/types/test-types";
import { getTestIncludePattern } from "./tests/getTestIncludePattern";
import { isTestType } from "./tests/types/type-guards";

const envTestType = process.env.TEST_TYPE;
const testType: TestType = isTestType(envTestType) ? envTestType : "all";
const includePattern = getTestIncludePattern(testType);

export default defineConfig({
    test: {
        include: [includePattern],
        pool: "threads",
        env: {
            FORCE_COLOR: "1",
        },
        hideSkippedTests: true,
        exclude: [
            // default
            "**/node_modules/**",
            "**/dist/**",
            "**/cypress/**",
            "**/.{idea,git,cache,output,temp}/**",
            "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
            // some artifacts in the fixtures have spec files that we're not using
            "**/*.spec.js",
        ],

        setupFiles: ["./tests/setup.ts"],
        environment: "jsdom",
    },
});
