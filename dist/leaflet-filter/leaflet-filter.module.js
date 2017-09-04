import { NgModule } from '@angular/core';
import { LeafletFilterDirective } from './core/leaflet-filter.directive';
var LeafletFilterModule = /** @class */ (function () {
    function LeafletFilterModule() {
    }
    LeafletFilterModule.forRoot = function () {
        return { ngModule: LeafletFilterModule, providers: [] };
    };
    LeafletFilterModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        LeafletFilterDirective
                    ],
                    declarations: [
                        LeafletFilterDirective
                    ]
                },] },
    ];
    /** @nocollapse */
    LeafletFilterModule.ctorParameters = function () { return []; };
    return LeafletFilterModule;
}());
export { LeafletFilterModule };
//# sourceMappingURL=leaflet-filter.module.js.map