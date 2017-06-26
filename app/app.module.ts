import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';


import * as platform from "platform";
import { GeolocationService } from './shared/geolocation.service';
import { GeocodingService } from './shared/geocoding.service';
import { NativeScriptHttpModule } from 'nativescript-angular/index';
declare var GMSServices: any;
import { Config } from "./config";

if(platform.isIOS) {
    GMSServices.provideAPIKey(Config.Map.API_KEY);
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [
        GeolocationService,
        GeocodingService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
