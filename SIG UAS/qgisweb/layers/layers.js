var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PetaKabPemalang_0 = new ol.format.GeoJSON();
var features_PetaKabPemalang_0 = format_PetaKabPemalang_0.readFeatures(json_PetaKabPemalang_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaKabPemalang_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PetaKabPemalang_0.addFeatures(features_PetaKabPemalang_0);var lyr_PetaKabPemalang_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PetaKabPemalang_0, 
                style: style_PetaKabPemalang_0,
    title: 'Peta Kab.Pemalang<br />\
    <img src="styles/legend/PetaKabPemalang_0_0.png" />  237 - 28393 <br />\
    <img src="styles/legend/PetaKabPemalang_0_1.png" />  28393 - 56550 <br />\
    <img src="styles/legend/PetaKabPemalang_0_2.png" />  56550 - 84706 <br />\
    <img src="styles/legend/PetaKabPemalang_0_3.png" />  84706 - 112862 <br />'
        });

lyr_PetaKabPemalang_0.setVisible(true);
var layersList = [baseLayer,lyr_PetaKabPemalang_0];
lyr_PetaKabPemalang_0.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'penduduk21': 'penduduk21', 'LuasTanam': 'LuasTanam', 'kelapa': 'kelapa', });
lyr_PetaKabPemalang_0.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'penduduk21': 'TextEdit', 'LuasTanam': 'TextEdit', 'kelapa': 'TextEdit', });
lyr_PetaKabPemalang_0.set('fieldLabels', {'ID': 'inline label', 'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'penduduk21': 'inline label', 'LuasTanam': 'inline label', 'kelapa': 'inline label', });
lyr_PetaKabPemalang_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});