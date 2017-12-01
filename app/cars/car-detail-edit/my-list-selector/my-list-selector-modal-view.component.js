"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var MyListSelectorModalViewComponent = (function () {
    function MyListSelectorModalViewComponent(_params) {
        this._params = _params;
        this._title = _params.context.title;
        this._selectedIndex = _params.context.selectedIndex;
        this._items = [];
        for (var i = 0; i < _params.context.items.length; i++) {
            this._items.push({
                value: _params.context.items[i],
                isSelected: i === this._selectedIndex ? true : false
            });
        }
    }
    MyListSelectorModalViewComponent.prototype.onItemSelected = function (args) {
        var oldSelectedItem = this._items[this._selectedIndex];
        oldSelectedItem.isSelected = false;
        var newSelectedItem = this._items[args.index];
        newSelectedItem.isSelected = true;
        this._selectedIndex = args.index;
        this._params.closeCallback(newSelectedItem.value);
    };
    MyListSelectorModalViewComponent.prototype.onCancelButtonTap = function () {
        this._params.closeCallback(null);
    };
    Object.defineProperty(MyListSelectorModalViewComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyListSelectorModalViewComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    return MyListSelectorModalViewComponent;
}());
MyListSelectorModalViewComponent = __decorate([
    core_1.Component({
        selector: "MyListSelectorModalView",
        moduleId: module.id,
        templateUrl: "./my-list-selector-modal-view.component.html",
        styleUrls: ["./my-list-selector-modal-view.component.css"]
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
], MyListSelectorModalViewComponent);
exports.MyListSelectorModalViewComponent = MyListSelectorModalViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGlzdC1zZWxlY3Rvci1tb2RhbC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWxpc3Qtc2VsZWN0b3ItbW9kYWwtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0VBQXNFO0FBUXRFLElBQWEsZ0NBQWdDO0lBS3pDLDBDQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDYixLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixVQUFVLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxHQUFHLEtBQUs7YUFDdkQsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFRCx5REFBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELGVBQWUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5DLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELGVBQWUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELDREQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQkFBSSxtREFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtREFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDTCx1Q0FBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksZ0NBQWdDO0lBTjVDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOENBQThDO1FBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO0tBQzdELENBQUM7cUNBTStCLGdDQUFpQjtHQUxyQyxnQ0FBZ0MsQ0F3QzVDO0FBeENZLDRFQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJNeUxpc3RTZWxlY3Rvck1vZGFsVmlld1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbXktbGlzdC1zZWxlY3Rvci1tb2RhbC12aWV3LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbXktbGlzdC1zZWxlY3Rvci1tb2RhbC12aWV3LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX2l0ZW1zOiBBcnJheTxhbnk+O1xyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBfcGFyYW1zLmNvbnRleHQudGl0bGU7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IF9wYXJhbXMuY29udGV4dC5zZWxlY3RlZEluZGV4O1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhcmFtcy5jb250ZXh0Lml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IF9wYXJhbXMuY29udGV4dC5pdGVtc1tpXSxcclxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGkgPT09IHRoaXMuX3NlbGVjdGVkSW5kZXggPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbVNlbGVjdGVkKGFyZ3MpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBvbGRTZWxlY3RlZEl0ZW0gPSB0aGlzLl9pdGVtc1t0aGlzLl9zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICBvbGRTZWxlY3RlZEl0ZW0uaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTZWxlY3RlZEl0ZW0gPSB0aGlzLl9pdGVtc1thcmdzLmluZGV4XTtcclxuICAgICAgICBuZXdTZWxlY3RlZEl0ZW0uaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGFyZ3MuaW5kZXg7XHJcblxyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKG5ld1NlbGVjdGVkSXRlbS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWxCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLmNsb3NlQ2FsbGJhY2sobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGl0ZW1zKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XHJcbiAgICB9XHJcbn1cclxuIl19