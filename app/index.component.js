"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var fileSystem = require("file-system");
var dialogs = require("ui/dialogs");
var databaseutils_1 = require("./databaseutils");
var IndexComponent = (function () {
    function IndexComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    IndexComponent.prototype.goEvaluate = function () {
        this.routerExtensions.navigate(["/evaluate"], { clearHistory: true });
    };
    IndexComponent.prototype.populateSoldProperties = function () {
        dialogs.confirm("Are you sure you want to populate the database?").then(function (result) {
            if (result) {
                var soldFile = fileSystem.knownFolders.currentApp().getFile("sold.json");
                soldFile.writeText(JSON.stringify(databaseutils_1.DEFAULT_DATABASE)).then(function () {
                    alert("Successfully populated the sold properties database");
                });
            }
        });
    };
    IndexComponent.prototype.deleteSoldProperties = function () {
        dialogs.confirm("Are you sure you want to delete the database?").then(function (result) {
            if (result) {
                var soldFile = fileSystem.knownFolders.currentApp().getFile("sold.json");
                soldFile.writeText("").then(function () {
                    alert("Successfully deleted the sold properties database");
                });
            }
        });
    };
    IndexComponent.prototype.goCreate = function () {
        this.routerExtensions.navigate(["/create"], { clearHistory: true });
    };
    IndexComponent = __decorate([
        core_1.Component({
            templateUrl: "./index.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5kZXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLDZEQUFzRDtBQUN0RCx3Q0FBMEM7QUFDMUMsb0NBQXNDO0FBQ3RDLGlEQUFpRDtBQUtqRDtJQUNJLHdCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCwrQ0FBc0IsR0FBdEI7UUFDSSxPQUFPLENBQUMsT0FBTyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUMxRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNULElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6RSxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0NBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDdEQsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7Z0JBQ2pFLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDZDQUFvQixHQUFwQjtRQUNJLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0NBQStDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ3hFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pFLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN4QixLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztnQkFDL0QsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFoQ1EsY0FBYztRQUgxQixnQkFBUyxDQUFDO1lBQ1AsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQUV3Qyx1Q0FBZ0I7T0FEN0MsY0FBYyxDQWlDMUI7SUFBRCxxQkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0ICogYXMgZmlsZVN5c3RlbSBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7REVGQVVMVF9EQVRBQkFTRX0gZnJvbSBcIi4vZGF0YWJhc2V1dGlsc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2luZGV4LmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSW5kZXhDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIH1cblxuICAgIGdvRXZhbHVhdGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvZXZhbHVhdGVcIl0sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZVNvbGRQcm9wZXJ0aWVzKCkge1xuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcG9wdWxhdGUgdGhlIGRhdGFiYXNlP1wiKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHNvbGRGaWxlID0gZmlsZVN5c3RlbS5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZpbGUoXCJzb2xkLmpzb25cIik7XG4gICAgICAgICAgICAgICAgc29sZEZpbGUud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KERFRkFVTFRfREFUQUJBU0UpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJTdWNjZXNzZnVsbHkgcG9wdWxhdGVkIHRoZSBzb2xkIHByb3BlcnRpZXMgZGF0YWJhc2VcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZVNvbGRQcm9wZXJ0aWVzKCkge1xuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBkYXRhYmFzZT9cIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGxldCBzb2xkRmlsZSA9IGZpbGVTeXN0ZW0ua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5nZXRGaWxlKFwic29sZC5qc29uXCIpO1xuICAgICAgICAgICAgICAgIHNvbGRGaWxlLndyaXRlVGV4dChcIlwiKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJTdWNjZXNzZnVsbHkgZGVsZXRlZCB0aGUgc29sZCBwcm9wZXJ0aWVzIGRhdGFiYXNlXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb0NyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jcmVhdGVcIl0sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICB9XG59XG4iXX0=