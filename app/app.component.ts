import { AfterViewInit, Component } from "@angular/core";
import { padStart } from "lodash";

@Component({
    selector: "my-app",
    template: `<h1>Hello {{name}}</h1>`,
})

export class AppComponent implements AfterViewInit {
    private name = "Angular";

    public ngAfterViewInit() {
        console.log(padStart(" Hello TypeScript!", 20, "@"));
    }
}

