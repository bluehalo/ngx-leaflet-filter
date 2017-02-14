var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as L from 'leaflet';
import '@asymmetrik/leaflet-filter';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/angular2-leaflet';
var LeafletFilterDirective = (function () {
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
    return LeafletFilterDirective;
}());
__decorate([
    Input('leafletFilterOptions'),
    __metadata("design:type", Object)
], LeafletFilterDirective.prototype, "filterOptions", void 0);
__decorate([
    Input('leafletFilterState'),
    __metadata("design:type", Object)
], LeafletFilterDirective.prototype, "filterState", void 0);
__decorate([
    Output('leafletFilterStateChange'),
    __metadata("design:type", Object)
], LeafletFilterDirective.prototype, "filterStateChange", void 0);
__decorate([
    Output('leafletFilterControlReady'),
    __metadata("design:type", Object)
], LeafletFilterDirective.prototype, "controlReady", void 0);
LeafletFilterDirective = __decorate([
    Directive({
        selector: '[leafletFilter]'
    }),
    __metadata("design:paramtypes", [LeafletDirective])
], LeafletFilterDirective);
export { LeafletFilterDirective };

//# sourceMappingURL=leaflet-filter.directive.js.map
