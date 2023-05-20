ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32737").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sukulu_1 = new ol.format.GeoJSON();
var features_Sukulu_1 = format_Sukulu_1.readFeatures(json_Sukulu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Sukulu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sukulu_1.addFeatures(features_Sukulu_1);
var lyr_Sukulu_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sukulu_1, 
                style: style_Sukulu_1,
                interactive: true,
                title: '<img src="styles/legend/Sukulu_1.png" /> Sukulu'
            });
var format_Taarikuru_2 = new ol.format.GeoJSON();
var features_Taarikuru_2 = format_Taarikuru_2.readFeatures(json_Taarikuru_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Taarikuru_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taarikuru_2.addFeatures(features_Taarikuru_2);
var lyr_Taarikuru_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Taarikuru_2, 
                style: style_Taarikuru_2,
                interactive: true,
                title: '<img src="styles/legend/Taarikuru_2.png" /> Taarikuru'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Sukulu_1.setVisible(true);lyr_Taarikuru_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Sukulu_1,lyr_Taarikuru_2];
lyr_Sukulu_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODE': 'CODE', 'SCHOOL_NAM': 'SCHOOL_NAM', 'LEVEL': 'LEVEL', 'Status': 'Status', 'County': 'County', 'DISTRICT': 'DISTRICT', 'ZONE': 'ZONE', 'SUB_COUNTY': 'SUB_COUNTY', 'Ward': 'Ward', 'X_Coord': 'X_Coord', 'Y_Coord': 'Y_Coord', 'Source': 'Source', });
lyr_Taarikuru_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'RID_8': 'RID_8', 'Length_km': 'Length_km', });
lyr_Sukulu_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODE': 'TextEdit', 'SCHOOL_NAM': 'TextEdit', 'LEVEL': 'TextEdit', 'Status': 'TextEdit', 'County': 'TextEdit', 'DISTRICT': 'TextEdit', 'ZONE': 'TextEdit', 'SUB_COUNTY': 'TextEdit', 'Ward': 'TextEdit', 'X_Coord': 'TextEdit', 'Y_Coord': 'TextEdit', 'Source': 'TextEdit', });
lyr_Taarikuru_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'RID_8': 'TextEdit', 'Length_km': 'TextEdit', });
lyr_Sukulu_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODE': 'no label', 'SCHOOL_NAM': 'inline label', 'LEVEL': 'inline label', 'Status': 'inline label', 'County': 'inline label', 'DISTRICT': 'inline label', 'ZONE': 'no label', 'SUB_COUNTY': 'inline label', 'Ward': 'inline label', 'X_Coord': 'inline label', 'Y_Coord': 'inline label', 'Source': 'inline label', });
lyr_Taarikuru_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'RID_8': 'no label', 'Length_km': 'inline label', });
lyr_Taarikuru_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});