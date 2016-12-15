"use strict";
var core_1 = require('@angular/core');
var leaflet_filter_directive_1 = require('./core/leaflet-filter.directive');
var LeafletFilterModule = (function () {
    function LeafletFilterModule() {
    }
    LeafletFilterModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [
                leaflet_filter_directive_1.LeafletFilterDirective
            ],
            declarations: [
                leaflet_filter_directive_1.LeafletFilterDirective
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], LeafletFilterModule);
    return LeafletFilterModule;
}());
exports.LeafletFilterModule = LeafletFilterModule;

//# sourceMappingURL=leaflet-filter.module.js.map
