import { ModuleWithProviders, NgModule } from '@angular/core';

import { LeafletFilterDirective } from './core/leaflet-filter.directive';

@NgModule({
	exports: [
		LeafletFilterDirective
	],
	declarations: [
		LeafletFilterDirective
	]
})
export class LeafletFilterModule {

	static forRoot(): ModuleWithProviders {
		return { ngModule: LeafletFilterModule, providers: [] };
	}

}
