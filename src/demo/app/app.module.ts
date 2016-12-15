import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeafletFilterDemoModule } from './leaflet-filter/leaflet-filter-demo.module';


@NgModule({
	imports: [
		BrowserModule,
		LeafletFilterDemoModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ],
	providers: [ ]
})
export class AppModule { }
