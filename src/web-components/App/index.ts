import { App } from "./App";
import { FASTElement } from "@microsoft/fast-element";
import { template } from "./App.template";

export * from "./App";

FASTElement.define(App, {
    name: "starwars-app",
    template
});