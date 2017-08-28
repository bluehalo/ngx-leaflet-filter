import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { LeafletFilterModule } from '../../../leaflet-filter/leaflet-filter.module';

import { LeafletFilterDemoComponent } from './leaflet-filter-demo.component';
import { LeafletFilterCoreDemoComponent } from './core/core-demo.component';
import { LeafletFilterProgrammaticDemoComponent } from './programmatic/programmatic-demo.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,

		LeafletModule,
		LeafletFilterModule
	],
	declarations: [
		LeafletFilterDemoComponent,
		LeafletFilterCoreDemoComponent,
		LeafletFilterProgrammaticDemoComponent
	],
	exports: [
		LeafletFilterDemoComponent
	],
	bootstrap: [ LeafletFilterDemoComponent ],
	providers: [ ]
})
export class LeafletFilterDemoModule { }
