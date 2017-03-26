import { NgModule } from '@angular/core';
import { LeafletFilterDirective } from './core/leaflet-filter.directive';
var LeafletFilterModule = (function () {
    function LeafletFilterModule() {
    }
    LeafletFilterModule.forRoot = function () {
        return { ngModule: LeafletFilterModule, providers: [] };
    };
    return LeafletFilterModule;
}());
export { LeafletFilterModule };
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
//# sourceMappingURL=leaflet-filter.module.js.map