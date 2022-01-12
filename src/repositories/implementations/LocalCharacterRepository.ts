import { ILogger } from "../../logger/ILogger";
import { IStarWarsCharacterRepository } from "../IStarWarsCharacterRepository";
import { StarWarsCharacter } from "../../entities/StarWarsCharacter";

export class LocalCharacterRepository implements IStarWarsCharacterRepository {
    @ILogger
    private logger!: ILogger;

    async getData(): Promise<StarWarsCharacter[]> {
        this.logger.log("Getting data...");
        return Promise.resolve([{
            name: "Isaac"
        }]);
    }
}