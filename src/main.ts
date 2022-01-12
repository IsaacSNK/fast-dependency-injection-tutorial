import { DI, Registration } from "@microsoft/fast-foundation";

import { App } from "./web-components/App";
import { DefaultLogger } from "./logger/implements/DefaultLogger";
import { ILogger } from "./logger/ILogger";
import { IStarWarsCharacterRepository } from "./repositories/IStarWarsCharacterRepository";
import { LocalCharacterRepository } from "./repositories/implementations/LocalCharacterRepository";
import { SWAPICharacterRepository } from "./repositories/implementations/SWAPICharacterRepository";
import { XMLLogger } from "./logger/implements/XMLLogger";

App;

DI.getOrCreateDOMContainer().register(
    //Registration.singleton(ILogger, DefaultLogger),
    Registration.singleton(ILogger, XMLLogger),
    
    Registration.singleton(IStarWarsCharacterRepository, SWAPICharacterRepository)
    // Registration.singleton(IStarWarsCharacterRepository, LocalCharacterRepository)
);