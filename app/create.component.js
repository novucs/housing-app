"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var geolocation = require("nativescript-geolocation");
var nativescript_angular_1 = require("nativescript-angular");
var fileSystem = require("file-system");
var CreateComponent = (function () {
    function CreateComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.property = {
            location: undefined,
            detached: false,
            size: undefined,
            rooms: undefined,
            bedrooms: undefined,
            energyRating: undefined,
            garage: false,
            salePrice: undefined,
            saleDate: new Date()
        };
    }
    CreateComponent.prototype.back = function () {
        this.routerExtensions.navigate(["/index"], { clearHistory: true });
    };
    CreateComponent.prototype.parse = function (text) {
        return parseInt(text);
    };
    CreateComponent.prototype.submit = function () {
        var _this = this;
        if (!this.property.size ||
            !this.property.rooms ||
            !this.property.bedrooms ||
            !this.property.energyRating ||
            !this.property.salePrice) {
            alert("You have not filled in all required fields!");
            return;
        }
        while (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest(true);
        }
        var soldFile = fileSystem.knownFolders.currentApp().getFile("sold.json");
        geolocation.getCurrentLocation({}).then(function (location) {
            _this.property.location = location;
            return soldFile.readText();
        }).then(function (content) {
            var soldProperties = [];
            if (content) {
                soldProperties = JSON.parse(content);
            }
            soldProperties.push(_this.property);
            return soldFile.writeText(JSON.stringify(soldProperties));
        }).then(function () {
            return _this.routerExtensions.navigate(["/index"], { clearHistory: true });
        }).then(function () {
            alert("Successfully created new house sale record");
        });
    };
    CreateComponent = __decorate([
        core_1.Component({
            templateUrl: "./create.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFFeEMsc0RBQXdEO0FBQ3hELDZEQUFzRDtBQUN0RCx3Q0FBMEM7QUFLMUM7SUFjSSx5QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFadEQsYUFBUSxHQUFpQjtZQUNyQixRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsS0FBSztZQUNmLElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsTUFBTSxFQUFFLEtBQUs7WUFDYixTQUFTLEVBQUUsU0FBUztZQUNwQixRQUFRLEVBQUUsSUFBSSxJQUFJLEVBQUU7U0FDdkIsQ0FBQztJQUdGLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELCtCQUFLLEdBQUwsVUFBTSxJQUFJO1FBQ04sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUFBLGlCQWlDQztRQWhDRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUNuQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztZQUNwQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtZQUN2QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWTtZQUMzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMzQixLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQzlCLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekUsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDNUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUNYLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztZQUV4QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFFRCxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTFEUSxlQUFlO1FBSDNCLGdCQUFTLENBQUM7WUFDUCxXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7eUNBZXdDLHVDQUFnQjtPQWQ3QyxlQUFlLENBMkQzQjtJQUFELHNCQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U29sZFByb3BlcnR5fSBmcm9tIFwiLi9wcm9wZXJ0eVwiO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCAqIGFzIGZpbGVTeXN0ZW0gZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29tcG9uZW50IHtcblxuICAgIHByb3BlcnR5OiBTb2xkUHJvcGVydHkgPSB7XG4gICAgICAgIGxvY2F0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGRldGFjaGVkOiBmYWxzZSxcbiAgICAgICAgc2l6ZTogdW5kZWZpbmVkLFxuICAgICAgICByb29tczogdW5kZWZpbmVkLFxuICAgICAgICBiZWRyb29tczogdW5kZWZpbmVkLFxuICAgICAgICBlbmVyZ3lSYXRpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgZ2FyYWdlOiBmYWxzZSxcbiAgICAgICAgc2FsZVByaWNlOiB1bmRlZmluZWQsXG4gICAgICAgIHNhbGVEYXRlOiBuZXcgRGF0ZSgpXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIH1cblxuICAgIGJhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaW5kZXhcIl0sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICB9XG5cbiAgICBwYXJzZSh0ZXh0KSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0ZXh0KTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wZXJ0eS5zaXplIHx8XG4gICAgICAgICAgICAhdGhpcy5wcm9wZXJ0eS5yb29tcyB8fFxuICAgICAgICAgICAgIXRoaXMucHJvcGVydHkuYmVkcm9vbXMgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BlcnR5LmVuZXJneVJhdGluZyB8fFxuICAgICAgICAgICAgIXRoaXMucHJvcGVydHkuc2FsZVByaWNlKSB7XG4gICAgICAgICAgICBhbGVydChcIllvdSBoYXZlIG5vdCBmaWxsZWQgaW4gYWxsIHJlcXVpcmVkIGZpZWxkcyFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoIWdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc29sZEZpbGUgPSBmaWxlU3lzdGVtLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCkuZ2V0RmlsZShcInNvbGQuanNvblwiKTtcblxuICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oe30pLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eS5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHNvbGRGaWxlLnJlYWRUZXh0KCk7XG4gICAgICAgIH0pLnRoZW4oY29udGVudCA9PiB7XG4gICAgICAgICAgICBsZXQgc29sZFByb3BlcnRpZXMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBzb2xkUHJvcGVydGllcyA9IEpTT04ucGFyc2UoY29udGVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNvbGRQcm9wZXJ0aWVzLnB1c2godGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICByZXR1cm4gc29sZEZpbGUud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KHNvbGRQcm9wZXJ0aWVzKSk7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaW5kZXhcIl0sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIlN1Y2Nlc3NmdWxseSBjcmVhdGVkIG5ldyBob3VzZSBzYWxlIHJlY29yZFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19