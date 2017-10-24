import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppComponent} from "./app.component";
import {NativeScriptRouterModule} from "nativescript-angular";
import {AppRoutingModule, routes} from "./app.routing";
import {CreateComponent} from "./create.component";
import {EvaluateComponent} from "./evaluate.component";
import {IndexComponent} from "./index.component";

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        CreateComponent,
        EvaluateComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
