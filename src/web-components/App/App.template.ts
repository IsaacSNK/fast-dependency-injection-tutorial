import { html, repeat } from "@microsoft/fast-element";

import { App } from "./App";
import { StarWarsCharacter } from "../../entities/StarWarsCharacter";

export const template = html<App>`
    ${repeat(x => x.data, html<StarWarsCharacter>`<div>${x => x.name}</div>`)}
`;