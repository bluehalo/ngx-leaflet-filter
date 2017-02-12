/*! @asymmetrik/angular2-leaflet-filter-1.1 - Copyright Asymmetrik, Ltd. 2007-2017 - All Rights Reserved.*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('leaflet'), require('@asymmetrik/leaflet-filter'), require('@asymmetrik/angular2-leaflet')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'leaflet', '@asymmetrik/leaflet-filter', '@asymmetrik/angular2-leaflet'], factory) :
	(factory((global.angular2LeafletFilter = global.angular2LeafletFilter || {}),global.ng.core,global.L,null,global.angular2Leaflet));
}(this, (function (exports,_angular_core,L,_asymmetrik_leafletFilter,_asymmetrik_angular2Leaflet) { 'use strict';

var LeafletFilterDirective = (function () {
    function LeafletFilterDirective(leafletDirective) {
        // Constructor options for Filter Control
        this.filterOptions = null;
        // Event Emitter for filter state change events
        this.filterStateChange = new _angular_core.EventEmitter();
        // Event for when the filter control is created and ready
        this.controlReady = new _angular_core.EventEmitter();
        this.leafletDirective = new _asymmetrik_angular2Leaflet.LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletFilterDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.leafletDirective.init();
        // Initialize the draw options (in case they weren't provided)
        this.filterOptions = this.initializeFilterOptions(this.filterOptions);
        // Create the control
        this.filterControl = L.control.filter(this.filterOptions);
        // Pull out the feature group for convenience
        this.featureGroup = this.filterOptions.featureGroup;
        // Add the control to the map
        this.filterControl.addTo(this.leafletDirective.getMap());
        // Register the main handler for events coming from the draw plugin
        this.leafletDirective.getMap().on('filter:filter', function (e) {
            setTimeout(function () { _this.filterStateChange.emit(e.geo); });
        });
        // Set the initial filter state
        this.filterControl.setFilter(this.filterState);
        // Fire control ready event
        this.controlReady.emit(this.filterControl);
    };
    LeafletFilterDirective.prototype.ngOnChanges = function (changes) {
        // Set the filter state
        if (changes['filterState']) {
            // Only want to set the filter if the control exists
            if (null != this.filterControl) {
                this.filterControl.setFilter(changes['filterState'].currentValue);
            }
        }
    };
    LeafletFilterDirective.prototype.initializeFilterOptions = function (options) {
        // Ensure the options have a featureGroup
        if (null == options) {
            options = {
                featureGroup: null
            };
        }
        if (null == options.featureGroup) {
            // No feature group was provided, so we're going to add it ourselves
            options.featureGroup = L.featureGroup();
            this.leafletDirective.getMap().addLayer(options.featureGroup);
        }
        return options;
    };
    return LeafletFilterDirective;
}());
__decorate([
    _angular_core.Input('leafletFilterOptions'),
    __metadata("design:type", Object)
], LeafletFilterDirective.prototype, "filterOptions", void 0);
__decorate([
    _angular_core.Input('leafletFilterState'),
    __metadata("design:type", Object)
], LeafletFilterDirective.prototype, "filterState", void 0);
__decorate([
    _angular_core.Output('leafletFilterStateChange'),
    __metadata("design:type", Object)
], LeafletFilterDirective.prototype, "filterStateChange", void 0);
__decorate([
    _angular_core.Output('leafletFilterControlReady'),
    __metadata("design:type", Object)
], LeafletFilterDirective.prototype, "controlReady", void 0);
LeafletFilterDirective = __decorate([
    _angular_core.Directive({
        selector: '[leafletFilter]'
    }),
    __metadata("design:paramtypes", [_asymmetrik_angular2Leaflet.LeafletDirective])
], LeafletFilterDirective);

exports.LeafletFilterModule = (function () {
    function LeafletFilterModule() {
    }
    return LeafletFilterModule;
}());
exports.LeafletFilterModule = __decorate([
    _angular_core.NgModule({
        imports: [],
        exports: [
            LeafletFilterDirective
        ],
        declarations: [
            LeafletFilterDirective
        ],
        providers: []
    })
], exports.LeafletFilterModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular2-leaflet-filter.js.map
