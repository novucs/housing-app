import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import * as fileSystem from "file-system";
import * as dialogs from "ui/dialogs";
import {DEFAULT_DATABASE} from "./databaseutils";

@Component({
    templateUrl: "./index.component.html"
})
export class IndexComponent {
    constructor(private routerExtensions: RouterExtensions) {
    }

    goEvaluate() {
        this.routerExtensions.navigate(["/evaluate"], {clearHistory: true});
    }

    populateSoldProperties() {
        dialogs.confirm("Are you sure you want to populate the database?").then(result => {
            if (result) {
                let soldFile = fileSystem.knownFolders.currentApp().getFile("sold.json");
                soldFile.writeText(JSON.stringify(DEFAULT_DATABASE)).then(() => {
                    alert("Successfully populated the sold properties database");
                });
            }
        });
    }

    deleteSoldProperties() {
        dialogs.confirm("Are you sure you want to delete the database?").then(result => {
            if (result) {
                let soldFile = fileSystem.knownFolders.currentApp().getFile("sold.json");
                soldFile.writeText("").then(() => {
                    alert("Successfully deleted the sold properties database");
                });
            }
        });
    }

    goCreate() {
        this.routerExtensions.navigate(["/create"], {clearHistory: true});
    }
}
