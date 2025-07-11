import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat["jsx-runtime"],
    {
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "warn",
            "no-console": ["error", { allow: ["warn", "error", "info"] }],
            "no-restricted-syntax": [
                "error",
                {
                    selector:
                        "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                    message: "Unexpected property on console object was called",
                },
            ],
        },
    },
]);
