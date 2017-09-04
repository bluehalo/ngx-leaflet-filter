import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as L from 'leaflet';
import '@asymmetrik/leaflet-filter';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';
var LeafletFilterDirective = /** @class */ (function () {
    function LeafletFilterDirective(leafletDirective) {
        // Constructor options for Filter Control
        this.filterOptions = null;
        // Event Emitter for filter state change events
        this.filterStateChange = new EventEmitter();
        // Event for when the filter control is created and ready
        this.controlReady = new EventEmitter();
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
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
        { type: Directive, args: [{
                    selector: '[leafletFilter]'
                },] },
    ];
    /** @nocollapse */
    LeafletFilterDirective.ctorParameters = function () { return [
        { type: LeafletDirective, },
    ]; };
    LeafletFilterDirective.propDecorators = {
        'filterOptions': [{ type: Input, args: ['leafletFilterOptions',] },],
        'filterState': [{ type: Input, args: ['leafletFilterState',] },],
        'filterStateChange': [{ type: Output, args: ['leafletFilterStateChange',] },],
        'controlReady': [{ type: Output, args: ['leafletFilterControlReady',] },],
    };
    return LeafletFilterDirective;
}());
export { LeafletFilterDirective };
//# sourceMappingURL=leaflet-filter.directive.js.map