"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var geolocation_service_1 = require("../shared/geolocation.service");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var nativescript_google_maps_sdk_2 = require("nativescript-google-maps-sdk");
var nativescript_angular_1 = require("nativescript-angular");
var geocoding_service_1 = require("../shared/geocoding.service");
// Important - must register MapView plugin in order to use in Angular templates
nativescript_angular_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var HomeComponent = (function () {
    function HomeComponent(geolocationService, geocodingService) {
        this.geolocationService = geolocationService;
        this.geocodingService = geocodingService;
        this.latitude = -33.86;
        this.longitude = 151.20;
        this.zoom = 8;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    //Map events
    HomeComponent.prototype.onMapReady = function (event) {
        var _this = this;
        console.log('Map Ready');
        this.geolocationService.getLocation().then(function () {
            console.log('getLocation Ready');
            console.log("lat: " + _this.geolocationService.latitude);
            console.log("lng: " + _this.geolocationService.longitude);
            _this.mapView = event.object;
            _this.latitude = _this.geolocationService.latitude;
            _this.longitude = _this.geolocationService.longitude;
            _this.geocodingService.geocode('' + _this.latitude, "" + _this.longitude).subscribe(function (result) {
                console.log(result);
                console.log("Setting a marker...");
                var marker = new nativescript_google_maps_sdk_2.Marker();
                marker.position = nativescript_google_maps_sdk_2.Position.positionFromLatLng(_this.latitude, _this.longitude);
                marker.title = result;
                //marker.snippet = "Australia";
                marker.userData = { index: 1 };
                _this.mapView.addMarker(marker);
            });
        });
    };
    HomeComponent.prototype.onCoordinateTapped = function (args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    };
    HomeComponent.prototype.onMarkerEvent = function (args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    };
    HomeComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "ns-home",
        moduleId: module.id,
        templateUrl: "./home.component.html",
    }),
    __metadata("design:paramtypes", [geolocation_service_1.GeolocationService,
        geocoding_service_1.GeocodingService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUcxRCxxRUFBbUU7QUFDbkUsNkVBQXVEO0FBQ3ZELDZFQUFnRTtBQUVoRSw2REFBdUQ7QUFDdkQsaUVBQStEO0FBQy9ELGdGQUFnRjtBQUNoRixzQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsc0NBQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztBQU8xQyxJQUFhLGFBQWE7SUFJdEIsdUJBQW9CLGtCQUFxQyxFQUNyQyxnQkFBaUM7UUFEakMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBSXJELGFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNsQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBUDNCLENBQUM7SUFORCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQWtCRCxZQUFZO0lBQ1osa0NBQVUsR0FBVixVQUFXLEtBQUs7UUFBaEIsaUJBMEJDO1FBekJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFVLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVcsQ0FBQyxDQUFDO1lBQ3pELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM1QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7WUFDakQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO1lBRW5ELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQzVFLFVBQUMsTUFBTTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ25DLElBQUksTUFBTSxHQUFHLElBQUkscUNBQU0sRUFBRSxDQUFDO2dCQUMxQixNQUFNLENBQUMsUUFBUSxHQUFHLHVDQUFRLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUN0QiwrQkFBK0I7Z0JBQy9CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FDSixDQUFBO1FBR0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMENBQWtCLEdBQWxCLFVBQW1CLElBQUk7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakgsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUztjQUN4QyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7Y0FDdEMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0csSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBaEVELElBZ0VDO0FBaEVZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO0tBQ3ZDLENBQUM7cUNBS3lDLHdDQUFrQjtRQUNwQixvQ0FBZ0I7R0FMNUMsYUFBYSxDQWdFekI7QUFoRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBHZW9sb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZ2VvbG9jYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYXBWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5cbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IEdlb2NvZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZ2VvY29kaW5nLnNlcnZpY2UnO1xuLy8gSW1wb3J0YW50IC0gbXVzdCByZWdpc3RlciBNYXBWaWV3IHBsdWdpbiBpbiBvcmRlciB0byB1c2UgaW4gQW5ndWxhciB0ZW1wbGF0ZXNcbnJlZ2lzdGVyRWxlbWVudCgnTWFwVmlldycsICgpID0+IE1hcFZpZXcpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbmdPbkluaXQoKTp2b2lkIHtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdlb2xvY2F0aW9uU2VydmljZTpHZW9sb2NhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBnZW9jb2RpbmdTZXJ2aWNlOkdlb2NvZGluZ1NlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIGxhdGl0dWRlID0gLTMzLjg2O1xuICAgIGxvbmdpdHVkZSA9IDE1MS4yMDtcbiAgICB6b29tID0gODtcbiAgICBiZWFyaW5nID0gMDtcbiAgICB0aWx0ID0gMDtcbiAgICBwYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcbiAgICBtYXBWaWV3Ok1hcFZpZXc7XG5cbiAgICBsYXN0Q2FtZXJhOlN0cmluZztcblxuXG4gICAgLy9NYXAgZXZlbnRzXG4gICAgb25NYXBSZWFkeShldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTWFwIFJlYWR5Jyk7XG5cbiAgICAgICAgdGhpcy5nZW9sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRMb2NhdGlvbiBSZWFkeScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGxhdDogJHt0aGlzLmdlb2xvY2F0aW9uU2VydmljZS5sYXRpdHVkZX1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsbmc6ICR7dGhpcy5nZW9sb2NhdGlvblNlcnZpY2UubG9uZ2l0dWRlfWApO1xuICAgICAgICAgICAgdGhpcy5tYXBWaWV3ID0gZXZlbnQub2JqZWN0O1xuICAgICAgICAgICAgdGhpcy5sYXRpdHVkZSA9IHRoaXMuZ2VvbG9jYXRpb25TZXJ2aWNlLmxhdGl0dWRlO1xuICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSB0aGlzLmdlb2xvY2F0aW9uU2VydmljZS5sb25naXR1ZGU7XG5cbiAgICAgICAgICAgIHRoaXMuZ2VvY29kaW5nU2VydmljZS5nZW9jb2RlKCcnICsgdGhpcy5sYXRpdHVkZSwgXCJcIiArIHRoaXMubG9uZ2l0dWRlKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgYSBtYXJrZXIuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyh0aGlzLmxhdGl0dWRlLCB0aGlzLmxvbmdpdHVkZSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci50aXRsZSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgLy9tYXJrZXIuc25pcHBldCA9IFwiQXVzdHJhbGlhXCI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHtpbmRleDogMX07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG5cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNvb3JkaW5hdGVUYXBwZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvb3JkaW5hdGUgVGFwcGVkLCBMYXQ6IFwiICsgYXJncy5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uTWFya2VyRXZlbnQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcmtlciBFdmVudDogJ1wiICsgYXJncy5ldmVudE5hbWVcbiAgICAgICAgICAgICsgXCInIHRyaWdnZXJlZCBvbjogXCIgKyBhcmdzLm1hcmtlci50aXRsZVxuICAgICAgICAgICAgKyBcIiwgTGF0OiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FtZXJhIGNoYW5nZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpLCBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSkgPT09IHRoaXMubGFzdENhbWVyYSk7XG4gICAgICAgIHRoaXMubGFzdENhbWVyYSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKTtcbiAgICB9XG5cbn1cbiJdfQ==