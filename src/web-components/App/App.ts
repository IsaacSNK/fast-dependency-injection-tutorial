import { FASTElement, customElement, observable } from "@microsoft/fast-element";

import { IStarWarsCharacterRepository } from "../../repositories/IStarWarsCharacterRepository";
import { StarWarsCharacter } from "../../entities/StarWarsCharacter";

export class App extends FASTElement {
    @IStarWarsCharacterRepository
    private repository!: IStarWarsCharacterRepository;

    @observable
    data!: StarWarsCharacter[];
    
    async connectedCallback() {
        super.connectedCallback();
        this.loadData();        
    }

    private async loadData() {
        this.data = this.applyFilters(await this.repository.getData());
    }

    private applyFilters(unfilteredData: StarWarsCharacter[]): StarWarsCharacter[] {
        // Complex filtering logic
        return unfilteredData;
    }
}