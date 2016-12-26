import { Component } from '@angular/core';

@Component({
	selector: 'leafletFilterDemo',
	templateUrl: './leaflet-filter-demo.component.html'
})
export class LeafletFilterDemoComponent {
	showDemo = false;

	ngOnInit() {

		// Primarily for debugging
		setTimeout(() => {
			this.showDemo = true;
		}, 1000);

	}
}
