/*! @asymmetrik/ngx-leaflet-filter - 2.4.0 - Copyright Asymmetrik, Ltd. 2007-2017 - All Rights Reserved. + */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@angular/core"),require("leaflet"),require("@asymmetrik/leaflet-filter"),require("@asymmetrik/ngx-leaflet")):"function"==typeof define&&define.amd?define(["exports","@angular/core","leaflet","@asymmetrik/leaflet-filter","@asymmetrik/ngx-leaflet"],e):e(t.ngxLeafletFilter={},t.ng.core,t.L,null,t.ngxLeaflet)}(this,function(t,e,r,i,l){"use strict";var n=/** @class */function(){function t(t){
// Constructor options for Filter Control
this.filterOptions=null,
// Event Emitter for filter state change events
this.filterStateChange=new e.EventEmitter,
// Event for when the filter control is created and ready
this.controlReady=new e.EventEmitter,this.leafletDirective=new l.LeafletDirectiveWrapper(t)}/** @nocollapse */
return t.prototype.ngOnInit=function(){var t=this;this.leafletDirective.init(),
// Initialize the draw options (in case they weren't provided)
this.filterOptions=this.initializeFilterOptions(this.filterOptions),
// Create the control
this.filterControl=r.control.filter(this.filterOptions),
// Pull out the feature group for convenience
this.featureGroup=this.filterOptions.featureGroup,
// Add the control to the map
this.filterControl.addTo(this.leafletDirective.getMap()),
// Register the main handler for events coming from the draw plugin
this.leafletDirective.getMap().on("filter:filter",function(e){setTimeout(function(){t.filterStateChange.emit(e.geo)})}),
// Set the initial filter state
this.filterControl.setFilter(this.filterState),
// Fire control ready event
this.controlReady.emit(this.filterControl)},t.prototype.ngOnChanges=function(t){
// Set the filter state
t.filterState&&null!=this.filterControl&&this.filterControl.setFilter(t.filterState.currentValue)},t.prototype.initializeFilterOptions=function(t){
// Ensure the options have a featureGroup
// No feature group was provided, so we're going to add it ourselves
return null==t&&(t={featureGroup:null}),null==t.featureGroup&&(t.featureGroup=r.featureGroup(),this.leafletDirective.getMap().addLayer(t.featureGroup)),t},t.decorators=[{type:e.Directive,args:[{selector:"[leafletFilter]"}]}],t.ctorParameters=function(){return[{type:l.LeafletDirective}]},t.propDecorators={filterOptions:[{type:e.Input,args:["leafletFilterOptions"]}],filterState:[{type:e.Input,args:["leafletFilterState"]}],filterStateChange:[{type:e.Output,args:["leafletFilterStateChange"]}],controlReady:[{type:e.Output,args:["leafletFilterControlReady"]}]},t}(),o=/** @class */function(){function t(){}/** @nocollapse */
return t.forRoot=function(){return{ngModule:t,providers:[]}},t.decorators=[{type:e.NgModule,args:[{exports:[n],declarations:[n]}]}],t.ctorParameters=function(){return[]},t}();t.LeafletFilterModule=o,Object.defineProperty(t,"__esModule",{value:!0})});