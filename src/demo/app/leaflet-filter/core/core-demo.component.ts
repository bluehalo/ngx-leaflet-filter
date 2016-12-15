import { Component } from '@angular/core';

import * as L from 'leaflet';

@Component({
	selector: 'leaflet-filter-core-demo',
	templateUrl: './core-demo.component.html'
})
export class LeafletFilterCoreDemoComponent {

	options = {
		layers: [
			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
		],
		zoom: 5,
		center: L.latLng({ lat: 46.879966, lng: -121.726909 })
	};

	featureGroup = L.featureGroup();

	filterOptions = {
		position: 'topright',
		filter: {
			circle: {},
			rectangle: {},
			polygon: {}
		}
	};

	filterState: any;

	constructor() {	}

	eventHandler = (msg: string, event: any) => {
		console.log({ msg: msg, event: event });
	};

}
