"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var car_detail_edit_component_1 = require("./car-detail-edit/car-detail-edit.component");
var my_image_add_remove_component_1 = require("./car-detail-edit/my-image-add-remove/my-image-add-remove.component");
var my_list_selector_modal_view_component_1 = require("./car-detail-edit/my-list-selector/my-list-selector-modal-view.component"); // tslint:disable-line:max-line-length
var my_list_selector_component_1 = require("./car-detail-edit/my-list-selector/my-list-selector.component");
var car_detail_component_1 = require("./car-detail/car-detail.component");
var car_list_component_1 = require("./car-list.component");
var cars_routing_module_1 = require("./cars-routing.module");
var car_edit_service_1 = require("./shared/car-edit.service");
var car_service_1 = require("./shared/car.service");
var CarsModule = (function () {
    function CarsModule() {
    }
    return CarsModule;
}());
CarsModule = __decorate([
    core_1.NgModule({
        imports: [
            cars_routing_module_1.CarsRoutingModule,
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            angular_1.NativeScriptUIListViewModule
        ],
        declarations: [
            car_list_component_1.CarListComponent,
            car_detail_component_1.CarDetailComponent,
            car_detail_edit_component_1.CarDetailEditComponent,
            my_list_selector_component_1.MyListSelectorComponent,
            my_list_selector_modal_view_component_1.MyListSelectorModalViewComponent,
            my_image_add_remove_component_1.MyImageAddRemoveComponent
        ],
        entryComponents: [
            my_list_selector_modal_view_component_1.MyListSelectorModalViewComponent
        ],
        providers: [
            car_service_1.CarService,
            car_edit_service_1.CarEditService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], CarsModule);
exports.CarsModule = CarsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLG9FQUF3RjtBQUV4Rix5RkFBcUY7QUFDckYscUhBQWdIO0FBQ2hILGtJQUE0SCxDQUFDLHNDQUFzQztBQUNuSyw0R0FBd0c7QUFDeEcsMEVBQXVFO0FBQ3ZFLDJEQUF3RDtBQUN4RCw2REFBMEQ7QUFDMUQsOERBQTJEO0FBQzNELG9EQUFrRDtBQTRCbEQsSUFBYSxVQUFVO0lBQXZCO0lBQTBCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFBM0IsSUFBMkI7QUFBZCxVQUFVO0lBMUJ0QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCx1Q0FBaUI7WUFDakIsd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2QixzQ0FBNEI7U0FDL0I7UUFDRCxZQUFZLEVBQUU7WUFDVixxQ0FBZ0I7WUFDaEIseUNBQWtCO1lBQ2xCLGtEQUFzQjtZQUN0QixvREFBdUI7WUFDdkIsd0VBQWdDO1lBQ2hDLHlEQUF5QjtTQUM1QjtRQUNELGVBQWUsRUFBRTtZQUNiLHdFQUFnQztTQUNuQztRQUNELFNBQVMsRUFBRTtZQUNQLHdCQUFVO1lBQ1YsaUNBQWM7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5cclxuaW1wb3J0IHsgQ2FyRGV0YWlsRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2Nhci1kZXRhaWwtZWRpdC9jYXItZGV0YWlsLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE15SW1hZ2VBZGRSZW1vdmVDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItZGV0YWlsLWVkaXQvbXktaW1hZ2UtYWRkLXJlbW92ZS9teS1pbWFnZS1hZGQtcmVtb3ZlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNeUxpc3RTZWxlY3Rvck1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2Nhci1kZXRhaWwtZWRpdC9teS1saXN0LXNlbGVjdG9yL215LWxpc3Qtc2VsZWN0b3ItbW9kYWwtdmlldy5jb21wb25lbnRcIjsgLy8gdHNsaW50OmRpc2FibGUtbGluZTptYXgtbGluZS1sZW5ndGhcclxuaW1wb3J0IHsgTXlMaXN0U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItZGV0YWlsLWVkaXQvbXktbGlzdC1zZWxlY3Rvci9teS1saXN0LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDYXJEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItZGV0YWlsL2Nhci1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhckxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2Fyc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jYXJzLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IENhckVkaXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2Nhci1lZGl0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9jYXIuc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDYXJzUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIENhckxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgQ2FyRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIENhckRldGFpbEVkaXRDb21wb25lbnQsXHJcbiAgICAgICAgTXlMaXN0U2VsZWN0b3JDb21wb25lbnQsXHJcbiAgICAgICAgTXlMaXN0U2VsZWN0b3JNb2RhbFZpZXdDb21wb25lbnQsXHJcbiAgICAgICAgTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIE15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ2FyU2VydmljZSxcclxuICAgICAgICBDYXJFZGl0U2VydmljZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJzTW9kdWxlIHsgfVxyXG4iXX0=