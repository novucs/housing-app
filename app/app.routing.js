"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var create_component_1 = require("./create.component");
var index_component_1 = require("./index.component");
var evaluate_component_1 = require("./evaluate.component");
exports.routes = [
    { path: "", redirectTo: "/index", pathMatch: "full" },
    { path: "index", component: index_component_1.IndexComponent },
    { path: "create", component: create_component_1.CreateComponent },
    { path: "evaluate", component: evaluate_component_1.EvaluateComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(exports.routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1QztBQUN2QyxzREFBcUU7QUFFckUsdURBQW1EO0FBQ25ELHFEQUFpRDtBQUNqRCwyREFBdUQ7QUFFMUMsUUFBQSxNQUFNLEdBQVc7SUFDMUIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztJQUNuRCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7SUFDMUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO0lBQzVDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7Q0FDbkQsQ0FBQztBQU1GO0lBQUE7SUFDQSxDQUFDO0lBRFksZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxjQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0NyZWF0ZUNvbXBvbmVudH0gZnJvbSBcIi4vY3JlYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtJbmRleENvbXBvbmVudH0gZnJvbSBcIi4vaW5kZXguY29tcG9uZW50XCI7XG5pbXBvcnQge0V2YWx1YXRlQ29tcG9uZW50fSBmcm9tIFwiLi9ldmFsdWF0ZS5jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9pbmRleFwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwifSxcbiAgICB7cGF0aDogXCJpbmRleFwiLCBjb21wb25lbnQ6IEluZGV4Q29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJjcmVhdGVcIiwgY29tcG9uZW50OiBDcmVhdGVDb21wb25lbnR9LFxuICAgIHtwYXRoOiBcImV2YWx1YXRlXCIsIGNvbXBvbmVudDogRXZhbHVhdGVDb21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==