import * as geolocation from "nativescript-geolocation";

export interface SoldProperty {
    location: geolocation.Location;
    detached: boolean;
    size: number;
    rooms: number;
    bedrooms: number;
    energyRating: number;
    garage: boolean;
    salePrice: number;
    saleDate: Date;
}
