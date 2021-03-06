"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var Rx_1 = require("rxjs/Rx");
var car_model_1 = require("./car.model");
var editableProperties = [
    "doors",
    "imageUrl",
    "luggage",
    "name",
    "price",
    "seats",
    "transmission",
    "class"
];
/* ***********************************************************
* This is the master detail data service. It handles all the data operations
* of retrieving and updating the data. In this case, it is connected to Firebase and
* is using the {N} Firebase plugin. Learn more about it here:
* https://github.com/EddyVerbruggen/nativescript-plugin-firebase
* The {N} Firebase plugin needs some initialization steps before the app starts.
* Check out how it is imported in the main.ts file and the actual script in /shared/firebase.common.ts file.
*************************************************************/
var CarService = CarService_1 = (function () {
    function CarService(_ngZone) {
        this._ngZone = _ngZone;
        this._cars = [];
    }
    CarService.cloneUpdateModel = function (car) {
        return editableProperties.reduce(function (a, e) { return (a[e] = car[e], a); }, {});
    };
    CarService.prototype.getCarById = function (id) {
        if (!id) {
            return;
        }
        return this._cars.filter(function (car) {
            return car.id === id;
        })[0];
    };
    CarService.prototype.load = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            var path = "cars";
            var onValueEvent = function (snapshot) {
                _this._ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).catch(this.handleErrors);
    };
    CarService.prototype.update = function (carModel) {
        var updateModel = CarService_1.cloneUpdateModel(carModel);
        return firebase.update("/cars/" + carModel.id, updateModel);
    };
    CarService.prototype.uploadImage = function (remoteFullPath, localFullPath) {
        return firebase.uploadFile({
            localFullPath: localFullPath,
            remoteFullPath: remoteFullPath,
            onProgress: null
        });
    };
    CarService.prototype.handleSnapshot = function (data) {
        this._cars = [];
        if (data) {
            for (var id in data) {
                if (data.hasOwnProperty(id)) {
                    this._cars.push(new car_model_1.Car(data[id]));
                }
            }
        }
        return this._cars;
    };
    CarService.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    return CarService;
}());
CarService = CarService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], CarService);
exports.CarService = CarService;
var CarService_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUVuRCx1REFBMEQ7QUFDMUQsOEJBQXFDO0FBR3JDLHlDQUFrQztBQUVsQyxJQUFNLGtCQUFrQixHQUFHO0lBQ3ZCLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULE1BQU07SUFDTixPQUFPO0lBQ1AsT0FBTztJQUNQLGNBQWM7SUFDZCxPQUFPO0NBQ1YsQ0FBQztBQUVGOzs7Ozs7OzhEQU84RDtBQUU5RCxJQUFhLFVBQVU7SUFPbkIsb0JBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRjNCLFVBQUssR0FBZSxFQUFFLENBQUM7SUFFUSxDQUFDO0lBTnpCLDJCQUFnQixHQUEvQixVQUFnQyxHQUFRO1FBQ3BDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFsQixDQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFNRCwrQkFBVSxHQUFWLFVBQVcsRUFBVTtRQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRztZQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQseUJBQUksR0FBSjtRQUFBLGlCQVlDO1FBWEcsTUFBTSxDQUFDLElBQUksZUFBVSxDQUFDLFVBQUMsUUFBYTtZQUNoQyxJQUFNLElBQUksR0FBRyxNQUFNLENBQUM7WUFFcEIsSUFBTSxZQUFZLEdBQUcsVUFBQyxRQUFhO2dCQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDYixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDcEQsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7WUFDRixRQUFRLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLE1BQUksSUFBTSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLFFBQWE7UUFDaEIsSUFBTSxXQUFXLEdBQUcsWUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFELE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksY0FBc0IsRUFBRSxhQUFxQjtRQUNyRCxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN2QixhQUFhLGVBQUE7WUFDYixjQUFjLGdCQUFBO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLG1DQUFjLEdBQXRCLFVBQXVCLElBQVM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNQLEdBQUcsQ0FBQyxDQUFDLElBQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU8saUNBQVksR0FBcEIsVUFBcUIsS0FBZTtRQUNoQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBaEVELElBZ0VDO0FBaEVZLFVBQVU7SUFEdEIsaUJBQVUsRUFBRTtxQ0FRb0IsYUFBTTtHQVAxQixVQUFVLENBZ0V0QjtBQWhFWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9jYXIubW9kZWxcIjtcclxuXHJcbmNvbnN0IGVkaXRhYmxlUHJvcGVydGllcyA9IFtcclxuICAgIFwiZG9vcnNcIixcclxuICAgIFwiaW1hZ2VVcmxcIixcclxuICAgIFwibHVnZ2FnZVwiLFxyXG4gICAgXCJuYW1lXCIsXHJcbiAgICBcInByaWNlXCIsXHJcbiAgICBcInNlYXRzXCIsXHJcbiAgICBcInRyYW5zbWlzc2lvblwiLFxyXG4gICAgXCJjbGFzc1wiXHJcbl07XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIFRoaXMgaXMgdGhlIG1hc3RlciBkZXRhaWwgZGF0YSBzZXJ2aWNlLiBJdCBoYW5kbGVzIGFsbCB0aGUgZGF0YSBvcGVyYXRpb25zXHJcbiogb2YgcmV0cmlldmluZyBhbmQgdXBkYXRpbmcgdGhlIGRhdGEuIEluIHRoaXMgY2FzZSwgaXQgaXMgY29ubmVjdGVkIHRvIEZpcmViYXNlIGFuZFxyXG4qIGlzIHVzaW5nIHRoZSB7Tn0gRmlyZWJhc2UgcGx1Z2luLiBMZWFybiBtb3JlIGFib3V0IGl0IGhlcmU6XHJcbiogaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcclxuKiBUaGUge059IEZpcmViYXNlIHBsdWdpbiBuZWVkcyBzb21lIGluaXRpYWxpemF0aW9uIHN0ZXBzIGJlZm9yZSB0aGUgYXBwIHN0YXJ0cy5cclxuKiBDaGVjayBvdXQgaG93IGl0IGlzIGltcG9ydGVkIGluIHRoZSBtYWluLnRzIGZpbGUgYW5kIHRoZSBhY3R1YWwgc2NyaXB0IGluIC9zaGFyZWQvZmlyZWJhc2UuY29tbW9uLnRzIGZpbGUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xvbmVVcGRhdGVNb2RlbChjYXI6IENhcik6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIGVkaXRhYmxlUHJvcGVydGllcy5yZWR1Y2UoKGEsIGUpID0+IChhW2VdID0gY2FyW2VdLCBhKSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhcnM6IEFycmF5PENhcj4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkgeyB9XHJcblxyXG4gICAgZ2V0Q2FyQnlJZChpZDogc3RyaW5nKTogQ2FyIHtcclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJzLmZpbHRlcigoY2FyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYXIuaWQgPT09IGlkO1xyXG4gICAgICAgIH0pWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IFwiY2Fyc1wiO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgICAgIH0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY2FyTW9kZWw6IENhcik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlTW9kZWwgPSBDYXJTZXJ2aWNlLmNsb25lVXBkYXRlTW9kZWwoY2FyTW9kZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UudXBkYXRlKFwiL2NhcnMvXCIgKyBjYXJNb2RlbC5pZCwgdXBkYXRlTW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEltYWdlKHJlbW90ZUZ1bGxQYXRoOiBzdHJpbmcsIGxvY2FsRnVsbFBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICBsb2NhbEZ1bGxQYXRoLFxyXG4gICAgICAgICAgICByZW1vdGVGdWxsUGF0aCxcclxuICAgICAgICAgICAgb25Qcm9ncmVzczogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU25hcHNob3QoZGF0YTogYW55KTogQXJyYXk8Q2FyPiB7XHJcbiAgICAgICAgdGhpcy5fY2FycyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhcnMucHVzaChuZXcgQ2FyKGRhdGFbaWRdKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==