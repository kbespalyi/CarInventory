"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var car_model_1 = require("./car.model");
var car_service_1 = require("./car.service");
var CarEditService = (function () {
    function CarEditService(_carService) {
        this._carService = _carService;
    }
    CarEditService.prototype.startEdit = function (id) {
        this._editModel = null;
        return this.getEditableCarById(id);
    };
    CarEditService.prototype.getEditableCarById = function (id) {
        if (!this._editModel || this._editModel.id !== id) {
            var car = this._carService.getCarById(id);
            // get fresh editable copy of car model
            this._editModel = new car_model_1.Car(car);
        }
        return this._editModel;
    };
    return CarEditService;
}());
CarEditService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [car_service_1.CarService])
], CarEditService);
exports.CarEditService = CarEditService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWVkaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci1lZGl0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseUNBQWtDO0FBQ2xDLDZDQUEyQztBQUczQyxJQUFhLGNBQWM7SUFHdkIsd0JBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBQUcsQ0FBQztJQUUvQyxrQ0FBUyxHQUFULFVBQVUsRUFBVTtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEIsVUFBbUIsRUFBVTtRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU1Qyx1Q0FBdUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGVBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBSXdCLHdCQUFVO0dBSGxDLGNBQWMsQ0FxQjFCO0FBckJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9jYXIubW9kZWxcIjtcclxuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuL2Nhci5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXJFZGl0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9lZGl0TW9kZWw6IENhcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jYXJTZXJ2aWNlOiBDYXJTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHN0YXJ0RWRpdChpZDogc3RyaW5nKTogQ2FyIHtcclxuICAgICAgICB0aGlzLl9lZGl0TW9kZWwgPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFZGl0YWJsZUNhckJ5SWQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVkaXRhYmxlQ2FyQnlJZChpZDogc3RyaW5nKTogQ2FyIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2VkaXRNb2RlbCB8fCB0aGlzLl9lZGl0TW9kZWwuaWQgIT09IGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhciA9IHRoaXMuX2NhclNlcnZpY2UuZ2V0Q2FyQnlJZChpZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgZnJlc2ggZWRpdGFibGUgY29weSBvZiBjYXIgbW9kZWxcclxuICAgICAgICAgICAgdGhpcy5fZWRpdE1vZGVsID0gbmV3IENhcihjYXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VkaXRNb2RlbDtcclxuICAgIH1cclxufVxyXG4iXX0=