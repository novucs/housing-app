import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";
import {CreateComponent} from "./create.component";
import {IndexComponent} from "./index.component";
import {EvaluateComponent} from "./evaluate.component";

export const routes: Routes = [
    {path: "", redirectTo: "/index", pathMatch: "full"},
    {path: "index", component: IndexComponent},
    {path: "create", component: CreateComponent},
    {path: "evaluate", component: EvaluateComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
