/*

address
- don't look at other property values not within a quarter of a mile

detached 0.9

house size sq feet 0.6
# rooms 0.6
# bedrooms 0.6

energy rating 0.3
garage 0.3

sale price
date of sale
- every 3 months, add 3%

 */

import {Component} from "@angular/core";
import * as geolocation from "nativescript-geolocation";
import {RouterExtensions} from "nativescript-angular";
import * as fileSystem from "file-system";
import {SoldProperty} from "./property";

@Component({
    templateUrl: "./evaluate.component.html"
})
export class EvaluateComponent {

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
        console.log(JSON.stringify(this.property, null, 2));
        if (!this.property.size ||
            !this.property.rooms ||
            !this.property.bedrooms ||
            !this.property.energyRating) {
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

            let nearbyProperties = [];
            let min = JSON.parse(JSON.stringify(this.property));
            let max = JSON.parse(JSON.stringify(this.property));

            soldProperties.forEach(property => {
                let distance = EvaluateComponent.distance(property.location, this.property.location);
                if (distance < 0.25) {
                    nearbyProperties.push(property);

                    for (let key in property) {
                        if (property.hasOwnProperty(key) &&
                            this.property.hasOwnProperty(key)) {
                            if (property[key] > max[key]) {
                                max[key] = property[key];
                            }

                            if (property[key] < min[key]) {
                                min[key] = property[key];
                            }
                        }
                    }
                }
            });

            if (nearbyProperties.length <= 0) {
                alert("Cannot evaluate house value. No other properties sold in this region have been tracked.");
                return;
            }

            let closest: SoldProperty = null;
            let closestValue = 0;

            for (let key in this.property) {
                if (this.property.hasOwnProperty(key) &&
                    key.indexOf("Scaled") < 0 &&
                    typeof this.property[key] == "number") {
                    this.property[key + "Scaled"] = (this.property[key] - min[key]) / (max[key] - min[key]);
                }
            }

            let modifiers = {
                detached: 0.9,
                size: 0.6,
                rooms: 0.6,
                bedrooms: 0.6,
                energyRating: 0.3,
                garage: 0.3
            };

            console.log("\n\n-------------------------");
            console.log("\nBEGINNING EVALUATION\n\n");
            console.log("-------------------------\n\n");
            let id = 0;

            nearbyProperties.forEach(property => {
                // feature scaling
                for (let key in property) {
                    if (property.hasOwnProperty(key) &&
                        this.property.hasOwnProperty(key) &&
                        key.indexOf("Scaled") < 0 &&
                        typeof property[key] == "number") {
                        property[key + "Scaled"] = (property[key] - min[key]) / (max[key] - min[key]);
                    }
                }


                let weights = {
                    detached: property.detached == this.property.detached ? 0 : modifiers.detached,
                    size: Math.sqrt(Math.pow(property.sizeScaled - this.property["sizeScaled"], 2)) * modifiers.size,
                    rooms: Math.sqrt(Math.pow(property.roomsScaled - this.property["roomsScaled"], 2)) * modifiers.rooms,
                    bedrooms: Math.sqrt(Math.pow(property.bedroomsScaled - this.property["bedroomsScaled"], 2)) * modifiers.bedrooms,
                    energyRating: Math.sqrt(Math.pow(property.energyRatingScaled - this.property["energyRatingScaled"], 2)) * modifiers.energyRating,
                    garage: property.garage == this.property.garage ? 0 : modifiers.garage
                };

                let value = weights.detached + weights.size + weights.rooms + weights.bedrooms + weights.energyRating + weights.garage;

                console.log("WEIGHTS (" + id++ + "): " + JSON.stringify(weights, null, 2));
                console.log("OVERALL VALUE: " + value + "\n\n");

                if (closest == null || closestValue > value) {
                    closestValue = value;
                    closest = property;
                }
            });

            let monthDiff = EvaluateComponent.monthDiff(new Date(closest.saleDate), this.property.saleDate);
            let price = closest.salePrice * Math.pow(1.03, monthDiff);
            this.property.salePrice = price;
            alert("The predicted price of your property is: \n$" + price);
        });
    }

    static distance(loc1, loc2) {
        let lat1 = loc1.latitude;
        let lon1 = loc1.longitude;
        let lat2 = loc2.latitude;
        let lon2 = loc2.longitude;
        let p = 0.017453292519943295;
        let c = Math.cos;
        let a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p)) / 2;
        return 7917.509282 * Math.asin(Math.sqrt(a));
    }

    static monthDiff(d1: Date, d2: Date) {
        let months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }
}
