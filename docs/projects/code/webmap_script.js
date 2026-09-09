/** CORONA images and bangalore boundary imported from assets
//GEE users please use this link https://code.earthengine.google.com/7a0c1d04d2217596e8e3e12cc1714ce2
//var corona: Image projects/ee-soniacivil/assets/thesis/merged_corona (1 band)
//var bangalore: Table projects/ee-soniacivil/assets/thesis/bangalore
 * Bengaluru: 58 Years of Change
 * CORONA (1965) vs Sentinel-2 (2023)
 */

// 1. data loading 
var ge = bangalore.geometry();

var composite = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 30))
  .filter(ee.Filter.date('2023-01-01', '2023-12-31'))
  .filter(ee.Filter.bounds(ge))
  .select('B.*')
  .median()
  .clip(ge);

var rgbVis = {min: 0, max: 3000, bands: ['B4', 'B3', 'B2']};
var coronaVis = {min: 0, max: 249.9, bands: ['b1']};

// 2. viewing both maps
var leftMap = ui.Map();
leftMap.addLayer(corona.clip(ge), coronaVis, '1965 CORONA');

var rightMap = ui.Map();
rightMap.addLayer(composite, rgbVis, '2023 Sentinel-2');

var drawingTools = rightMap.drawingTools();
drawingTools.setShown(true);
drawingTools.setDrawModes(['point', 'line', 'polygon']);

// 3. using the link and split
var linker = ui.Map.Linker([leftMap, rightMap]);

var splitPanel = ui.SplitPanel({
  firstPanel: linker.get(0),
  secondPanel: linker.get(1),
  orientation: 'horizontal',
  wipe: true,
  style: {stretch: 'both'}
});

// 4.  text in side panel
var panel = ui.Panel({style: {width: '300px'}});

panel.add(ui.Label({
  value: 'Bengaluru: 58 Years of Urban Change',
  style: {fontWeight: 'bold', fontSize: '18px', margin: '10px 5px'}
}));

panel.add(ui.Label({
  value: 'Left: CORONA KH-4B, 1965 (panchromatic). ' +
         'Right: Sentinel-2 median composite, 2023 (true colour). ' +
         'Drag the centre handle to wipe between the two.',
  style: {margin: '5px 5px 15px 5px'}
}));

panel.add(ui.Label({
  value: 'CORONA data georeferenced and code in Earth Engine. ' +
         'Full analysis by Sonia Das. Source: USGS / ESA — Thesis Project.',
  style: {fontSize: '11px', margin: '5px'}
}));


ui.root.widgets().reset([panel, splitPanel]);
linker.get(0).setCenter(77.5946, 12.9716, 12);
