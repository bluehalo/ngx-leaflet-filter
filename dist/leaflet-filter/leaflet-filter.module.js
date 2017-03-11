var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { LeafletFilterDirective } from './core/leaflet-filter.directive';
var LeafletFilterModule = LeafletFilterModule_1 = (function () {
    function LeafletFilterModule() {
    }
    LeafletFilterModule.forRoot = function () {
        return { ngModule: LeafletFilterModule_1, providers: [] };
    };
    return LeafletFilterModule;
}());
LeafletFilterModule = LeafletFilterModule_1 = __decorate([
    NgModule({
        exports: [
            LeafletFilterDirective
        ],
        declarations: [
            LeafletFilterDirective
        ]
    })
], LeafletFilterModule);
export { LeafletFilterModule };
var LeafletFilterModule_1;
//# sourceMappingURL=leaflet-filter.module.js.map