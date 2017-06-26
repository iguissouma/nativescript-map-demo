import { Injectable } from "@angular/core";
import * as geolocation from "nativescript-geolocation";

@Injectable()
export class GeolocationService {

    public latitude: number;
    public longitude: number;

    public getLocation(): Promise<any> {
        return new Promise(
            (resolve, reject) => {
                if (!geolocation.isEnabled()) {
                    geolocation.enableLocationRequest().then(() => {
                        this._getCurrentLocation()
                            .then(resolve)
                            .catch(reject);
                    });
                }
                else {
                    this._getCurrentLocation()
                        .then(resolve)
                        .catch(reject);
                }
            }
        );
    }

    private _getCurrentLocation(): Promise<any> {
        return new Promise(
            (resolve, reject) => {
                geolocation.getCurrentLocation({ timeout: 20000 })
                    .then(location => {

                        this.latitude = location.latitude;
                        this.longitude = location.longitude;

                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    })
            }
        );
    }

}