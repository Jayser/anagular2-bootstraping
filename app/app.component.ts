import { Component } from "@angular/core";
import { map } from "lodash";

@Component({
    selector: "my-app",
    template: `<h1>Hello {{name}}</h1>`,
})

export class AppComponent {
    private name = "Angular";

    constructor() {
        map([], (item) => {
            return item;
        });
    }
}