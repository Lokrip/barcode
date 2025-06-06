import winston from "winston";
import { CONFIG } from "../config";

export const logger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    defaultMeta: { service: "@packages/shared", hostEnv: CONFIG.HOST_ENV },
    transports: [
        /*
        Сейчас у нас используется transport для консоли,
        но в будущем нужно добавить transport в сторонний сервис
        для просмотра логов.
        */

        new winston.transports.Console({
            format: winston.format.json(),
        }),
    ],
});
