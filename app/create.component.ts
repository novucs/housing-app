import {Component} from "@angular/core";
import {SoldProperty} from "./property";
import * as geolocation from "nativescript-geolocation";
import {RouterExtensions} from "nativescript-angular";
import * as fileSystem from "file-system";

@Component({
    templateUrl: "./create.component.html"
})
export class CreateComponent {

    property: SoldProperty = {
        location: undefined,
        detached: false,
        size: undefined,
        rooms: undefined,
        bedrooms: undefined,
        energyRating: undefined,
        garage: false,
        salePrice: undefined,
        saleDate: new Date()
    };

    constructor(private routerExtensions: RouterExtensions) {
    }

    back() {
        this.routerExtensions.navigate(["/index"], {clearHistory: true});
    }

    parse(text) {
        return parseInt(text);
    }

    submit() {
        if (!this.property.size ||
            !this.property.rooms ||
            !this.property.bedrooms ||
            !this.property.energyRating ||
            !this.property.salePrice) {
            alert("You have not filled in all required fields!");
            return;
        }

        while (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest(true);
        }

        let soldFile = fileSystem.knownFolders.currentApp().getFile("sold.json");

        geolocation.getCurrentLocation({}).then(location => {
            this.property.location = location;
            return soldFile.readText();
        }).then(content => {
            let soldProperties = [];

            if (content) {
                soldProperties = JSON.parse(content);
            }

            soldProperties.push(this.property);
            return soldFile.writeText(JSON.stringify(soldProperties));
        }).then(() => {
            return this.routerExtensions.navigate(["/index"], {clearHistory: true});
        }).then(() => {
            alert("Successfully created new house sale record");
        });
    }
}
