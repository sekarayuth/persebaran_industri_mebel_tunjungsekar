var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bataskelurahan_1 = new ol.format.GeoJSON();
var features_Bataskelurahan_1 = format_Bataskelurahan_1.readFeatures(json_Bataskelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bataskelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bataskelurahan_1.addFeatures(features_Bataskelurahan_1);
var lyr_Bataskelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bataskelurahan_1, 
                style: style_Bataskelurahan_1,
                popuplayertitle: 'Batas kelurahan',
                interactive: true,
                title: '<img src="styles/legend/Bataskelurahan_1.png" /> Batas kelurahan'
            });
var format_BatasPemukiman_2 = new ol.format.GeoJSON();
var features_BatasPemukiman_2 = format_BatasPemukiman_2.readFeatures(json_BatasPemukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasPemukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasPemukiman_2.addFeatures(features_BatasPemukiman_2);
var lyr_BatasPemukiman_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasPemukiman_2, 
                style: style_BatasPemukiman_2,
                popuplayertitle: 'Batas Pemukiman ',
                interactive: true,
                title: '<img src="styles/legend/BatasPemukiman_2.png" /> Batas Pemukiman '
            });
var format_JalanRaya_3 = new ol.format.GeoJSON();
var features_JalanRaya_3 = format_JalanRaya_3.readFeatures(json_JalanRaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRaya_3.addFeatures(features_JalanRaya_3);
var lyr_JalanRaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRaya_3, 
                style: style_JalanRaya_3,
                popuplayertitle: 'Jalan Raya',
                interactive: true,
                title: '<img src="styles/legend/JalanRaya_3.png" /> Jalan Raya'
            });
var format_BulidAI_4 = new ol.format.GeoJSON();
var features_BulidAI_4 = format_BulidAI_4.readFeatures(json_BulidAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BulidAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BulidAI_4.addFeatures(features_BulidAI_4);
var lyr_BulidAI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BulidAI_4, 
                style: style_BulidAI_4,
                popuplayertitle: 'Bulid AI',
                interactive: true,
                title: '<img src="styles/legend/BulidAI_4.png" /> Bulid AI'
            });
var format_JalanGang_5 = new ol.format.GeoJSON();
var features_JalanGang_5 = format_JalanGang_5.readFeatures(json_JalanGang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_5.addFeatures(features_JalanGang_5);
var lyr_JalanGang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_5, 
                style: style_JalanGang_5,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_5.png" /> Jalan Gang'
            });
var format_JalanPerumahan_6 = new ol.format.GeoJSON();
var features_JalanPerumahan_6 = format_JalanPerumahan_6.readFeatures(json_JalanPerumahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPerumahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPerumahan_6.addFeatures(features_JalanPerumahan_6);
var lyr_JalanPerumahan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanPerumahan_6, 
                style: style_JalanPerumahan_6,
                popuplayertitle: 'Jalan Perumahan',
                interactive: true,
                title: '<img src="styles/legend/JalanPerumahan_6.png" /> Jalan Perumahan'
            });
var format_JalanDesa_7 = new ol.format.GeoJSON();
var features_JalanDesa_7 = format_JalanDesa_7.readFeatures(json_JalanDesa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_7.addFeatures(features_JalanDesa_7);
var lyr_JalanDesa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_7, 
                style: style_JalanDesa_7,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_7.png" /> Jalan Desa'
            });
var format_BatasFasilitasUmum_8 = new ol.format.GeoJSON();
var features_BatasFasilitasUmum_8 = format_BatasFasilitasUmum_8.readFeatures(json_BatasFasilitasUmum_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasFasilitasUmum_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasFasilitasUmum_8.addFeatures(features_BatasFasilitasUmum_8);
var lyr_BatasFasilitasUmum_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasFasilitasUmum_8, 
                style: style_BatasFasilitasUmum_8,
                popuplayertitle: 'Batas Fasilitas Umum',
                interactive: true,
                title: '<img src="styles/legend/BatasFasilitasUmum_8.png" /> Batas Fasilitas Umum'
            });
var format_MabelTanjungSekar_9 = new ol.format.GeoJSON();
var features_MabelTanjungSekar_9 = format_MabelTanjungSekar_9.readFeatures(json_MabelTanjungSekar_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MabelTanjungSekar_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MabelTanjungSekar_9.addFeatures(features_MabelTanjungSekar_9);
var lyr_MabelTanjungSekar_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MabelTanjungSekar_9, 
                style: style_MabelTanjungSekar_9,
                popuplayertitle: 'Mabel TanjungSekar',
                interactive: true,
                title: '<img src="styles/legend/MabelTanjungSekar_9.png" /> Mabel TanjungSekar'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Bataskelurahan_1.setVisible(true);lyr_BatasPemukiman_2.setVisible(true);lyr_JalanRaya_3.setVisible(true);lyr_BulidAI_4.setVisible(true);lyr_JalanGang_5.setVisible(true);lyr_JalanPerumahan_6.setVisible(true);lyr_JalanDesa_7.setVisible(true);lyr_BatasFasilitasUmum_8.setVisible(true);lyr_MabelTanjungSekar_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Bataskelurahan_1,lyr_BatasPemukiman_2,lyr_JalanRaya_3,lyr_BulidAI_4,lyr_JalanGang_5,lyr_JalanPerumahan_6,lyr_JalanDesa_7,lyr_BatasFasilitasUmum_8,lyr_MabelTanjungSekar_9];
lyr_Bataskelurahan_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Penduduk': 'Penduduk', 'Luas': 'Luas', 'Kode Pos': 'Kode Pos', });
lyr_BatasPemukiman_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', });
lyr_JalanRaya_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_BulidAI_4.set('fieldAliases', {'FID': 'FID', });
lyr_JalanGang_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_JalanPerumahan_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_JalanDesa_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_BatasFasilitasUmum_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'Alamat': 'Alamat', });
lyr_MabelTanjungSekar_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'No Telepon': 'No Telepon', });
lyr_Bataskelurahan_1.set('fieldImages', {'id': 'Hidden', 'Nama': 'Hidden', 'Penduduk': 'Hidden', 'Luas': 'Hidden', 'Kode Pos': 'Hidden', });
lyr_BatasPemukiman_2.set('fieldImages', {'id': 'Hidden', 'Nama': 'Hidden', 'Luas': 'Hidden', 'Kelurahan': 'Hidden', 'Kecamatan': 'Hidden', });
lyr_JalanRaya_3.set('fieldImages', {'id': 'Hidden', 'Nama': 'Hidden', 'Panjang': 'Hidden', });
lyr_BulidAI_4.set('fieldImages', {'FID': 'Hidden', });
lyr_JalanGang_5.set('fieldImages', {'id': 'Hidden', 'Nama': 'Hidden', 'Panjang': 'Hidden', });
lyr_JalanPerumahan_6.set('fieldImages', {'id': 'Hidden', 'Nama': 'Hidden', 'Panjang': 'Hidden', });
lyr_JalanDesa_7.set('fieldImages', {'id': 'Hidden', 'Nama': 'Hidden', 'Panjang': 'Hidden', });
lyr_BatasFasilitasUmum_8.set('fieldImages', {'id': 'Hidden', 'Nama': 'Hidden', 'Luas': 'Hidden', 'Alamat': 'Hidden', });
lyr_MabelTanjungSekar_9.set('fieldImages', {'id': 'Hidden', 'Nama': 'TextEdit', 'Alamat': 'Hidden', 'No Telepon': 'Hidden', });
lyr_Bataskelurahan_1.set('fieldLabels', {});
lyr_BatasPemukiman_2.set('fieldLabels', {});
lyr_JalanRaya_3.set('fieldLabels', {});
lyr_BulidAI_4.set('fieldLabels', {});
lyr_JalanGang_5.set('fieldLabels', {});
lyr_JalanPerumahan_6.set('fieldLabels', {});
lyr_JalanDesa_7.set('fieldLabels', {});
lyr_BatasFasilitasUmum_8.set('fieldLabels', {});
lyr_MabelTanjungSekar_9.set('fieldLabels', {'Nama': 'no label', });
lyr_MabelTanjungSekar_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});