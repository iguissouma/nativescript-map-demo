import {Http, Headers, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import { Config } from "../config";


import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

@Injectable()
export class GeocodingService {
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    geocode(lat: string, lng: string) {
        console.log("geocode" + lat + " " + lng);
        return this.http
            .get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
                lat +
                "," +
                lng +
                "&key=" +
                Config.Map.API_KEY)
            .map(res => res.json())
            .map(result => {
                console.log(JSON.stringify(result));
                if (result.status !== "OK") { throw new Error("unable to geocode address"); }
                let address = result.results[0].formatted_address;
                return address;
            });
    }

}