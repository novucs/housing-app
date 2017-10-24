"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var nativescript_angular_1 = require("nativescript-angular");
var app_routing_1 = require("./app.routing");
var create_component_1 = require("./create.component");
var evaluate_component_1 = require("./evaluate.component");
var index_component_1 = require("./index.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                index_component_1.IndexComponent,
                create_component_1.CreateComponent,
                evaluate_component_1.EvaluateComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                nativescript_angular_1.NativeScriptRouterModule,
                nativescript_angular_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBRTVFLGlEQUE2QztBQUM3Qyw2REFBOEQ7QUFDOUQsNkNBQXVEO0FBQ3ZELHVEQUFtRDtBQUNuRCwyREFBdUQ7QUFDdkQscURBQWlEO0FBa0JqRDtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUFoQnJCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCxrQ0FBZTtnQkFDZixzQ0FBaUI7YUFDcEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsK0NBQXdCO2dCQUN4QiwrQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQzthQUMzQztZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7QXBwUm91dGluZ01vZHVsZSwgcm91dGVzfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHtDcmVhdGVDb21wb25lbnR9IGZyb20gXCIuL2NyZWF0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7RXZhbHVhdGVDb21wb25lbnR9IGZyb20gXCIuL2V2YWx1YXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtJbmRleENvbXBvbmVudH0gZnJvbSBcIi4vaW5kZXguY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSW5kZXhDb21wb25lbnQsXG4gICAgICAgIENyZWF0ZUNvbXBvbmVudCxcbiAgICAgICAgRXZhbHVhdGVDb21wb25lbnRcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICAgIF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19