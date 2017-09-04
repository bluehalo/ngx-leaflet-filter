import { Component } from '@angular/core';

import * as L from 'leaflet';

@Component({
	selector: 'leafletFilterProgrammaticDemo',
	templateUrl: './programmatic-demo.component.html'
})
export class LeafletFilterProgrammaticDemoComponent {

	center = [ 44.352581, -68.225104 ];

	options = {
		layers: [
			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
		],
		zoom: 8,
		center: L.latLng({ lat: this.center[0], lng: this.center[1] })
	};

	filterOptions = {
		position: 'topright',
		filter: {
			circle: {},
			rectangle: {},
			polygon: {}
		}
	};

	filterState: any;

	createFilter() {
		let filterState: any = null;

		const rVal = Math.random();
		if (rVal < 0.333) {

			// Create a circle
			filterState = {
				type: 'circle',
					center: [ this.center[0] + Math.random() - 0.5, this.center[1] + Math.random() - 0.5 ],
				radius: 40000
			};

		}
		else if (rVal < 0.666) {

			// Create a rectangle
			filterState = {
				type: 'rectangle',
				northEast: {
					lat: this.center[0] + (Math.random() * 0.3 + 0.5),
					lng: this.center[1] + (Math.random() * 0.3 + 0.5)
				},
				southWest: {
					lat: this.center[0] + (Math.random() * 0.3 - 0.5),
					lng: this.center[1] + (Math.random() * 0.3 - 0.5)
				}
			};

		}
		else {

			// Create a polygon
			filterState = {
				type: 'polygon',
				latlngs: [
					[ this.center[0] + (Math.random() * 0.3 + 0.4), this.center[1] - 0.6 ],
					[ this.center[0] + (Math.random() * 0.3 + 0.8), this.center[1] + 0.6 ],
					[ this.center[0] + (Math.random() * 0.3 - 0.4), this.center[1] + 0.6 ]
				]
			};

		}

		this.filterState = filterState;
	}

	clearFilter() {
		this.filterState = null;
	}

	eventHandler = (msg: string, event: any) => {
		// tslint:disable-next-line:no-console
		console.log({ msg, event });
	}

}
