/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly HOST_ENV: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module "*.scss";
