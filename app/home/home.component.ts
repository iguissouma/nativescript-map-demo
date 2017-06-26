import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from '@angular/router/router';

import { GeolocationService } from '../shared/geolocation.service';
import { MapView } from 'nativescript-google-maps-sdk';
import { Marker, Position } from 'nativescript-google-maps-sdk';

import { registerElement } from 'nativescript-angular';
import { GeocodingService } from '../shared/geocoding.service';
// Important - must register MapView plugin in order to use in Angular templates
registerElement('MapView', () => MapView);

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    ngOnInit():void {
    }

    constructor(private geolocationService:GeolocationService,
                private geocodingService:GeocodingService) {

    }

    latitude = -33.86;
    longitude = 151.20;
    zoom = 8;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView:MapView;

    lastCamera:String;


    //Map events
    onMapReady(event) {
        console.log('Map Ready');

        this.geolocationService.getLocation().then(() => {
            console.log('getLocation Ready');
            console.log(`lat: ${this.geolocationService.latitude}`);
            console.log(`lng: ${this.geolocationService.longitude}`);
            this.mapView = event.object;
            this.latitude = this.geolocationService.latitude;
            this.longitude = this.geolocationService.longitude;

            this.geocodingService.geocode('' + this.latitude, "" + this.longitude).subscribe(
                (result) => {
                    console.log(result);
                    console.log("Setting a marker...");
                    var marker = new Marker();
                    marker.position = Position.positionFromLatLng(this.latitude, this.longitude);
                    marker.title = result;
                    //marker.snippet = "Australia";
                    marker.userData = {index: 1};
                    this.mapView.addMarker(marker);
                }
            )


        });
    }

    onCoordinateTapped(args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    }

    onMarkerEvent(args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }

}
