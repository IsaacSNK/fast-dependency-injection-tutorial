import { DI } from "@microsoft/fast-foundation";
import { StarWarsCharacter } from "../entities/StarWarsCharacter";

export interface IStarWarsCharacterRepository {
    getData(): Promise<StarWarsCharacter[]>;
}

export const IStarWarsCharacterRepository = DI.createInterface<IStarWarsCharacterRepository>();