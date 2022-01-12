import { ILogger } from "../../logger/ILogger";
import { IStarWarsCharacterRepository } from "../IStarWarsCharacterRepository";
import { StarWarsCharacter } from "../../entities/StarWarsCharacter";

export class SWAPICharacterRepository implements IStarWarsCharacterRepository {
    @ILogger
    private logger!: ILogger;
    
    async getData(): Promise<StarWarsCharacter[]> {
        this.logger.log("Getting data...");
        
        const response = await fetch("https://swapi.dev/api/people");
        const parsedResponse = await response.json();
        return (parsedResponse.results || []) as StarWarsCharacter[];    
    }
}