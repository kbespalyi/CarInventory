"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var imagePicker = require("nativescript-imagepicker");
/* ***********************************************************
* The MyImageAddRemove custom component uses an imagepicker plugin to let the user select
* an image and provides custom logic and design to the process.
*************************************************************/
var MyImageAddRemoveComponent = (function () {
    function MyImageAddRemoveComponent() {
        this.imageUrl = "";
        this.imageUrlChange = new core_1.EventEmitter();
    }
    MyImageAddRemoveComponent.prototype.onImageAddRemoveTap = function () {
        var _this = this;
        if (this.imageUrl) {
            this.handleImageChange(null);
            return;
        }
        var context = imagePicker.create({
            mode: "single"
        });
        context
            .authorize()
            .then(function () { return context.present(); })
            .then(function (selection) { return selection.forEach(function (selectedImage) { return _this.handleImageChange(selectedImage.fileUri); }); }).catch(function (errorMessage) { return console.log(errorMessage); });
    };
    MyImageAddRemoveComponent.prototype.handleImageChange = function (newValue) {
        var oldValue = this.imageUrl;
        if (newValue) {
            // iOS simulator fileUri looks like file:///Users/...
            newValue = newValue.replace("file://", "");
        }
        if (oldValue === newValue) {
            return;
        }
        this.imageUrl = newValue;
        this.imageUrlChange.emit(this.imageUrl);
    };
    return MyImageAddRemoveComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyImageAddRemoveComponent.prototype, "imageUrl", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MyImageAddRemoveComponent.prototype, "imageUrlChange", void 0);
MyImageAddRemoveComponent = __decorate([
    core_1.Component({
        selector: "MyImageAddRemove",
        moduleId: module.id,
        templateUrl: "./my-image-add-remove.component.html",
        styleUrls: ["./my-image-add-remove.component.css"]
    })
], MyImageAddRemoveComponent);
exports.MyImageAddRemoveComponent = MyImageAddRemoveComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaW1hZ2UtYWRkLXJlbW92ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS1pbWFnZS1hZGQtcmVtb3ZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUN2RSxzREFBd0Q7QUFFeEQ7Ozs4REFHOEQ7QUFPOUQsSUFBYSx5QkFBeUI7SUFOdEM7UUFPYSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFvQzFELENBQUM7SUFsQ0csdURBQW1CLEdBQW5CO1FBQUEsaUJBaUJDO1FBaEJHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU3QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLEVBQUUsUUFBUTtTQUNqQixDQUFDLENBQUM7UUFFSCxPQUFPO2FBQ0YsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsU0FBUyxDQUFDLE9BQU8sQ0FDbEMsVUFBQyxhQUFhLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLEVBRGhELENBQ2dELENBQ3BFLENBQUMsS0FBSyxDQUFDLFVBQUMsWUFBaUIsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQscURBQWlCLEdBQWpCLFVBQWtCLFFBQVE7UUFDdEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUUvQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gscURBQXFEO1lBQ3JELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDO0FBckNZO0lBQVIsWUFBSyxFQUFFOzsyREFBdUI7QUFDckI7SUFBVCxhQUFNLEVBQUU7O2lFQUE2QztBQUY3Qyx5QkFBeUI7SUFOckMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxzQ0FBc0M7UUFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7S0FDckQsQ0FBQztHQUNXLHlCQUF5QixDQXNDckM7QUF0Q1ksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIFRoZSBNeUltYWdlQWRkUmVtb3ZlIGN1c3RvbSBjb21wb25lbnQgdXNlcyBhbiBpbWFnZXBpY2tlciBwbHVnaW4gdG8gbGV0IHRoZSB1c2VyIHNlbGVjdFxyXG4qIGFuIGltYWdlIGFuZCBwcm92aWRlcyBjdXN0b20gbG9naWMgYW5kIGRlc2lnbiB0byB0aGUgcHJvY2Vzcy5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJNeUltYWdlQWRkUmVtb3ZlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9teS1pbWFnZS1hZGQtcmVtb3ZlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbXktaW1hZ2UtYWRkLXJlbW92ZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGltYWdlVXJsOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQE91dHB1dCgpIGltYWdlVXJsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgb25JbWFnZUFkZFJlbW92ZVRhcCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZVVybCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUltYWdlQ2hhbmdlKG51bGwpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGltYWdlUGlja2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIG1vZGU6IFwic2luZ2xlXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29udGV4dFxyXG4gICAgICAgICAgICAuYXV0aG9yaXplKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29udGV4dC5wcmVzZW50KCkpXHJcbiAgICAgICAgICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHNlbGVjdGlvbi5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKHNlbGVjdGVkSW1hZ2UpID0+IHRoaXMuaGFuZGxlSW1hZ2VDaGFuZ2Uoc2VsZWN0ZWRJbWFnZS5maWxlVXJpKSlcclxuICAgICAgICAgICAgKS5jYXRjaCgoZXJyb3JNZXNzYWdlOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUltYWdlQ2hhbmdlKG5ld1ZhbHVlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLmltYWdlVXJsO1xyXG5cclxuICAgICAgICBpZiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgLy8gaU9TIHNpbXVsYXRvciBmaWxlVXJpIGxvb2tzIGxpa2UgZmlsZTovLy9Vc2Vycy8uLi5cclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZS5yZXBsYWNlKFwiZmlsZTovL1wiLCBcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VVcmxDaGFuZ2UuZW1pdCh0aGlzLmltYWdlVXJsKTtcclxuICAgIH1cclxufVxyXG4iXX0=