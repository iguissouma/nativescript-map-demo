"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router/router");
var config_1 = require("../../config");
var geolocation_service_1 = require("../shared/geolocation.service");
var HomeComponent = (function () {
    function HomeComponent(geolocationService, zone, router) {
        this.geolocationService = geolocationService;
        this.zone = zone;
        this.router = router;
        this.mapboxKey = config_1.Config.MapBox.ACCESS_TOKEN;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onMapReady = function (args) {
        var _this = this;
        this.mapbox = args.map;
        this.geolocationService.getLocation().then(function () {
            _this.mapbox.setCenter({
                lat: _this.geolocationService.latitude,
                lng: _this.geolocationService.longitude,
                animated: true
            });
        });
    };
    HomeComponent.prototype.dropMarkers = function () {
        var _this = this;
        var markers = this.photos.map(function (photo, index) {
            return {
                lat: photo.latitude,
                lng: photo.longitude,
                onTap: function () {
                    _this.zone.run(function () {
                        _this.showPhoto({ index: index });
                    });
                }
            };
        });
        this.mapbox.addMarkers(markers);
    };
    HomeComponent.prototype.centerMap = function (args) {
        var photo = this.photos[args.index];
        this.mapbox.setCenter({
            lat: parseFloat(photo.latitude),
            lng: parseFloat(photo.longitude),
            animated: false
        });
    };
    HomeComponent.prototype.showPhoto = function (args) {
        var photo = this.photos[args.index];
        this.router.navigate(["/image-component", photo.id]);
    };
    HomeComponent.prototype.loadPhotos = function () {
        //return this.flickrService.photosSearch(this.geolocationService.latitude, this.geolocationService.longitude);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "ns-home",
        moduleId: module.id,
        templateUrl: "./home.component.html",
    }),
    __metadata("design:paramtypes", [geolocation_service_1.GeolocationService, core_1.NgZone, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCxpREFBZ0Q7QUFFaEQsdUNBQXNDO0FBQ3RDLHFFQUFtRTtBQU1uRSxJQUFhLGFBQWE7SUFTdEIsdUJBQW9CLGtCQUFzQyxFQUFVLElBQVksRUFBVSxNQUFjO1FBQXBGLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNwRyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ2hELENBQUM7SUFWRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVdNLGtDQUFVLEdBQWpCLFVBQWtCLElBQUk7UUFBdEIsaUJBVUM7UUFURyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQztZQUN2QyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDbEIsR0FBRyxFQUFFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRO2dCQUNyQyxHQUFHLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVM7Z0JBQ3RDLFFBQVEsRUFBRSxJQUFJO2FBQ2pCLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBQUEsaUJBYUM7UUFaRyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQVUsRUFBRSxLQUFhO1lBQ3BELE1BQU0sQ0FBQztnQkFDSCxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVE7Z0JBQ25CLEdBQUcsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDcEIsS0FBSyxFQUFFO29CQUNILEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNWLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQzthQUNKLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxpQ0FBUyxHQUFoQixVQUFpQixJQUFTO1FBQ3RCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUMvQixHQUFHLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDaEMsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGlDQUFTLEdBQWhCLFVBQWlCLElBQVM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sa0NBQVUsR0FBakI7UUFDSSw4R0FBOEc7SUFDbEgsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQztBQTFEWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtLQUN2QyxDQUFDO3FDQVUwQyx3Q0FBa0IsRUFBZ0IsYUFBTSxFQUFrQixlQUFNO0dBVC9GLGFBQWEsQ0EwRHpCO0FBMURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgR2VvbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2dlb2xvY2F0aW9uLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG5nT25Jbml0KCk6dm9pZCB7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG1hcGJveDogYW55O1xuICAgIHByaXZhdGUgcGhvdG9zOiBhbnk7XG4gICAgcHVibGljIG1hcGJveEtleTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnZW9sb2NhdGlvblNlcnZpY2U6IEdlb2xvY2F0aW9uU2VydmljZSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5tYXBib3hLZXkgPSBDb25maWcuTWFwQm94LkFDQ0VTU19UT0tFTjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25NYXBSZWFkeShhcmdzKSB7XG4gICAgICAgIHRoaXMubWFwYm94ID0gYXJncy5tYXA7XG4gICAgICAgIHRoaXMuZ2VvbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcGJveC5zZXRDZW50ZXIoe1xuICAgICAgICAgICAgICAgIGxhdDogdGhpcy5nZW9sb2NhdGlvblNlcnZpY2UubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgbG5nOiB0aGlzLmdlb2xvY2F0aW9uU2VydmljZS5sb25naXR1ZGUsXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcm9wTWFya2VycygpIHtcbiAgICAgICAgbGV0IG1hcmtlcnMgPSB0aGlzLnBob3Rvcy5tYXAoKHBob3RvOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGF0OiBwaG90by5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICBsbmc6IHBob3RvLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgICBvblRhcDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Bob3RvKHsgaW5kZXg6IGluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1hcGJveC5hZGRNYXJrZXJzKG1hcmtlcnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjZW50ZXJNYXAoYXJnczogYW55KSB7XG4gICAgICAgIGxldCBwaG90byA9IHRoaXMucGhvdG9zW2FyZ3MuaW5kZXhdO1xuICAgICAgICB0aGlzLm1hcGJveC5zZXRDZW50ZXIoe1xuICAgICAgICAgICAgbGF0OiBwYXJzZUZsb2F0KHBob3RvLmxhdGl0dWRlKSxcbiAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChwaG90by5sb25naXR1ZGUpLFxuICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93UGhvdG8oYXJnczogYW55KSB7XG4gICAgICAgIGxldCBwaG90byA9IHRoaXMucGhvdG9zW2FyZ3MuaW5kZXhdO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaW1hZ2UtY29tcG9uZW50XCIsIHBob3RvLmlkXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRQaG90b3MoKSB7XG4gICAgICAgIC8vcmV0dXJuIHRoaXMuZmxpY2tyU2VydmljZS5waG90b3NTZWFyY2godGhpcy5nZW9sb2NhdGlvblNlcnZpY2UubGF0aXR1ZGUsIHRoaXMuZ2VvbG9jYXRpb25TZXJ2aWNlLmxvbmdpdHVkZSk7XG4gICAgfVxuXG59XG4iXX0=