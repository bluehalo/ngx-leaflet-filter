# @asymmetrik/angular2-leaflet-filter

[![Build Status][travis-image]][travis-url]

> Leaflet Filter package for Angular 2
> Provides Angular 2 integration with the Filter plugin for Leaflet

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)
- [Credits](#credits)


## Install 
Install the package via npm:
```
npm install @asymmetrik/angular2-leaflet-filter
```

## Usage
Use the ```leaflet-filter``` attribute directive in conjunction with the ```leaflet``` attribute directive to activate a map and enable the filter control.

```html
<div leaflet style="height: 400px;"
     leaflet-filter
     [leafletOptions]="options"
     [leafletFilterOptions]="filterOptions"
     [(leafletFilterState)]="filterState"
     (leafletFilterStateChange)="eventHandler('filterChanged', $event)">
```

## API

### leaflet-filter
Attribute directive that activates the Leaflet filter plugin.

### leafletFilterOptions
Input binding for Filter control options.

The Filter Control options extend the standard control options.

Example:
```js
var options = {
	position: 'topright',
	filter: {
		rectangle: {},
		polygon: {},
		circle: {},
	},
	featureGroup: featureGroup
};
```

#### featureGroup
You may choose to provide your own featureGroup layer to the plugin. This is the layer in which the plugin will place all drawn filter shapes. If you specify the featureGroup, it's your job to make sure it's added to the map.
If you don't specify a featureGroup, the component will create one for you.

```js
var featureGroup = L.featureGroup();
featureGroup.addTo(map);

var options = {
	featureGroup: featureGroup
};
```

#### position
Determines the position on the map where the control will be placed.

Possible values: 'topright' | **'topleft'** | 'bottomleft' | 'bottomright'


#### filter
Used to configure the various filter types.

Possible properties: **circle** | **rectangle** | **polygon**

If you omit the filter object entirely, all filter types will be enabled by default.

```js
// All filter types enabled
var options = {
	position: 'topright'
};
```

Alternatively, if you only specify a subset of the filter types, only those specified will be enabled.

```js
// Only circle and rectangle are enabled
var options = {
	position: 'topright',
	filter: {
		circle: {},
		rectangle: {}
	}
};
``` 


## Contribute
PRs accepted. If you are part of Asymmetrik, please make contributions on feature branches off of the ```develop``` branch. If you are outside of Asymmetrik, please fork our repo to make contributions.


## License
See LICENSE in repository for details.

[travis-url]: https://travis-ci.org/Asymmetrik/angular2-leaflet-filter/
[travis-image]: https://travis-ci.org/Asymmetrik/angular2-leaflet-filter.svg
