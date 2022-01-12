import { ILogger } from "../ILogger";

export class DefaultLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}