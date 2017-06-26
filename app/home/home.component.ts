import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from '@angular/router/router';

import { Config } from "../../config";
import { GeolocationService } from '../shared/geolocation.service';
@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    ngOnInit():void {
    }


    private mapbox: any;
    private photos: any;
    public mapboxKey: string;

    constructor(private geolocationService: GeolocationService, private zone: NgZone, private router: Router) {
        this.mapboxKey = Config.MapBox.ACCESS_TOKEN;
    }

    public onMapReady(args) {
        this.mapbox = args.map;
        this.geolocationService.getLocation().then(() => {
            this.mapbox.setCenter({
                lat: this.geolocationService.latitude,
                lng: this.geolocationService.longitude,
                animated: true
            });

        });
    }

    public dropMarkers() {
        let markers = this.photos.map((photo: any, index: number) => {
            return {
                lat: photo.latitude,
                lng: photo.longitude,
                onTap: () => {
                    this.zone.run(() => {
                        this.showPhoto({ index: index });
                    });
                }
            }
        });
        this.mapbox.addMarkers(markers);
    }

    public centerMap(args: any) {
        let photo = this.photos[args.index];
        this.mapbox.setCenter({
            lat: parseFloat(photo.latitude),
            lng: parseFloat(photo.longitude),
            animated: false
        });
    }

    public showPhoto(args: any) {
        let photo = this.photos[args.index];
        this.router.navigate(["/image-component", photo.id]);
    }

    public loadPhotos() {
        //return this.flickrService.photosSearch(this.geolocationService.latitude, this.geolocationService.longitude);
    }

}
