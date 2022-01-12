import { ILogger } from "../ILogger";

export class XMLLogger implements ILogger {
    log(message: string): void {
        console.log(`<message>${message}</message>`);
    }
}