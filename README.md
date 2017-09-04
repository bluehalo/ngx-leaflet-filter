# @asymmetrik/ngx-leaflet-filter

[![Build Status][travis-image]][travis-url]

[travis-url]: https://travis-ci.org/Asymmetrik/ngx-leaflet-filter/
[travis-image]: https://travis-ci.org/Asymmetrik/ngx-leaflet-filter.svg


> Leaflet Filter package for Angular 2+
> Provides Angular 2+ integration with the Filter plugin for Leaflet


## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)
- [Credits](#credits)


## Install 
Install the package and its peer dependencies via npm:
```
npm install font-awesome
npm install leaflet
npm install leaflet-draw
npm install @asymmetrik/ngx-leaflet
npm install @asymmetrik/ngx-leaflet-filter
```

If you want to run the demo, clone the repository, perform an ```npm install```, ```gulp dev``` and then go to http://localhost:9000/src/demo/index.html


## Usage
This component extends the [Angular 2 Leaflet component](https://github.com/Asymmetrik/ngx-leaflet) by adding directives for activating and configuring the [Filter plugin for Leaflet](https://github.com/Asymmetrik/leaflet-filter).

Use the ```leaflet-filter``` attribute directive in conjunction with the ```leaflet``` attribute directive to activate a map and enable the filter control.

```html
<div leaflet style="height: 400px;"
     leafletFilter
     [leafletOptions]="options"
     [leafletFilterOptions]="filterOptions"
     [(leafletFilterState)]="filterState"
     (leafletFilterStateChange)="eventHandler('filterChanged', $event)">
```

## API

### leafletFilter
Attribute directive that activates the Leaflet filter plugin.

### leafletFilterOptions
Input binding for Filter control options.

The Filter Control options extend the standard control options.

Example:
```js
var filterOptions = {
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
var filterOptions = {
	position: 'topright'
};
```

Alternatively, if you only specify a subset of the filter types, only those specified will be enabled.

```js
// Only circle and rectangle are enabled
var filterOptions = {
	position: 'topright',
	filter: {
		circle: {},
		rectangle: {}
	}
};
``` 

### leafletFilterState
Binds the current filter state. Can be one of a circle, rectangle, polygon, or null if there is no active filter.


## Contribute
PRs accepted. If you are part of Asymmetrik, please make contributions on feature branches off of the ```develop``` branch. If you are outside of Asymmetrik, please fork our repo to make contributions.


## License
See LICENSE in repository for details.

## Credits
**[Leaflet](http://leafletjs.com/)** Is an awesome mapping package.
**[Leaflet Draw](https://github.com/Leaflet/Leaflet.draw)** Is an awesome extension to Leaflet that lets you draw shapes all over your maps.
