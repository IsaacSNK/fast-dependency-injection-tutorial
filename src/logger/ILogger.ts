import { DI } from "@microsoft/fast-foundation";

export interface ILogger {
    log(message: string): void;
}

export const ILogger = DI.createInterface<ILogger>();