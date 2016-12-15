"use strict";
var core_1 = require('@angular/core');
var L = require('leaflet');
var angular2_leaflet_1 = require('@asymmetrik/angular2-leaflet');
var LeafletFilterDirective = (function () {
    function LeafletFilterDirective(leafletDirective) {
        this.filterOptions = null;
        this.filterStateChange = new core_1.EventEmitter();
        this.leafletDirective = leafletDirective;
    }
    LeafletFilterDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.map = this.leafletDirective.getMap();
        // Initialize the draw options (in case they weren't provided)
        this.filterOptions = this.initializeFilterOptions(this.filterOptions);
        // Create the control
        this.filterControl = L.control.filter(this.filterOptions);
        // Pull out the feature group for convenience
        this.featureGroup = this.filterOptions.featureGroup;
        // Add the control to the map
        this.filterControl.addTo(this.map);
        // Register the main handler for events coming from the draw plugin
        this.map.on('filter:filter', function (e) {
            setTimeout(function () { _this.filterStateChange.emit(e.geo); });
        });
    };
    LeafletFilterDirective.prototype.ngOnChanges = function (changes) {
        // Set the filter state
        if (changes['filterState']) {
            this.filterControl.setFilter(changes['filterState'].currentValue);
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
            this.map.addLayer(options.featureGroup);
        }
        return options;
    };
    __decorate([
        core_1.Input('leafletFilterOptions'), 
        __metadata('design:type', Object)
    ], LeafletFilterDirective.prototype, "filterOptions", void 0);
    __decorate([
        core_1.Input('leafletFilterState'), 
        __metadata('design:type', Object)
    ], LeafletFilterDirective.prototype, "filterState", void 0);
    __decorate([
        core_1.Output('leafletFilterStateChange'), 
        __metadata('design:type', core_1.EventEmitter)
    ], LeafletFilterDirective.prototype, "filterStateChange", void 0);
    LeafletFilterDirective = __decorate([
        core_1.Directive({
            selector: '[leaflet-filter]'
        }), 
        __metadata('design:paramtypes', [angular2_leaflet_1.LeafletDirective])
    ], LeafletFilterDirective);
    return LeafletFilterDirective;
}());
exports.LeafletFilterDirective = LeafletFilterDirective;

//# sourceMappingURL=leaflet-filter.directive.js.map
