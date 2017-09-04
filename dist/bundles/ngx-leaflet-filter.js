/*! @asymmetrik/ngx-leaflet-filter - 2.4.0 - Copyright Asymmetrik, Ltd. 2007-2017 - All Rights Reserved. + */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('leaflet'), require('@asymmetrik/leaflet-filter'), require('@asymmetrik/ngx-leaflet')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'leaflet', '@asymmetrik/leaflet-filter', '@asymmetrik/ngx-leaflet'], factory) :
	(factory((global.ngxLeafletFilter = {}),global.ng.core,global.L,null,global.ngxLeaflet));
}(this, (function (exports,core,L,leafletFilter,ngxLeaflet) { 'use strict';

var LeafletFilterDirective = /** @class */ (function () {
    function LeafletFilterDirective(leafletDirective) {
        // Constructor options for Filter Control
        this.filterOptions = null;
        // Event Emitter for filter state change events
        this.filterStateChange = new core.EventEmitter();
        // Event for when the filter control is created and ready
        this.controlReady = new core.EventEmitter();
        this.leafletDirective = new ngxLeaflet.LeafletDirectiveWrapper(leafletDirective);
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
    LeafletFilterDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[leafletFilter]'
                },] },
    ];
    /** @nocollapse */
    LeafletFilterDirective.ctorParameters = function () { return [
        { type: ngxLeaflet.LeafletDirective, },
    ]; };
    LeafletFilterDirective.propDecorators = {
        'filterOptions': [{ type: core.Input, args: ['leafletFilterOptions',] },],
        'filterState': [{ type: core.Input, args: ['leafletFilterState',] },],
        'filterStateChange': [{ type: core.Output, args: ['leafletFilterStateChange',] },],
        'controlReady': [{ type: core.Output, args: ['leafletFilterControlReady',] },],
    };
    return LeafletFilterDirective;
}());

var LeafletFilterModule = /** @class */ (function () {
    function LeafletFilterModule() {
    }
    LeafletFilterModule.forRoot = function () {
        return { ngModule: LeafletFilterModule, providers: [] };
    };
    LeafletFilterModule.decorators = [
        { type: core.NgModule, args: [{
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

exports.LeafletFilterModule = LeafletFilterModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-leaflet-filter.js.map
