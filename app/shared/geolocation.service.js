"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var geolocation = require("nativescript-geolocation");
//var humanizeDistance = require("humanize-distance");
var GeolocationService = (function () {
    function GeolocationService() {
    }
    GeolocationService.prototype.getLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!geolocation.isEnabled()) {
                geolocation.enableLocationRequest().then(function () {
                    _this._getCurrentLocation()
                        .then(resolve)
                        .catch(reject);
                });
            }
            else {
                _this._getCurrentLocation()
                    .then(resolve)
                    .catch(reject);
            }
        });
    };
    /*public getDistanceFrom(latitude: number, longitude: number): string {
        return humanizeDistance({ latitude: latitude, longitude: longitude }, { latitude: this.latitude, longitude: this.longitude }, 'en-US', 'us');
    }*/
    GeolocationService.prototype._getCurrentLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            geolocation.getCurrentLocation({ timeout: 20000 })
                .then(function (location) {
                _this.latitude = location.latitude;
                _this.longitude = location.longitude;
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    return GeolocationService;
}());
GeolocationService = __decorate([
    core_1.Injectable()
], GeolocationService);
exports.GeolocationService = GeolocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdlb2xvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0RBQXdEO0FBQ3hELHNEQUFzRDtBQUd0RCxJQUFhLGtCQUFrQjtJQUEvQjtJQThDQSxDQUFDO0lBekNVLHdDQUFXLEdBQWxCO1FBQUEsaUJBaUJDO1FBaEJHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FDZCxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ1osRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3JDLEtBQUksQ0FBQyxtQkFBbUIsRUFBRTt5QkFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDYixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLEtBQUksQ0FBQyxtQkFBbUIsRUFBRTtxQkFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDYixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBRUssZ0RBQW1CLEdBQTNCO1FBQUEsaUJBZ0JDO1FBZkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUNkLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDWixXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQzdDLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBRVYsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUNsQyxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7Z0JBRXBDLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0JBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUwseUJBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO0dBQ0Esa0JBQWtCLENBOEM5QjtBQTlDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG4vL3ZhciBodW1hbml6ZURpc3RhbmNlID0gcmVxdWlyZShcImh1bWFuaXplLWRpc3RhbmNlXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgbGF0aXR1ZGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZ2VvbG9jYXRpb24uaXNFbmFibGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q3VycmVudExvY2F0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldEN1cnJlbnRMb2NhdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKnB1YmxpYyBnZXREaXN0YW5jZUZyb20obGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBodW1hbml6ZURpc3RhbmNlKHsgbGF0aXR1ZGU6IGxhdGl0dWRlLCBsb25naXR1ZGU6IGxvbmdpdHVkZSB9LCB7IGxhdGl0dWRlOiB0aGlzLmxhdGl0dWRlLCBsb25naXR1ZGU6IHRoaXMubG9uZ2l0dWRlIH0sICdlbi1VUycsICd1cycpO1xyXG4gICAgfSovXHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0Q3VycmVudExvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAgICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oeyB0aW1lb3V0OiAyMDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGxvY2F0aW9uID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSBsb2NhdGlvbi5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBsb2NhdGlvbi5sb25naXR1ZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufSJdfQ==