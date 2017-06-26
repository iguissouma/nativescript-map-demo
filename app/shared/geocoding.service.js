"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var config_1 = require("../config");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
var GeocodingService = (function () {
    function GeocodingService(http) {
        this.http = http;
    }
    GeocodingService.prototype.geocode = function (lat, lng) {
        console.log("geocode" + lat + " " + lng);
        return this.http
            .get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            lng +
            "&key=" +
            config_1.Config.Map.API_KEY)
            .map(function (res) { return res.json(); })
            .map(function (result) {
            console.log(JSON.stringify(result));
            if (result.status !== "OK") {
                throw new Error("unable to geocode address");
            }
            var address = result.results[0].formatted_address;
            return address;
        });
    };
    return GeocodingService;
}());
GeocodingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GeocodingService);
exports.GeocodingService = GeocodingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZW9jb2Rpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRDtBQUN0RCxzQ0FBeUM7QUFDekMsb0NBQW1DO0FBR25DLGlDQUErQjtBQUMvQixzQ0FBb0M7QUFHcEMsSUFBYSxnQkFBZ0I7SUFHekIsMEJBQVksSUFBVTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLEdBQVcsRUFBRSxHQUFXO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsR0FBRyxDQUFDLDJEQUEyRDtZQUM1RCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxPQUFPO1lBQ1AsZUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxNQUFNO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUFDLENBQUM7WUFDN0UsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FJUyxXQUFJO0dBSGIsZ0JBQWdCLENBeUI1QjtBQXpCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5cbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdlb2NvZGluZ1NlcnZpY2Uge1xuICAgIGh0dHA6IEh0dHA7XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgfVxuXG4gICAgZ2VvY29kZShsYXQ6IHN0cmluZywgbG5nOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZW9jb2RlXCIgKyBsYXQgKyBcIiBcIiArIGxuZyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5nZXQoXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2xhdGxuZz1cIiArXG4gICAgICAgICAgICAgICAgbGF0ICtcbiAgICAgICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICAgICAgbG5nICtcbiAgICAgICAgICAgICAgICBcIiZrZXk9XCIgK1xuICAgICAgICAgICAgICAgIENvbmZpZy5NYXAuQVBJX0tFWSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFwiT0tcIikgeyB0aHJvdyBuZXcgRXJyb3IoXCJ1bmFibGUgdG8gZ2VvY29kZSBhZGRyZXNzXCIpOyB9XG4gICAgICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSByZXN1bHQucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkcmVzcztcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxufSJdfQ==